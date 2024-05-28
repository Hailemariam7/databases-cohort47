const setupDatabase = require("./setup");
const transferMoney = require("./transfer");

async function main() {
  await setupDatabase();
  await transferMoney(101, 102, 1000, "Test transfer");
}

main();
