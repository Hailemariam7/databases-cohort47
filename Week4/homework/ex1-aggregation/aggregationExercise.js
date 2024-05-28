const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

let client;

async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("aggregationExercise");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    process.exit(1);
  }
}

async function countryPopulation(countryName) {
  const database = await connectToDatabase();
  const collection = database.collection("population");

  try {
    const pipeline = [
      { $match: { Country: countryName } },
      {
        $group: {
          _id: "$Year",
          population: { $sum: { $add: ["$M", "$F"] } },
        },
      },
      { $sort: { _id: 1 } },
      { $project: { Year: "$_id", population: 1, _id: 0 } }, // Rename _id to Year
    ];

    const result = await collection.aggregate(pipeline).toArray();
    return result;
  } catch (err) {
    console.error("Error executing aggregation", err);
  }
}

async function continentPopulationByYearAndAge(year, age) {
  const database = await connectToDatabase();
  const collection = database.collection("population");
  const continents = [
    "AFRICA",
    "ASIA",
    "EUROPE",
    "LATIN AMERICA AND THE CARIBBEAN",
    "NORTHERN AMERICA",
    "OCEANIA",
  ];

  try {
    const pipeline = [
      { $match: { Year: year, Age: age, Country: { $in: continents } } },
      {
        $addFields: {
          TotalPopulation: { $sum: ["$M", "$F"] },
        },
      },
      {
        $sort: { Continent: 1 }, // Sort by Continent in ascending order
      },
      {
        $project: {
          _id: 0,
          Continent: "$Country", // Rename Country to Continent
          Year: 1,
          Age: 1,
          M: 1,
          F: 1,
          TotalPopulation: 1,
        },
      },
    ];

    const result = await collection.aggregate(pipeline).toArray();
    return result;
  } catch (err) {
    console.error("Error executing aggregation", err);
  }
}

async function main() {
  const netherlandsPopulation = await countryPopulation("Netherlands");
  console.log(
    "Netherlands population from 1950 upto 2022: ",
    netherlandsPopulation
  );

  const continentPopulation = await continentPopulationByYearAndAge(
    2020,
    "100+"
  );
  console.log(
    "Continent population for 2020 and age 100+: ",
    continentPopulation
  );

  if (client) {
    await client.close();
  }
}

main();
