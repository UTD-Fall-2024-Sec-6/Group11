class Recipe:
    def __init__(self, id, name, ingredients, instructions):
        if not isinstance(name, str):
            raise TypeError("The name attribute must be a string")

        if not isinstance(id, int):
            raise TypeError("The id attribute must be an int")
        
        if not (isinstance(ingredients, list) and all(isinstance(ingredient, str) for ingredient in ingredients)):
            raise TypeError("The ingredients attribute must be a list of only strings")

        if not (isinstance(instructions, list) and all(isinstance(instruction, str) for instruction in instructions)):
            raise TypeError("The instructions attribute must be a list of only strings")

        self.name = name
        self.id = id
        self.ingredients = ingredients
        self.instructions = instructions
    
    def append_ingredient(self, ingredient):
        if not isinstance(ingredient, str):
            raise TypeError("The added ingredient must be a string")
        
        self.ingredients.append(ingredient)
    
    def append_instruction(self, instruction):
        if not isinstance(instruction, str):
            raise TypeError("The added instruction must be a string")
        
        self.instructions.append(instruction)

    def print_recipe(self):
        ins_count = 1
        print(f"Recipe: {self.name}, with ID {self.id}")
        print()
        print("Ingredients: ")
        for ingredient in self.ingredients:
            print(f"- {ingredient}")
        print()
        print("Instructions: ")
        for instruction in self.instructions:
            print(f"{ins_count}. {instruction}")
            ins_count += 1

class RecipeController:
    def __init__(self):
        self.recipes = []
    
    def is_valid_name(self, s):  # Function to check if the recipe name is valid
        temp = s.replace(" ", "")
        if len(temp) == 0:
            return False
        
        if temp.isalpha():
            return True
        else:
            return False


    def add_recipe(self, recipe):
        # Input must be a Recipe
        if not isinstance(recipe, Recipe):
            #print("Error: Input must be a Recipe")
            return False
        
        # RecipeID must be positive
        if recipe.id <= 0:
            #print("Error: ID must be greater than 0")
            return False

        # RecipeID must be unique
        for item in self.recipes:
            if item.id == recipe.id:
                #print("Error: ID is already stored")
                return False
        
        # Recipe name cannot be empty
        if len(recipe.name) == 0 or len(recipe.name) > 100:
            #print("Error: Recipe name must be between 1-100 characters long")
            return False
        
        # Recipe name can only contain letters and spaces
        if not self.is_valid_name(recipe.name):
            #print("Error: Recipe name must only contain letters and spaces. At least 1 letter required")
            return False
        
        # Number of ingredients must be between 1 and 40
        if len(recipe.ingredients) < 1 or len(recipe.ingredients) > 40:
            #print("Error: There must be between 1 and 40 ingredients")
            return False
        
        # Each ingredient must be between 1 and 50 characters
        for ingredient in recipe.ingredients:
            if len(ingredient) < 1 or len(ingredient) > 50:
                #print("Error: All ingredients must be between 1 and 50 characters")
                return False
        
        # Number of instructions must be between 1 and 40
        if len(recipe.instructions) < 1 or len(recipe.instructions) > 40:
            #print("Error: There must be between 1 and 40 instructions")
            return False
        
        # Each instruction must be between 1 and 280 characters
        for instruction in recipe.instructions:
            if len(instruction) < 1 or len(instruction) > 280:
                #print("Error: All instructions must be between 1 and 280 characters")
                return False
        
        # Past this point, the Recipe can be added to the list
        self.recipes.append(recipe)
        #print("Recipe successfully Added!")
        return True
    
    def delete_recipe(self, recipeID):
        if (not isinstance(recipeID, int)) or recipeID <= 0:
            #print("Error: The given ID must be a positive integer")
            return False
        for recipe in self.recipes:
            if recipe.id == recipeID:
                self.recipes.remove(recipe)
                #print("Recipe successfully removed!")
                return True
        
        #print("Error: RecipeID is not in list of recipes")
        return False