### Normalization check of the recipes database

To check if the recipes database is normalized, all tables need to go through the taste. First let's list the requirements for 1NF, 2Nf, 3NF:

#### First Normal Form (1NF)

A table is in 1NF if:

- 1. All columns contain only atomic (indivisible) values.
- 2. Each column contains values of a single type.
- 3. Each column contains unique names.
- 4. The order in which data is stored does not matter.

#### Second Normal Form (2NF)

A table is in 2NF if:

- 1.  It is already in 1NF.
- 2.  All non-key attributes are fully functional dependent on the primary key.

#### Third Normal Form (3NF)

A table is in 3NF if:

- 1.  It is already in 2NF.
- 2.  There are no transitive dependencies (i.e., non-key attributes are not dependent on other non-key attributes).

The tables are:

+-------------------+
| Tables_in_recipes |
+-------------------+
| categories |
| directions |
| ingredients |
| recipecategories |
| recipedirections |
| recipeingredients |
| recipes |
+-------------------+
let's start with the recipes table:

+-----------+------------------------------+--------------+------------------+-----------+
| recipe_id | recipe_name | cooking_time | preparation_time | spiciness |
+-----------+------------------------------+--------------+------------------+-----------+
| 1 | Spaghetti Carbonara | 30 | 15 | 2 |
| 2 | Margherita Pizza | 20 | 30 | 1 |
| 3 | Chicken Curry | 40 | 20 | 4 |
| 4 | No-Bake Cheesecake | 180 | 15 | 0 |
| 5 | Roasted Brussel Sprouts | 30 | 20 | 1 |
| 6 | Mac & Cheese | 15 | 10 | 1 |
| 7 | Tamagoyaki Japanese Omelette | 5 | 5 | 1 |
| 8 | No-Bake Cheesecake | 0 | 180 | 0 |
| 9 | Roasted Brussels Sprouts | 30 | 20 | 1 |
| 10 | Mac & Cheese | 15 | 10 | 1 |
| 11 | Tamagoyaki Japanese Omelette | 5 | 5 | 1 |
+-----------+------------------------------+--------------+------------------+-----------+

This table is in 3NF because:

- It satisfies 1NF by having atomic values and unique column names.
- It satisfies 2NF by having all non-key attributes fully dependent on the primary key.
- It satisfies 3NF by having no transitive dependencies between non-key attributes.

#### Categories table:

+-------------+---------------+
| category_id | category_name |
+-------------+---------------+
| 1 | Italian |
| 2 | Fast Food |
| 3 | Indian |
| 4 | Cake |
| 5 | No-Bake |
| 6 | Vegetarian |
| 7 | Vegan |
| 8 | Gluten-free |
| 9 | Japanese |
| 10 | Cake |
| 11 | No-Bake |
| 12 | Vegetarian |
| 13 | Vegan |
| 14 | Gluten-Free |
| 15 | Vegetarian |
| 16 | Vegetarian |
| 17 | Japanese |
+-------------+---------------+
The table is in 3NF because:

- It satisfies 1NF by having atomic values and unique column names.
- It satisfies 2NF by having all non-key attributes fully dependent on the primary key.
- It satisfies 3NF by having no transitive dependencies.

### Conclusion:

Checking the remaining tables in a similar manner, they are all in 3NF, highly normalize because they are free of redundancy and dependency issues. Even though, there are some tables with rows with different ID, but with the same value for some fields, this don't prevent them from being normalized as they satisfy the criteria. This does have effect on the data integrity though. For example, in the categories table we have many vegetarian lines.
