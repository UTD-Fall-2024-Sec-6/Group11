# Required Info For our Test Classes
Below is all the information needed for this Phase regarding the classes and test cases for our two important use cases.

## Our two use cases for this phase are...
### 1. Adding a Recipe
### 2. Deleting a Recipe

## Code of all classes that are important for these 2 use cases
Our code for these classes was written in Python. Our two classes, "Recipe" and "RecipeController" can be found in recipe_classes.py.
Testing was performed on two functions of the RecipeController class. The first is "add_recipe", and the second is "delete_recipe".

## Identification of input values, their type, value specification, valid/invalid/exceptional values
### For Adding Recipes
<img width="597" alt="image" src="https://github.com/user-attachments/assets/510cd6f2-d4f1-4996-b296-8e6fe7bcedf9">

### For Deleting Recipes
<img width="593" alt="image" src="https://github.com/user-attachments/assets/2dc83445-797a-4f04-ac01-69cfd5f9e33e">

## Total number of test cases that can be written and their corresponding output
All rows crossed out are test cases that are unnecessary to implement.
### For Adding Recipes
<img width="477" alt="image" src="https://github.com/user-attachments/assets/d9a2c0bd-6ba3-4e99-888c-3f45236a43f7">

### For Deleting Recipes
<img width="431" alt="image" src="https://github.com/user-attachments/assets/9da64a45-0339-4566-875e-b92eecc4574e">

## Concrete values for the narrowed-down test cases
### For Adding Recipes
Assume that the RecipeController initially contains a valid recipe with an ID of 1.
<img width="529" alt="image" src="https://github.com/user-attachments/assets/84fe86b7-badc-4142-8801-2c54465092ca">
<img width="527" alt="image" src="https://github.com/user-attachments/assets/c359ea6a-f314-40e9-93ca-f4820fc535d9">

### For Deleting Recipes
Assume that the RecipeController contains a valid recipe with an ID of 1.

<img width="426" alt="image" src="https://github.com/user-attachments/assets/1fec9fea-6d88-460c-9323-c11f3f219d80">

## Code/Implementation of the concrete test cases
To view the implementation of all of the test cases, open the "recipe_testing.py" file.

To run the "recipe_testing.py" program, cd into a directory that contains both "recipe_classes.py" and "recipe_testing.py".
In the terminal, type the following command:
#### python -m unittest recipe_testing.py

All of the written test cases should have passed.
