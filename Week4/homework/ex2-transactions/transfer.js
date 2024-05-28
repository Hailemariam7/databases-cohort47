const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

async function transferMoney(fromAccount, toAccount, amount, remark) {
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

    const session = client.startSession();

    const transactionOptions = {
      readPreference: "primary",
      readConcern: { level: "local" },
      writeConcern: { w: "majority" },
    };

    const transactionResults = await session.withTransaction(async () => {
      // Find accounts
      const fromAcc = await collection.findOne({ account_number: fromAccount });
      const toAcc = await collection.findOne({ account_number: toAccount });

      if (!fromAcc || !toAcc) {
        throw new Error("One or both accounts not found.");
      }

      // Check for sufficient balance
      if (fromAcc.balance < amount) {
        throw new Error("Insufficient balance in the source account.");
      }

      // Update balances
      await collection.updateOne(
        { account_number: fromAccount },
        {
          $inc: { balance: -amount },
          $push: {
            account_changes: {
              change_number: fromAcc.account_changes.length + 1,
              amount: -amount,
              changed_date: new Date(),
              remark,
            },
          },
        },
        { session }
      );

      await collection.updateOne(
        { account_number: toAccount },
        {
          $inc: { balance: amount },
          $push: {
            account_changes: {
              change_number: toAcc.account_changes.length + 1,
              amount,
              changed_date: new Date(),
              remark,
            },
          },
        },
        { session }
      );
    }, transactionOptions);

    if (transactionResults) {
      console.log("Transaction succeeded.");
    } else {
      console.log("Transaction intentionally aborted.");
    }
  } catch (error) {
    console.error("Error executing transaction: ", error);
  } finally {
    await client.close();
  }
}

module.exports = transferMoney;
