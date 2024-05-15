const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "MySQLpassword",
  database: "world",
});

connection.connect(async (err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");

  try {
    const result1 = await queryExecutor(
      "SELECT Name FROM country WHERE Population > 8000000"
    );
    console.log(
      "1. Countries with population greater than 8 million: ",
      result1
    );

    const result2 = await queryExecutor(
      'SELECT Name FROM country WHERE Name LIKE "%land%"'
    );
    console.log('2. Countries with "land" in their names: ', result2);

    const result3 = await queryExecutor(
      "SELECT Name FROM city WHERE Population BETWEEN 500000 AND 1000000"
    );
    console.log(
      "3. Cities with population between 500,000 and 1 million: ",
      result3
    );

    const result4 = await queryExecutor(
      'SELECT Name FROM country WHERE Continent = "Europe"'
    );
    console.log("4. Countries in Europe: ", result4);

    const result5 = await queryExecutor(
      "SELECT Name FROM country ORDER BY SurfaceArea DESC"
    );
    console.log("5. Countries in descending order of surface area: ", result5);

    const result6 = await queryExecutor(
      'SELECT Name FROM city WHERE CountryCode = "NLD"'
    );
    console.log("6. Cities in the Netherlands: ", result6);

    const result7 = await queryExecutor(
      'SELECT Population FROM city WHERE Name = "Rotterdam"'
    );
    console.log("7. Population of Rotterdam: ", result7);

    const result8 = await queryExecutor(
      "SELECT Name FROM country ORDER BY SurfaceArea DESC LIMIT 10"
    );
    console.log("8. Top 10 countries by Surface Area: ", result8);

    const result9 = await queryExecutor(
      "SELECT Name FROM city ORDER BY Population DESC LIMIT 10"
    );
    console.log("9. Top 10 most populated cities: ", result9);

    const result10 = await queryExecutor("SELECT SUM(Population) FROM country");
    console.log("10. Population of the world: ", result10);
  } catch (error) {
    console.error("Error executing queries:", error);
  } finally {
    connection.end((err) => {
      if (err) {
        console.error("Error closing the connection:", err);
        return;
      }
      console.log("MySQL connection closed");
    });
  }
});

function queryExecutor(queryString) {
  return new Promise((resolve, reject) => {
    connection.query(queryString, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}
