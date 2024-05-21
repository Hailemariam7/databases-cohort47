const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "MySQLpassword",
  database: "transaction",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL.");

  const insertAccounts = `
    INSERT INTO account (balance) VALUES
    (5000.00),  
    (3000.00),
    (30000.00),
    (2000.00),
    (1000.00),
    (4500.00),
    (6500.00)  
  `;

  connection.query(insertAccounts, (err, results) => {
    if (err) throw err;
    console.log("Sample data inserted.");

    connection.end();
  });
});
