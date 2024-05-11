USE recipes;

-- Inserting test data for No-Bake Cheesecake
INSERT INTO Recipes (recipe_id, recipe_name, cooking_time, preparation_time, spiciness)
VALUES (8, 'No-Bake Cheesecake', 0, 180, 0);

INSERT INTO Categories (category_id, category_name)
VALUES (10, 'Cake'),
       (11, 'No-Bake'),
       (12, 'Vegetarian');

INSERT INTO Ingredients (ingredient_id, ingredient_name)
VALUES (29, 'Condensed milk'),
       (30, 'Cream Cheese'),
       (31, 'Lemon Juice'),
       (32, 'Pie Crust'),
       (33, 'Cherry Jam');

INSERT INTO RecipeIngredients (recipe_id, ingredient_id, quantity, unit, prep_type)
VALUES (8, 29, NULL, NULL, NULL),
       (8, 30, NULL, NULL, NULL),
       (8, 31, NULL, NULL, NULL),
       (8, 32, NULL, NULL, NULL),
       (8, 33, NULL, NULL, NULL);

INSERT INTO Directions (direction_id, instruction)
VALUES (35, 'Beat Cream Cheese'),
       (36, 'Add Condensed Milk and blend'),
       (37, 'Add Lemon Juice and blend'),
       (38, 'Add the mix to the pie crust'),
       (39, 'Spread the Cherry Jam'),
       (40, 'Place in refrigerator for 3 hours');

INSERT INTO RecipeDirections (recipe_id, direction_id, step_number)
VALUES (8, 35, 1),
       (8, 36, 2),
       (8, 37, 3),
       (8, 38, 4),
       (8, 39, 5),
       (8, 40, 6);

-- Inserting test data for Roasted Brussels Sprouts
INSERT INTO Recipes (recipe_id, recipe_name, cooking_time, preparation_time, spiciness)
VALUES (9, 'Roasted Brussels Sprouts', 30, 20, 1);

INSERT INTO Categories (category_id, category_name)
VALUES (13, 'Vegan'),
       (14, 'Gluten-Free');

INSERT INTO Ingredients (ingredient_id, ingredient_name)
VALUES (34, 'Brussels Sprouts'),
       (35, 'Lemon juice'),
       (36, 'Sesame seeds'),
       (37, 'Pepper'),
       (38, 'Salt'),
       (39, 'Olive oil');

INSERT INTO RecipeIngredients (recipe_id, ingredient_id, quantity, unit, prep_type)
VALUES (9, 34, NULL, NULL, 'tailed and outer layers removed'),
       (9, 35, 50, 'ml', NULL),
       (9, 36, 5, 'tablespoons', NULL),
       (9, 37, NULL, NULL, NULL),
       (9, 38, NULL, NULL, NULL),
       (9, 39, 3, 'tablespoon', NULL);

INSERT INTO Directions (direction_id, instruction)
VALUES (41, 'Preheat the oven'),
       (42, 'Mix the ingredients in a bowl'),
       (43, 'Spread the mix on a baking sheet'),
       (44, 'Bake for 30 minutes');

INSERT INTO RecipeDirections (recipe_id, direction_id, step_number)
VALUES (9, 41, 1),
       (9, 42, 2),
       (9, 43, 3),
       (9, 44, 4);

-- Inserting test data for Mac & Cheese
INSERT INTO Recipes (recipe_id, recipe_name, cooking_time, preparation_time, spiciness)
VALUES (10, 'Mac & Cheese', 15, 10, 1);

INSERT INTO Categories (category_id, category_name)
VALUES (15, 'Vegetarian');

INSERT INTO Ingredients (ingredient_id, ingredient_name)
VALUES (40, 'Macaroni'),
       (41, 'Butter'),
       (42, 'Flour'),
       (43, 'Salt'),
       (44, 'Pepper'),
       (45, 'Milk'),
       (46, 'Shredded Cheddar cheese');

INSERT INTO RecipeIngredients (recipe_id, ingredient_id, quantity, unit, prep_type)
VALUES (10, 40, NULL, NULL, NULL),
       (10, 41, 3, 'tablespoons', NULL),
       (10, 42, 3, 'tablespoons', NULL),
       (10, 43, NULL, NULL, NULL),
       (10, 44, NULL, NULL, NULL),
       (10, 45, 250, 'ml', NULL),
       (10, 46, 500, 'grams', 'grated');

INSERT INTO Directions (direction_id, instruction)
VALUES (45, 'Cook Macaroni for 8 minutes'),
       (46, 'Melt butter in a saucepan'),
       (47, 'Add flour, salt, pepper and mix'),
       (48, 'Add Milk and mix'),
       (49, 'Cook until mix is smooth'),
       (50, 'Add cheddar cheese'),
       (51, 'Add the macaroni');

INSERT INTO RecipeDirections (recipe_id, direction_id, step_number)
VALUES (10, 45, 1),
       (10, 46, 2),
       (10, 47, 3),
       (10, 48, 4),
       (10, 49, 5),
       (10, 50, 6),
       (10, 51, 7);

-- Inserting test data for Tamagoyaki Japanese Omelette
INSERT INTO Recipes (recipe_id, recipe_name, cooking_time, preparation_time, spiciness)
VALUES (11, 'Tamagoyaki Japanese Omelette', 5, 5, 1);

INSERT INTO Categories (category_id, category_name)
VALUES (16, 'Vegetarian'),
       (17, 'Japanese');

INSERT INTO Ingredients (ingredient_id, ingredient_name)
VALUES (47, 'Eggs'),
       (48, 'Soy sauce'),
       (49, 'Sugar'),
       (50, 'Salt'),
       (51, 'Olive Oil');

INSERT INTO RecipeIngredients (recipe_id, ingredient_id, quantity, unit, prep_type)
VALUES (11, 47, 4, 'units', NULL),
       (11, 48, 1, 'tablespoon', NULL),
       (11, 49, 1, 'tablespoon', NULL),
       (11, 50, 1, 'teaspoon', NULL),
       (11, 51, 2, 'tablespoon', NULL);

INSERT INTO Directions (direction_id, instruction)
VALUES (52, 'Beat the eggs'),
       (53, 'Add soya sauce, sugar and salt'),
       (54, 'Add oil to a sauce pan'),
       (55, 'Bring to medium heat'),
       (56, 'Add some mix to the sauce pan'),
       (57, 'Let it cook for 1 minute'),
       (58, 'Remove pan from fire');

INSERT INTO RecipeDirections (recipe_id, direction_id, step_number)
VALUES (11, 52, 1),
       (11, 53, 2),
       (11, 54, 3),
       (11, 55, 4),
       (11, 56, 5),
       (11, 57, 6),
       (11, 58, 7);














































-- Inserting test data into the Recipes table
Insert into
    Recipes (
        recipe_id, recipe_name, cooking_time, preparation_time, spiciness
    )
values (
        1, 'Spaghetti Carbonara', 30, 15, 2
    ),
    (
        2, 'Margherita Pizza', 20, 30, 1
    ),
    (3, 'Chicken Curry', 40, 20, 4),
    (
        4, 'No-Bake Cheesecake', 180, 15, 0
    ),
    (
        5, 'Roasted Brussel Sprouts', 30, 20, 1
    ),
    (6, 'Mac & Cheese', 15, 10, 1),
    (
        7, 'Tamagoyaki Japanese Omelette', 5, 5, 1
    );

-- Inserting test data into the Ingredients table
Insert into
    Ingredients (
        ingredient_id, ingredient_name
    )
values (1, 'Pasta'),
    (2, 'Bacon'),
    (3, 'Eggs'),
    (4, 'Cheese'),
    (5, 'Tomato Sauce'),
    (6, 'Pizza Dough'),
    (7, 'Mozzarella'),
    (8, 'Basil'),
    (9, 'Chicken'),
    (10, 'Curry Powder'),
    (11, 'Coconut Milk'),
    (12, 'Condense Milk'),
    (13, 'Cream Cheese'),
    (14, 'Lemon juice'),
    (15, 'Pie Crust'),
    (16, 'Cherry Jam'),
    (17, 'Brussel Sprouts'),
    (18, 'Sesame Seeds'),
    (19, 'Pepper'),
    (20, 'Salt'),
    (21, 'Olive oil'),
    (22, 'Macaroni'),
    (23, 'Butter'),
    (24, 'Flour'),
    (25, 'Milk'),
    (26, 'Cheddar Cheese'),
    (27, 'Soy Sauce'),
    (28, 'Sugar');
-- Inserting test data into the Directions table
INSERT INTO
    Directions (direction_id, instruction)
VALUES (
        1, 'Boil pasta until al dente.'
    ),
    (2, 'Cook bacon until crispy.'),
    (
        3, 'Mix eggs and cheese in a bowl.'
    ),
    (
        4, 'Combine pasta with bacon, eggs, and cheese.'
    ),
    (
        5, 'Spread tomato sauce on prepared pizza dough.'
    ),
    (
        6, 'Top with slices of mozzarella and fresh basil.'
    ),
    (
        7, 'Bake in preheated oven at 220C for 15 minutes.'
    ),
    (
        8, 'Brown chicken pieces in a skillet.'
    ),
    (
        9, 'Add curry powder and other spices.'
    ),
    (
        10, 'Pour in coconut milk and simmer until chicken is cooked through.'
    ),
    (11, 'Beat Cream cheese'),
    (
        12, 'Add condensed Milk and blend'
    ),
    (
        13, 'Add lemon juice and blend'
    ),
    (
        14, 'Add the mix to the pie crust'
    ),
    (15, 'Spred the Cherry Jam'),
    (
        16, 'Place in the refrigerator for 3h'
    ),
    (17, 'Preheat the oven'),
    (
        18, 'Mix the ingredients in a bowl'
    ),
    (
        19, 'Spread the mix on baking sheet'
    ),
    (20, 'Bake for 30 minutes'),
    (
        21, 'Cook Macaroni for 8 minutes'
    ),
    (
        22, 'Melt butter in a saucepan'
    ),
    (
        23, 'Add flour, salt, pepper and mix'
    ),
    (24, 'Add milk and mix'),
    (
        25, 'Cook until mix is smooth'
    ),
    (26, 'Add Cheddar Cheese'),
    (27, 'Add the macaroni'),
    (28, 'Beat the eggs'),
    (
        29, 'Add soya sauce, sugar and salt'
    ),
    (30, 'Add oil to sauce pan'),
    (31, 'Bring to medium heat'),
    (
        32, 'Add some mix to the sauce pan'
    ),
    (
        33, 'Let this cook for 1 minute'
    ),
    (34, 'Remove pan from fire');

-- Inserting test data into the RecipeDirections table
INSERT INTO
    RecipeDirections (
        recipe_id, direction_id, step_number
    )
VALUES (1, 1, 1),
    (1, 2, 2),
    (1, 3, 3),
    (1, 4, 4),
    (2, 5, 1),
    (2, 6, 2),
    (2, 7, 3),
    (3, 8, 1),
    (3, 9, 2),
    (3, 10, 3),
    (4, 11, 1),
    (4, 12, 2),
    (4, 13, 3),
    (4, 14, 4),
    (4, 15, 5),
    (4, 16, 6),
    (5, 17, 1),
    (5, 18, 2),
    (5, 19, 3),
    (5, 20, 4),
    (6, 21, 1),
    (6, 22, 2),
    (6, 23, 3),
    (6, 24, 4),
    (6, 25, 5),
    (6, 26, 6),
    (6, 27, 7),
    (7, 28, 1),
    (7, 29, 2),
    (7, 30, 3),
    (7, 31, 4),
    (7, 32, 5),
    (7, 33, 6),
    (7, 34, 7);

-- Inserting test data into the Categories table
INSERT INTO
    Categories (category_id, category_name)
VALUES (1, 'Italian'),
    (2, 'Fast Food'),
    (3, 'Indian'),
    (4, 'Cake'),
    (5, 'No-Bake'),
    (6, 'Vegetarian'),
    (7, 'Vegan'),
    (8, 'Gluten-free'),
    (9, 'Japanese');

-- Inserting test data into the RecipeIngredients table
INSERT INTO
    RecipeIngredients (
        recipe_id, ingredient_id, quantity, unit, prep_type
    )
VALUES (1, 1, 100, 'grams', 'None'),
    (1, 2, 50, 'grams', 'Sliced'),
    (1, 3, 2, 'units', 'None'),
    (1, 4, 50, 'grams', 'Shredded'),
    (2, 5, 100, 'grams', 'None'),
    (2, 6, 1, 'unit', 'None'),
    (2, 7, 100, 'grams', 'Sliced'),
    (2, 8, 5, 'leaves', 'None'),
    (3, 9, 200, 'grams', 'Cubed'),
    (
        3, 10, 2, 'tablespoons', 'None'
    ),
    (3, 11, 400, 'ml', 'None'),
    (4, 12, 400, 'ml', 'None'),
    (4, 13, 100, 'grams', 'None'),
    (4, 14, 50, 'ml', 'None'),
    (4, 15, 1, 'unit', 'None'),
    (4, 16, 400, 'ml', 'None'),
    (5, 14, 50, 'ml', 'None'),
    (
        5, 17, 400, 'grams', 'tailed and outer layers removed'
    ),
    (
        5, 18, 5, 'tablespoons', 'None'
    ),
    (5, 19, 1, 'teaspoon', 'None'),
    (5, 20, 1, 'teaspoon', 'None'),
    (
        5, 21, 3, 'tablespoon', 'None'
    ),
    (6, 19, 2, 'teaspoon', 'None'),
    (6, 20, 2, 'teaspoon', 'None'),
    (6, 22, 500, 'grams', 'None'),
    (
        6, 23, 3, 'tablespoon', 'None'
    ),
    (
        6, 24, 3, 'tablespoons', 'None'
    ),
    (6, 25, 250, 'ml', 'None'),
    (6, 26, 500, 'grams', 'grated'),
    (7, 3, 4, 'units', 'None'),
    (7, 20, 1, 'teaspoon', 'None'),
    (
        7, 21, 2, 'tablespoon', 'None'
    ),
    (
        7, 27, 1, 'tablespoon', 'None'
    ),
    (7, 28, 1, 'teaspoon', 'None');
-- Inserting test data into the RecipeCategories table
INSERT INTO
    RecipeCategories (recipe_id, category_id)
VALUES (1, 1),
    (2, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (4, 5),
    (4, 6),
    (5, 7),
    (5, 8),
    (6, 6),
    (7, 6),
    (7, 9);