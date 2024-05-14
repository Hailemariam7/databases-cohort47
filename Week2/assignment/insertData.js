const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "MySQLpassword",
  database: "authors_papers",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }

  console.log("Connected to MySQL database");

  // Insert authors
  const insertAuthors = `
    INSERT INTO authors (author_name, university, date_of_birth, h_index, gender, mentor)
    VALUES
      ('John Doe', 'Harvard University', '1975-08-21', 25, 'M', 'Mentor A'),
      ('Jane Smith', 'Stanford University', '1980-05-12', 20, 'F', 'Mentor B'),
      ('Michael Johnson', 'MIT', '1978-11-30', 30, 'M', 'Mentor C'),
      ('Emma Davis', 'UC Berkeley', '1985-03-17', 18, 'F', 'Mentor D'),
      ('David Brown', 'Caltech', '1970-12-05', 35, 'M', 'Mentor E'),
      ('Sarah Wilson', 'Columbia University', '1982-09-08', 22, 'F', 'Mentor F'),
      ('Robert Lee', 'University of Chicago', '1972-04-25', 28, 'M', 'Mentor G'),
      ('Amanda Martinez', 'Yale University', '1977-06-14', 24, 'F', 'Mentor H'),
      ('James Taylor', 'Princeton University', '1988-11-17', 19, 'M', 'Mentor I'),
      ('Olivia Garcia', 'UPenn', '1984-02-03', 23, 'F', 'Mentor J'),
      ('William Clark', 'University of Michigan', '1979-07-29', 26, 'M', 'Mentor K'),
      ('Sophia Lopez', 'Northwestern University', '1981-12-10', 21, 'F', 'Mentor L'),
      ('Daniel White', 'Duke University', '1976-10-18', 29, 'M', 'Mentor M'),
      ('Isabella Hill', 'UW', '1983-05-07', 17, 'F', 'Mentor N'),
      ('Matthew Martinez', 'Cornell University', '1974-03-22', 31, 'M', 'Mentor O');`;

  connection.query(insertAuthors, (err, results) => {
    if (err) {
      console.error("Error inserting authors:", err);
      return;
    }
    console.log("Authors inserted successfully");

    // Insert papers
    const insertPapers = `
      INSERT INTO research_papers (paper_title, conference, publish_date)
      VALUES
        ('Advancements in Quantum Computing', 'IEEE Quantum Computing', '2023-05-15'),
        ('Machine Learning Techniques for Predictive Analytics', 'ACM Machine Learning', '2022-09-28'),
        ('Applications of CRISPR-Cas9 in Gene Editing', 'Genetics and Genomics', '2024-03-10'),
        ('Emerging Trends in Renewable Energy Technologies', 'Sustainable Energy', '2023-11-18'),
        ('Deep Learning Approaches for Natural Language Processing', 'ACL', '2022-07-05'),
        ('Advances in Cancer Immunotherapy', 'AACR Annual Meeting', '2024-06-22'),
        ('Blockchain Technology and its Applications', 'International Blockchain', '2023-09-14'),
        ('Neural Networks in Robotics: Current Status and Future Prospects', 'IEEE Robotics and Automation', '2022-12-30'),
        ('Urban Planning and Smart Cities: Integrating Technology for Sustainable Development', 'World Urban Forum', '2024-02-08'),
        ('Advancements in Brain-Computer Interfaces for Assistive Technologies', 'Rehabilitation Robotics', '2023-08-17'),
        ('The Role of Artificial Intelligence in Healthcare: Challenges and Opportunities', 'Health Informatics', '2022-04-12'),
        ('Cybersecurity Threats and Countermeasures: A Comprehensive Review', 'Information Security', '2024-01-06'),
        ('Advances in Materials Science for Energy Storage Applications', 'MRS Fall Meeting', '2023-10-25'),
        ('Internet of Things (IoT) in Smart Agriculture: Enhancing Crop Yield and Resource Management', 'Precision Agriculture', '2022-06-30'),
        ('Climate Change Adaptation Strategies: Integrating Science and Policy', 'UN Climate Change Conference', '2024-05-01'),
         ('The Impact of Artificial Intelligence on Job Market Dynamics', 'AI and Future of Work', '2023-07-20'),
    ('Advances in Quantum Cryptography: Securing Communications in the Quantum Era', 'IEEE Cybersecurity', '2022-11-12'),
    ('Bioinformatics Tools for Genome Sequencing and Analysis', 'Bioinformatics Conference', '2024-04-05'),
    ('Ethical Considerations in Autonomous Vehicle Deployment', 'Ethics in Technology Symposium', '2023-10-08'),
    ('Smart Grid Technologies for Sustainable Energy Management', 'IEEE SmartGridComm', '2022-08-15'),
    ('Enhancing Privacy in the Age of Big Data: Challenges and Solutions', 'Privacy Enhancing Technologies', '2024-02-28'),
    ('Advancements in Quantum Communication Networks: A Review', 'Quantum Information Processing', '2023-09-03'),
    ('The Role of Artificial Intelligence in Drug Discovery and Development', 'Pharmaceutical Sciences', '2022-05-18'),
    ('Next-Generation Wireless Networks: 6G Technologies and Beyond', 'IEEE Wireless Communications', '2024-03-15'),
    ('Urban Mobility Solutions: Challenges and Innovations', 'Urban Transport Symposium', '2023-11-30'),
    ('Advances in Protein Structure Prediction Algorithms', 'Protein Science Symposium', '2022-07-25'),
    ('The Future of Digital Marketing: Trends and Insights', 'Digital Marketing Summit', '2024-01-10'),
    ('Biomedical Imaging Techniques for Disease Diagnosis', 'Medical Imaging Conference', '2023-06-22'),
    ('Human-Robot Collaboration in Manufacturing: Opportunities and Challenges', 'IEEE Robotics Symposium', '2022-12-05'),
    ('Sustainable Water Management Strategies for Arid Regions', 'Water Resources Management', '2024-05-18');`;

    connection.query(insertPapers, (err, results) => {
      if (err) {
        console.error("Error inserting papers:", err);
        return;
      }
      console.log("data inserted");

      const insertRelationships = `
    INSERT INTO author_paper_relationship(author_id, paper_id)
    VALUES
      (1, 1), (1, 2), (1, 3),  
      (2, 2), (2, 3), (2, 4),  
      (3, 3), (3, 4), (3, 5),  
      (4, 4), (4, 5), (4, 6),  
      (5, 5), (5, 6), (5, 7),  
      (6, 6), (6, 7), (6, 8),  
      (NULL, 7), (NULL,7), (NULL,7),
      (8, 8), (8, 9), (8, 10), 
      (9, 9), (9, 10), (9, 11),
      (NULL,10), (NULL,10), (NULL,10), 
      (11, 11), (11, 12), (11, 13), 
      (12, 12), (12, 13), (12, 14), 
      (13, 13), (13, 14), (13, 15), 
      (14, 14), (14, 15), (14, 16), 
      (15, 15), (15, 16), (15, 1),  
      (11, 17), (12, 18), (13, 19), 
      (11, 20), (12, 21), (13, 22),
      (11, 23), (12, 24), (13, 25),
      (11, 26), (12, 27), (13, 28),
      (11, 29), (12, 30), (NULL, 13); 
  `;

      connection.query(insertRelationships, function (err, results, fields) {
        if (err) {
          console.error("Error inserting relationships:", err);
          return;
        }
        console.log("Relationships inserted successfully");

        connection.end();
      });
    });
  });
});
