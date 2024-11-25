import re   # For regular expressions that check email validity

class Account:
    def __init__(self, email, username, password, uid):
        if not isinstance(email, str):
            raise TypeError("The email must be a string")
        if not isinstance(username, str):
            raise TypeError("The username must be a string")
        
        if not isinstance(password, str):
            raise TypeError("The password must be a string")
        
        if not isinstance(uid, int):
            raise TypeError("The uid must be an int")
        
        self.email = email
        self.username = username
        self.password = password
        self.uid = uid

    def print_user(self):
        print(f"Account Info for: {self.username}")
        print()
        print(f"User ID: {self.uid}")
        print(f"User email: {self.email}")
        print(f"User password: {self.password}")

class AccountController:
    def __init__(self):
        self.accounts = []

    def print_accounts(self):
        print(self.accounts)

    def is_valid_email(self, email):
        n = len(email)
        if n > 254:
            #print("Error: Email too long")
            return False

        email_regex = (
            r'^[a-zA-Z0-9](?!.*\.\.)[a-zA-Z0-9._%+-]*[a-zA-Z0-9]'  # Local part
            r'@[a-zA-Z0-9](?!.*--)[a-zA-Z0-9.-]*[a-zA-Z0-9]\.[a-zA-Z]{2,}$'  # Domain part
        )
    
        # Use re.match to check if the string matches the pattern
        return bool(re.match(email_regex, email))

    def sign_up(self, account):
        # Input must be an Account
        if not isinstance(account, Account):
            #print("Error: Input must be an Account")
            return False
        
        # email must be valid
        if not self.is_valid_email(account.email):
            return False
        
        # email must not already be registered
        for act in self.accounts:
            if account.email == act.email:
                #print("Error: Email aleady registered")
                return False

        # uid must be above 0
        if account.uid <= 0:
            #print("Error: User ID must be greater than 0")
            return False
        
        # uid must be unique (not in self.accounts)
        for acc in self.accounts:
            if account.uid == acc.uid:
                #print("Error: This User ID is already in the system")
                return False
        
        # username length must be 3-30 characters
        n = len(account.username)

        if n < 3:
            #print("Error: username must be at least 3 characters long")
            return False
        elif n > 30:
            #print("Error: username too long. Maximum of 30 characters")
            return False
        
        # username must be alphanumeric only and exclude spaces and special characters
        if not account.username.isalnum():
            #print("Error: The username must consist of alphanumeric characters only. Spaces are also excluded")
            return False
        
        # username must be unique (not in self.accounts)
        for acct in self.accounts:
            if account.username == acct.username:
                #print("Error: Username already taken")
                return False
            
        # password length must be 8-64 characters
        n = len(account.password)

        if n < 8:
            #print("Error: password must be at least 8 characters long")
            return False
        elif n > 64:
            #print("Error: password too long. Maximum of 64 characters")
            return False

        # password must contain at least 1 lower case letter, 1 uppercase letter, and 1 number
        if not any(char.isupper() for char in account.password):
            #print("Error: Password should contain at least 1 uppercase letter")
            return False
        elif not any(char.islower() for char in account.password):
            #print("Error: Password should contain at least 1 lowercase letter")
            return False
        elif not any(char.isdigit() for char in account.password):
            #print("Error: Password should contain at least 1 number")
            return False
        
        # Past this point, the Account should be valid and can be stored in self.accounts
        self.accounts.append(account)
        print("Account successfully created!")
        return True
    
    def login(self, uname, psw):
        # uname must be found in self.accounts
        for acc1 in self.accounts:
            if uname == acc1.username:
                if psw == acc1.password:
                    print("Login Successful!")
                    return True
                else:
                    #print("Error: Incorrect password")
                    return False
        
        # Past this point, the uname was not found in self.accounts.
        #print("Error: Account not found for given username")
        return False

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
    
    # Function to print all stored recipes
    def print_list(self):
        for rec in self.recipes:
            if isinstance(rec, Recipe):
                print(f"ID: {rec.id}")
                print(f"Name: {rec.name}")
                print(f"Ingredients: {rec.ingredients}")
                print(f"Instructions: {rec.instructions}")
                print()

    # Function to display a recipe through searching for its ID
    def display_recipe(self, recipeID):
        for rec in self.recipes:
            if isinstance(rec, Recipe):
                if rec.id == recipeID:
                    rec.print_recipe()
                    print()
                    print("Recipe successfully printed!")
                    return True
                
        # Past this point, the recipeID was not found
        #print("Error. recipeID not found in system. Failure to display recipe.")
        return False

    def is_valid_name(self, s):  # Function to check if the recipe name is valid
        temp = s.replace(" ", "")
        if len(temp) == 0:
            return False
        
        if temp.isalpha():
            return True
        else:
            return False

    # Function to add a recipe to the self.recipes
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
        print("Recipe successfully Added!")
        return True
    
    def update_recipe(self, recipe):
        # Input must be a Recipe
        if not isinstance(recipe, Recipe):
            #print("Error: Input must be a Recipe")
            return False
        
        # recipeID must be in self.recipes
        if all(rec.id != recipe.id for rec in self.recipes):
            #print("Error: recipeID not found")
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
            
        # Past this point, the recipe can be edited
        for rec in self.recipes:
            if rec.id == recipe.id:
                if isinstance(rec, Recipe):
                    rec.name = recipe.name
                    rec.ingredients = recipe.ingredients
                    rec.instructions = recipe.instructions

        print("Recipe Successfully Edited!")
        return True
        

    
    # Function to remove a recipe from self.recipes by accessing through recipeID
    def delete_recipe(self, recipeID):
        if (not isinstance(recipeID, int)) or recipeID <= 0:
            #print("Error: The given ID must be a positive integer")
            return False
        for recipe in self.recipes:
            if recipe.id == recipeID:
                self.recipes.remove(recipe)
                print("Recipe successfully removed!")
                return True
        
        #print("Error: RecipeID is not in list of recipes")
        return False
    
stored = Recipe(1, "Pasta", ["Spaghetti", "Tomato sauce", "Mozzarella cheese", "Salt", "Red pepper flakes"], ["Step 1. Heat sauce", "Step 2. Boil water in a large pot", "Step 3. Stir frequently", "Step 4. Pour and let sit", "Step 5. Drizzle tomato sauce and cheese"])
controller = RecipeController()
controller.add_recipe(stored)