const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "MySQLpassword",
  database: "studentMeeting",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");

  connection.query("SELECT * FROM Invitee", (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      connection.end();
      return;
    }
    console.log("Data retrieved from Invitee table:");
    console.log(results);

    connection.end((err) => {
      if (err) {
        console.error("Error closing connection:", err);
        return;
      }
      console.log("Connection to MySQL database closed");
    });
  });
});
