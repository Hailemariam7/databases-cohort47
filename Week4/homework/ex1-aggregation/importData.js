// importData.js
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

async function importCSVToMongoDB() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

  try {
    await client.connect();
    const database = client.db("aggregationExercise");
    const collection = database.collection("population");

    // Clear existing data
    await collection.deleteMany({});

    // Read the CSV file and insert data
    const csvFilePath = path.join(
      __dirname,
      "population_pyramid_1950-2022.csv"
    );
    const records = [];

    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on("data", (row) => {
        const record = {
          Country: row.Country,
          Year: parseInt(row.Year, 10),
          Age: row.Age,
          M: parseInt(row.M, 10),
          F: parseInt(row.F, 10),
        };
        records.push(record);
      })
      .on("end", async () => {
        await collection.insertMany(records);
        console.log("CSV data successfully imported into MongoDB");
        client.close();
      });
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    client.close();
  }
}

importCSVToMongoDB();
