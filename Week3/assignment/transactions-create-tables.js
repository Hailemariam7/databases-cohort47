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

  const createAccountTable = `
    CREATE TABLE IF NOT EXISTS account (
      account_number INT AUTO_INCREMENT PRIMARY KEY,
      balance DECIMAL(10, 2) NOT NULL
    ) AUTO_INCREMENT = 100;
  `;

  const createAccountChangesTable = `
    CREATE TABLE IF NOT EXISTS account_changes (
      change_number INT AUTO_INCREMENT PRIMARY KEY,
      account_number INT NOT NULL,
      amount DECIMAL(10, 2) NOT NULL,
      changed_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      remark TEXT
    );
  `;

  connection.query(createAccountTable, (err, results) => {
    if (err) throw err;
    console.log("Account table created.");

    connection.query(createAccountChangesTable, (err, results) => {
      if (err) throw err;
      console.log("Account changes table created.");

      connection.end();
    });
  });
});
