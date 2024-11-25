import unittest
from phase5_classes import Account, AccountController, Recipe, RecipeController

class TestAccountOperations(unittest.TestCase):
    # Tests for Use Case 1: Account Sign Up
    def test_valid_signup(self):
        t1_1 = Account("username1@example.com", "Diego", "GreenPig27", 2)
        controller = AccountController()
        self.assertTrue(controller.sign_up(t1_1), "Adding a valid account should return True")

    def test_id_already_stored(self):
        # Store a dummy account in the AccountController
        storedAcc = Account("username2@example.com", "Alex", "PeppaPig27", 1)
        controller = AccountController()
        controller.sign_up(storedAcc)

        # Try to create an account with the same id
        t2_1 = Account("username3@example.com", "Bob", "PinkPanther1", 1)
        self.assertFalse(controller.sign_up(t2_1), "Adding an account whose id already exists should return False")

    def test_id_invalid(self):
        t2_2 = Account("username1@example.com", "Bob", "PinkPanther1", 0)
        controller = AccountController()
        self.assertFalse(controller.sign_up(t2_2), "Adding an account with an invalid id should return False")

    def test_psw_short(self):
        t3_1 = Account("username1@example.com", "Chloe", "Short12", 3)
        controller = AccountController()
        self.assertFalse(controller.sign_up(t3_1), "Adding an account with too short a password should return False")
    
    def test_psw_long(self):
        t3_2 = Account("username1@example.com", "Chloe", "Armadillo11111111111111111111111111111111111111111111111111111111", 3)
        controller = AccountController()
        self.assertFalse(controller.sign_up(t3_2), "Adding an account with too long a password should return False")
    
    def test_psw_no_numbers(self):
        t3_3 = Account("username1@example.com", "Chloe", "Armadillo", 3)
        controller = AccountController()
        self.assertFalse(controller.sign_up(t3_3), "Adding an account without a number in the password should return False")

    def test_psw_no_uppercase(self):
        t3_4 = Account("username1@example.com", "Chloe", "armadillo99", 3)
        controller = AccountController()
        self.assertFalse(controller.sign_up(t3_4), "Adding an account without at least 1 uppercase letter in the password should return False")

    def test_psw_no_lowercase(self):
        t3_5 = Account("username1@example.com", "Chloe", "ARMADILLO99", 3)
        controller = AccountController()
        self.assertFalse(controller.sign_up(t3_5), "Adding an account without at least 1 lowercase letter in the password should return False")

    def test_uname_short(self):
        t5_1 = Account("username1@example.com", "Mo", "OrangeBagel33", 4)
        controller = AccountController()
        self.assertFalse(controller.sign_up(t5_1), "Adding an account with too short a username should return False")

    def test_uname_long(self):
        t5_2 = Account("username1@example.com", "Antidisestablishmentarianism111", "OrangeBagel33", 4)
        controller = AccountController()
        self.assertFalse(controller.sign_up(t5_2), "Adding an account with too long a username should return false")

    def test_uname_special_chars(self):
        t5_3 = Account("username1@example.com", "##Recipe God##", "OrangeBagel33", 4)
        controller = AccountController()
        self.assertFalse(controller.sign_up(t5_3), "Adding an account with spaces or special characters in the username should return False")

    def test_uname_already_stored(self):
        # Store a dummy Account into the AccountController
        storedAcc = Account("AlexD@example.com", "Alex", "PeppaPig27", 1)
        controller = AccountController()
        controller.sign_up(storedAcc)

        # Try to create an Account with the same username
        t5_4 = Account("username1@example.com", "Alex", "OrangeBagel33", 4)
        self.assertFalse(controller.sign_up(t5_4), "Adding an account whose username is not unique should return False")

    def test_email_long(self):
        t9_1 = Account("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuusername@example.com", "David", "PurpleCat17", 5)
        controller = AccountController()

        self.assertFalse(controller.sign_up(t9_1), "Adding an account with too long an email should return false")

    def test_email_special_char_begin(self):
        t9_2 = Account(".username@example.com", "David", "PurpleCat17", 5)
        controller = AccountController()

        self.assertFalse(controller.sign_up(t9_2), "Adding an account with a special character at the beginning of the email should return False")

    def test_email_consecutive_dots(self):
        t9_3 = Account("user..name@example.com", "David", "PurpleCat17", 5)
        controller = AccountController()

        self.assertFalse(controller.sign_up(t9_3), "Adding an account with 2 consecutive dots in the email should return False")

    def test_email_special_char_endlocal(self):
        t9_4 = Account("username.@example.com", "David", "PurpleCat17", 5)
        controller = AccountController()

        self.assertFalse(controller.sign_up(t9_4), "Adding an account with a special charater at the end of the local part of the email should return False")

    def test_email_two_atsigns(self):
        t9_5 = Account("", "David", "PurpleCat17", 5)
        controller = AccountController()

        self.assertFalse(controller.sign_up(t9_5), "Adding an account with an invalid character in the domain part of the email should return False")

    def test_email_hyphen_beginning_domain(self):
        t9_6 = Account("username@-example.com", "David", "PurpleCat17", 5)
        controller = AccountController()

        self.assertFalse(controller.sign_up(t9_6), "Adding an account with a hyphen in the beginning of the domain part of the email should return False")

    def test_email_hyphen_end_domain(self):
        t9_7 = Account("username@example-.com", "David", "PurpleCat17", 5)
        controller = AccountController()

        self.assertFalse(controller.sign_up(t9_7), "Adding an account with a hyphen at the end of the domain part of the email should return False")

    def test_email_TLD_short(self):
        t9_8 = Account("username@example.c", "David", "PurpleCat17", 5)
        controller = AccountController()

        self.assertFalse(controller.sign_up(t9_8), "Adding an account with the TLD of the email being too short should return False")

    def test_email_already_registered(self):
        #Store a dummy account
        stored = Account("AlexD@example.com", "Alex", "SunnyOmelet25", 1)
        controller = AccountController()
        controller.sign_up(stored)

        t9_9 = Account("AlexD@example.com", "David", "PurpleCat17", 5)

        self.assertFalse(controller.sign_up(t9_9), "Adding an account with an already registered email should return False")

    # Tests for Use Case 2: User Login
    def test_valid_login(self):
        #Store dummy Accounts into the AccountController
        controller = AccountController()
        storedAcc1 = Account("username1@example.com", "Diego", "GreenPig27", 1)
        storedAcc2 = Account("username2@example.com", "Alex", "SunnyOmelet42", 2)
        controller.sign_up(storedAcc1)
        controller.sign_up(storedAcc2)

        self.assertTrue(controller.login("Alex", "SunnyOmelet42"), "Logging in with a valid username and password should return True")
    
    def test_incorrect_password(self):
        #Store dummy Accounts into the AccountController
        controller = AccountController()
        storedAcc1 = Account("username1@example.com", "Diego", "GreenPig27", 1)
        storedAcc2 = Account("username2@example.com", "Alex", "SunnyOmelet42", 2)
        controller.sign_up(storedAcc1)
        controller.sign_up(storedAcc2)

        self.assertFalse(controller.login("Alex", "SunnyOmelet41"), "Logging in with an unmatched password should return False")

    def test_uname_not_found(self):
        #Store dummy Accounts into the AccountController
        controller = AccountController()
        storedAcc1 = Account("username1@example.com", "Diego", "GreenPig27", 1)
        storedAcc2 = Account("username2@example.com", "Alex", "SunnyOmelet42", 2)
        controller.sign_up(storedAcc1)
        controller.sign_up(storedAcc2)

        self.assertFalse(controller.login("Diegi", "GreenPig27"), "Logging in with a username not found in the system should return False")

    # Tests for Use Case 3: Updating Recipes
    def test_update_valid(self):
        #Add the dummy recipe
        stored = Recipe(1, "Pasta", ["Valid ingredients"], ["Valid instructions"])
        controller = RecipeController()
        controller.add_recipe(stored)

        t1_1 = Recipe(1, "Over Easy Eggs", ["Valid ingredients"], ["Valid instructions"])

        self.assertTrue(controller.update_recipe(t1_1), "Updating a valid recipe should return True")
    
    def test_add_invalid_instructions(self):
        #Add the dummy recipe
        stored = Recipe(1, "Pasta", ["Valid ingredients"], ["Valid instructions"])
        controller = RecipeController()
        controller.add_recipe(stored)

        t2_1 = Recipe(1, "Over Easy Eggs", ["2 large eggs", "4 strips of bacon"]
                           , [])
        t2_2 = Recipe(1, "Over Easy Eggs", ["2 large eggs", "4 strips of bacon"]
                           , ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", 
                              "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", 
                              "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", 
                              "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"])
        t2_3 = Recipe(1, "Over Easy Eggs", ["2 large eggs", "4 strips of bacon"]
                           , [""])
        t2_4 = Recipe(1, "Over Easy Eggs", ["2 large eggs", "4 strips of bacon"]
                           , ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"])
        
        self.assertFalse(controller.update_recipe(t2_1), "Updating to an empty instruction should return False")
        self.assertFalse(controller.update_recipe(t2_2), "Updating to too many instructions should return False")
        self.assertFalse(controller.update_recipe(t2_3), "Updating to empty instructions should return False")
        self.assertFalse(controller.update_recipe(t2_4), "Updating to instructions that are too long should return false")
    
    def test_add_invalid_ingredients(self):
        #Add the dummy recipe
        stored = Recipe(1, "Pasta", ["Valid ingredients"], ["Valid instructions"])
        controller = RecipeController()
        controller.add_recipe(stored)

        t3_1 = Recipe(1, "Over Easy Eggs", []
                           , ["Valid instruction"])
        t3_2 = Recipe(1, "Over Easy Eggs", ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", 
                              "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", 
                              "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", 
                              "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]
                           , ["Valid instruction"])
        t3_3 = Recipe(1, "Over Easy Eggs", [""]
                           , ["Valid instruction"])
        t3_4 = Recipe(1, "Over Easy Eggs", ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"]
                           , ["Valid instruction"])
        
        self.assertFalse(controller.update_recipe(t3_1), "Updating to an empty ingredient list should return False")
        self.assertFalse(controller.update_recipe(t3_2), "Updating to too many ingredients should return False")
        self.assertFalse(controller.update_recipe(t3_3), "Updating to empty ingredients should return False")
        self.assertFalse(controller.update_recipe(t3_4), "Updating to ingredients that are too long should return False")
    
    def test_add_invalid_name(self):
        #Add the dummy recipe
        stored = Recipe(1, "Pasta", ["Valid ingredients"], ["Valid instructions"])
        controller = RecipeController()
        controller.add_recipe(stored)

        t5_1 = Recipe(1, "", ["Valid ingredient"]
                           , ["Valid instruction"])
        t5_2 = Recipe(1, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", ["Valid ingredient"]
                           , ["Valid instruction"])
        t5_3 = Recipe(1, "Cake1", ["Valid ingredient"]
                           , ["Valid instruction"])
        t5_4 = Recipe(1, "     ", ["Valid ingredient"]
                           , ["Valid instruction"])
        
        self.assertFalse(controller.update_recipe(t5_1), "Updating to an empty recipe name should return False")
        self.assertFalse(controller.update_recipe(t5_2), "Updating to a recipe with too long of a name should return False")
        self.assertFalse(controller.update_recipe(t5_3), "Updating to a recipe that contains anything other than letters and spaces should return False")
        self.assertFalse(controller.update_recipe(t5_4), "Updating to a recipe with no letters should return False")
    

    def test_add_invalid_id(self):
        #Add the dummy recipe
        stored = Recipe(1, "Pasta", ["Valid ingredients"], ["Valid instructions"])
        controller = RecipeController()
        controller.add_recipe(stored)

        t9_1 = Recipe(2, "Eggs Benedict", ['Valid ingredients'], ["Valid instructions"])

        self.assertFalse(controller.update_recipe(t9_1), "Updating to a recipe that is not found in the system should return False")

    # Tests for Use Case 4: Displaying Recipes
    def test_display_valid_id(self):
        #Add the dummy recipe
        stored = Recipe(1, "Pasta", ["Spaghetti", "Tomato sauce", "Mozzarella cheese", "Salt", "Red pepper flakes"], ["Step 1. Heat sauce", "Step 2. Boil water in a large pot", "Step 3. Stir frequently" "Step 4. Pour and let sit" "Step 5. Drizzle tomato sauce and cheese"])
        controller = RecipeController()
        controller.add_recipe(stored)

        self.assertTrue(controller.display_recipe(1), "Dislaying a recipe with a valid input ID should return True")

    def test_display_invalid_id(self):
        #Add the dummy recipe
        stored = Recipe(1, "Pasta", ["Spaghetti", "Tomato sauce", "Mozzarella cheese", "Salt", "Red pepper flakes"], ["Step 1. Heat sauce", "Step 2. Boil water in a large pot", "Step 3. Stir frequently", "Step 4. Pour and let sit", "Step 5. Drizzle tomato sauce and cheese"])
        controller = RecipeController()
        controller.add_recipe(stored)

        self.assertFalse(controller.display_recipe(7), "Dislaying a recipe with an ID input that is not in the system should return False")

if __name__ == "__main__":
    unittest.main() # All test cases pass if the program displays, "OK" at the bottom of the console