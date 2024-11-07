class Recipe:
    def __init__(id, self, name, ingredients, instructions, date):
        self.id = id                        # Recipe id
        self.name = name                    # Recipe name
        self.ingredients = ingredients      # List of ingredients
        self.instructions = instructions    # Instructions as a string
        self.date = date                    # Date the recipe was created
    
    # def display_recipe(self):
    #     """Display the full recipe details."""
    #     print(f"Recipe Name: {self.name}")
    #     print("\nIngredients:")
    #     for ingredient in self.ingredients:
    #         print(f"- {ingredient}")
    #     print("\nInstructions:")
    #     print(self.instructions)

class RecipeController:
    def __init__(self):
        self.recipes = []  # List to store recipes

    def add_recipe(self, recipe):
        """Add a new recipe to the list."""
        self.recipes.append(recipe)
        print(f"Recipe '{recipe.name}' added successfully.")

    def delete_recipe(self, recipe_name):
        """Delete a recipe by name."""
        for recipe in self.recipes:
            if recipe.name == recipe_name:
                self.recipes.remove(recipe)
                print(f"Recipe '{recipe_name}' deleted successfully.")
                return
        print(f"Recipe '{recipe_name}' not found.")

    def display_all_recipes(self):
        """Display all recipes stored in the controller."""
        if not self.recipes:
            print("No recipes available.")
            return
        print("All Recipes:")
        for recipe in self.recipes:
            print(f"- {recipe.name}")