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

  // Execute SQL queries
  connection.query(`
    CREATE DATABASE IF NOT EXISTS studentMeeting;
    USE studentMeeting;

    CREATE TABLE IF NOT EXISTS Invitee (
      invitee_no INT AUTO_INCREMENT PRIMARY KEY,
      invitee_name VARCHAR(255),
      invited_by VARCHAR(255)
    );

    CREATE TABLE IF NOT EXISTS Room (
      room_no INT AUTO_INCREMENT PRIMARY KEY,
      room_name VARCHAR(255),
      floor_number INT
    );

    CREATE TABLE IF NOT EXISTS Meeting (
      meeting_no INT AUTO_INCREMENT PRIMARY KEY,
      meeting_title VARCHAR(255),
      starting_time DATETIME,
      ending_time DATETIME,
      room_no INT,
      FOREIGN KEY (room_no) REFERENCES Room(room_no)
    );

    INSERT INTO Invitee (invitee_name, invited_by) VALUES
    ('Dawit Tesfaye', 'Elsa Gebre'),
    ('Hirut Tekle', 'Berhane Asgedom'),
    ('Yared Solomon', 'Senait Tadesse'),
    ('Mahlet Berhane', 'Tewelde Negash'),
    ('Solomon Girma', 'Tsega Kidane');

    INSERT INTO Room (room_name, floor_number) VALUES
    ('Meeting Hall 1', 1),
    ('Meeting Hall 2', 2),
    ('Library', 1),
    ('Study Room A', 3),
    ('Study Room B', 2);

    INSERT INTO Meeting (meeting_title, starting_time, ending_time, room_no) VALUES
    ('Weekly Student Meeting', '2024-05-07 09:00:00', '2024-05-07 10:00:00', 1),
    ('Project Evaluation', '2024-05-08 13:00:00', '2024-05-08 15:00:00', 2),
    ('New Student Orientation', '2024-05-10 11:00:00', '2024-05-10 12:30:00', 3),
    ('Training Session', '2024-05-12 10:00:00', '2024-05-12 12:00:00', 4),
    ('Student Activities Discussion', '2024-05-15 14:00:00', '2024-05-15 16:00:00', 5);
  `, (err) => {
    if (err) {
      console.error("Error executing SQL queries:", err);
      connection.end();
      return;
    }
    console.log("SQL queries executed successfully");

    // Close the connection
    connection.end((err) => {
      if (err) {
        console.error("Error closing connection:", err);
        return;
      }
      console.log("Connection to MySQL database closed");
    });
  });
});
