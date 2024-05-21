const { MongoClient, ServerApiVersion } = require("mongodb");
const { seedDatabase } = require("./seedDatabase.js");
require("dotenv").config(); // Ensure you have this to load environment variables

async function createEpisodeExercise(client) {
  const newEpisode = {
    season: 9,
    episode: 13,
    title: "MOUNTAIN HIDE-AWAY",
    elements: [
      "CIRRUS",
      "CLOUDS",
      "CONIFER",
      "DECIDIOUS",
      "GRASS",
      "MOUNTAIN",
      "MOUNTAINS",
      "RIVER",
      "SNOWY_MOUNTAIN",
      "TREE",
      "TREES",
    ],
  };

  const result = await client
    .db("databaseWeek3")
    .collection("bob_ross_episodes")
    .insertOne(newEpisode);
  console.log(
    `Created season 9 episode 13 and the document got the id ${result.insertedId}`
  );
}

async function findEpisodesExercises(client) {
  const db = client.db("databaseWeek3");
  const collection = db.collection("bob_ross_episodes");

  const episode1 = await collection.findOne({ season: 2, episode: 2 });
  console.log(`The title of episode 2 in season 2 is ${episode1.title}`);

  const episode2 = await collection.findOne({ title: "BLACK RIVER" });
  console.log(
    `The season and episode number of the "BLACK RIVER" episode is S${episode2.season
      .toString()
      .padStart(2, "0")}E${episode2.episode.toString().padStart(2, "0")}`
  );

  const episodesWithCliff = await collection
    .find({ elements: "CLIFF" })
    .toArray();
  const titlesWithCliff = episodesWithCliff.map((ep) => ep.title);
  console.log(
    `The episodes that Bob Ross painted a CLIFF are ${titlesWithCliff.join(
      ", "
    )}`
  );

  const episodesWithCliffAndLighthouse = await collection
    .find({ elements: { $all: ["CLIFF", "LIGHTHOUSE"] } })
    .toArray();
  const titlesWithCliffAndLighthouse = episodesWithCliffAndLighthouse.map(
    (ep) => ep.title
  );
  console.log(
    `The episodes that Bob Ross painted a CLIFF and a LIGHTHOUSE are ${titlesWithCliffAndLighthouse.join(
      ", "
    )}`
  );
}

async function updateEpisodeExercises(client) {
  const db = client.db("databaseWeek3");
  const collection = db.collection("bob_ross_episodes");

  const updateResult1 = await collection.updateOne(
    { season: 30, episode: 13 },
    { $set: { title: "BLUE RIDGE FALLS" } }
  );
  console.log(
    `Ran a command to update episode 13 in season 30 and it updated ${updateResult1.modifiedCount} episodes`
  );

  const updateResult2 = await collection.updateMany(
    { elements: "BUSHES" },
    { $set: { "elements.$": "BUSH" } }
  );
  console.log(
    `Ran a command to update all the BUSHES to BUSH and it updated ${updateResult2.modifiedCount} episodes`
  );
}

async function deleteEpisodeExercise(client) {
  const db = client.db("databaseWeek3");
  const collection = db.collection("bob_ross_episodes");

  const deleteResult = await collection.deleteOne({ season: 31, episode: 14 });
  console.log(
    `Ran a command to delete episode and it deleted ${deleteResult.deletedCount} episodes`
  );
}

async function main() {
  if (process.env.MONGODB_URL == null) {
    throw Error(
      `You did not set up the environment variables correctly. Did you create a '.env' file and add a package to create it?`
    );
  }

  const client = new MongoClient(process.env.MONGODB_URL, {
    serverApi: ServerApiVersion.v1,
  });

  try {
    await client.connect();

    // Seed our database
    await seedDatabase(client);

    // CREATE
    await createEpisodeExercise(client);

    // READ
    await findEpisodesExercises(client);

    // UPDATE
    await updateEpisodeExercises(client);

    // DELETE
    await deleteEpisodeExercise(client);
  } catch (err) {
    console.error(err);
  } finally {
    client.close();
  }
}

main();
