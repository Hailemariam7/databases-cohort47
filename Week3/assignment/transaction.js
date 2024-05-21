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

  connection.beginTransaction((err) => {
    if (err) throw err;

    const withdraw =
      "UPDATE account SET balance = balance - 1000 WHERE account_number = 101";
    const deposit =
      "UPDATE account SET balance = balance + 1000 WHERE account_number = 102";
    const logWithdrawal = `INSERT INTO account_changes (account_number, amount, remark) VALUES (101, -1000, 'Transfer to account 102')`;
    const logDeposit = `INSERT INTO account_changes (account_number, amount, remark) VALUES (102, 1000, 'Transfer from account 101')`;

    connection.query(withdraw, (err) => {
      if (err) {
        return connection.rollback(() => {
          throw err;
        });
      }

      connection.query(deposit, (err) => {
        if (err) {
          return connection.rollback(() => {
            throw err;
          });
        }

        connection.query(logWithdrawal, (err) => {
          if (err) {
            return connection.rollback(() => {
              throw err;
            });
          }

          connection.query(logDeposit, (err) => {
            if (err) {
              return connection.rollback(() => {
                throw err;
              });
            }

            connection.commit((err) => {
              if (err) {
                return connection.rollback(() => {
                  throw err;
                });
              }
              console.log("Transaction completed successfully.");
              connection.end();
            });
          });
        });
      });
    });
  });
});
