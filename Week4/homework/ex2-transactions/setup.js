const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

async function setupDatabase() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

  try {
    await client.connect();
    const database = client.db("transactionExercise");
    const collection = database.collection("accounts");

    // Clear existing data
    await collection.deleteMany({});

    // Insert sample data
    const sampleData = [
      {
        account_number: 101,
        balance: 5000,
        account_changes: [],
      },
      {
        account_number: 102,
        balance: 3000,
        account_changes: [],
      },
      {
        account_number: 103,
        balance: 7000,
        account_changes: [],
      },
    ];

    await collection.insertMany(sampleData);
    console.log("Database setup completed with sample data.");
  } catch (error) {
    console.error("Error setting up the database: ", error);
  } finally {
    await client.close();
  }
}
module.exports = setupDatabase;
