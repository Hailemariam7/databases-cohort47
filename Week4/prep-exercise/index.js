const fs = require("fs");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

async function main() {
  const uri = process.env.MONGODB_URI;

  const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

  try {
    await client.connect();
    const db = client.db("databaseWeek4");

    // Reading and parsing the JSON files
    const unNormalizedRecipes = JSON.parse(
      fs.readFileSync("unNormalizedRecipes.json", "utf8")
    );
    const recipesData = JSON.parse(fs.readFileSync("recipes.json", "utf8"));
    const ingredientsData = JSON.parse(
      fs.readFileSync("ingredients.json", "utf8")
    );
    const directionsData = JSON.parse(
      fs.readFileSync("directions.json", "utf8")
    );
    const categoriesData = JSON.parse(
      fs.readFileSync("categories.json", "utf8")
    );

    // Inserting the data into respective collections
    await db.collection("unNormalizedRecipes").insertMany(unNormalizedRecipes);
    await db.collection("recipes").insertMany(recipesData);
    await db.collection("ingredients").insertMany(ingredientsData);
    await db.collection("directions").insertMany(directionsData);
    await db.collection("categories").insertMany(categoriesData);

    console.log("Data inserted successfully!");
  } catch (err) {
    console.error("An error occurred while inserting data:", err);
  } finally {
    await client.close();
  }
}

main();

/* 
- What made you decide when to embed information? What assumptions did you make?
    Embedding information of each recipe entirely in one document makes the database concise, easy to query, and easy to understand. However, some redundance will occur as many recipes share ingredients and we will have to insert the same ingredient in many documents. Separating the ingredients into a separate collection solves the problem, which i think is one aspect normalization. 

- If you were given MySQL and MongoDB as choices to build the recipe's database at the beginning, which one would you
  choose and why?
    For the ease of creating the database and ease of understanding the data, I would choose MongoDB.
  
  
  
  */
