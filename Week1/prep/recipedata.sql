USE recipes;

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