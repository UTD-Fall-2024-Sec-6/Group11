import unittest
from recipe_classes import Recipe, RecipeController

class TestRecipeOperations(unittest.TestCase):
    # Tests for Use Case 1: Adding recipes
    def test_add_valid(self):
        testRecipe = Recipe(1, "Pasta", ["noodles", "tomato sauce", "cheese"], 
                  ["Boil water in a medium pot", "Pour noodles into pot and wait 5 minutes, stirring occasionally", "Pour noodles out into a large bowl, and sprinkle tomato sauce and cheese over it"])
        controller = RecipeController()
        self.assertTrue(controller.add_recipe(testRecipe), "Adding a valid recipe should return True")
    
    def test_add_invalid_instructions(self):
        controller = RecipeController()
        recipe1 = Recipe(2, "Over Easy Eggs", ["2 large eggs", "4 strips of bacon"]
                           , [])
        recipe2 = Recipe(3, "Over Easy Eggs", ["2 large eggs", "4 strips of bacon"]
                           , ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", 
                              "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", 
                              "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", 
                              "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"])
        recipe3 = Recipe(4, "Over Easy Eggs", ["2 large eggs", "4 strips of bacon"]
                           , [""])
        recipe4 = Recipe(5, "Over Easy Eggs", ["2 large eggs", "4 strips of bacon"]
                           , ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"])
        
        self.assertFalse(controller.add_recipe(recipe1), "Adding an empty instruction should return False")
        self.assertFalse(controller.add_recipe(recipe2), "Adding too many instructions should return False")
        self.assertFalse(controller.add_recipe(recipe3), "Adding empty instructions should return False")
        self.assertFalse(controller.add_recipe(recipe4), "Adding instructions that are too long should return false")
    
    def test_add_invalid_ingredients(self):
        controller = RecipeController()
        recipe1 = Recipe(6, "Over Easy Eggs", []
                           , ["Valid instruction"])
        recipe2 = Recipe(7, "Over Easy Eggs", ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", 
                              "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", 
                              "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", 
                              "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]
                           , ["Valid instruction"])
        recipe3 = Recipe(8, "Over Easy Eggs", [""]
                           , ["Valid instruction"])
        recipe4 = Recipe(9, "Over Easy Eggs", ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"]
                           , ["Valid instruction"])
        
        self.assertFalse(controller.add_recipe(recipe1), "Adding an empty ingredient list should return False")
        self.assertFalse(controller.add_recipe(recipe2), "Adding too many ingredients should return False")
        self.assertFalse(controller.add_recipe(recipe3), "Adding empty ingredients should return False")
        self.assertFalse(controller.add_recipe(recipe4), "Adding ingredients that are too long should return False")
    
    def test_add_invalid_name(self):
        controller = RecipeController()
        recipe1 = Recipe(10, "", ["Valid ingredient"]
                           , ["Valid instruction"])
        recipe2 = Recipe(11, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", ["Valid ingredient"]
                           , ["Valid instruction"])
        recipe3 = Recipe(12, "Cake1", ["Valid ingredient"]
                           , ["Valid instruction"])
        
        self.assertFalse(controller.add_recipe(recipe1), "Adding an empty recipe name should return False")
        self.assertFalse(controller.add_recipe(recipe2), "Adding a recipe with too long of a name should return False")
        self.assertFalse(controller.add_recipe(recipe3), "Adding a recipe that contains anything other than letters and spaces should return False")
    
    def test_add_exceptional_name(self):
        controller = RecipeController()
        recipe1 = Recipe(13, "     ", ["Valid ingredient"]
                           , ["Valid instruction"])
        
        self.assertFalse(controller.add_recipe(recipe1), "Adding a recipe with no letters should return False")

    def test_add_invalid_id(self):
        #First, add a valid recipe to the controller
        controller = RecipeController()
        valid = Recipe(1, "Pasta", ["noodles", "tomato sauce", "cheese"], 
                  ["Boil water in a medium pot", "Pour noodles into pot and wait 5 minutes, stirring occasionally", "Pour noodles out into a large bowl, and sprinkle tomato sauce and cheese over it"])
        controller.add_recipe(valid)

        #Invalid id
        recipe1 = Recipe(0, "Over Easy Eggs", ["Valid ingredient"]
                           , ["Valid instruction"])
        #id is already stored
        recipe2 = Recipe(1, "Over Easy Eggs", ["Valid ingredient"]
                           , ["Valid instruction"])
        
        self.assertFalse(controller.add_recipe(recipe1), "Adding a recipe with an invalid ID should return False")
        self.assertFalse(controller.add_recipe(recipe2), "Adding a recipe that has an ID that is already stored should return False")

    # Tests for Use Case 2: Deleting Recipes
    def test_delete_valid(self):
        #First, add a valid recipe to the controller
        controller = RecipeController()
        valid = Recipe(1, "Pasta", ["noodles", "tomato sauce", "cheese"], 
                  ["Boil water in a medium pot", "Pour noodles into pot and wait 5 minutes, stirring occasionally", "Pour noodles out into a large bowl, and sprinkle tomato sauce and cheese over it"])
        controller.add_recipe(valid)

        self.assertTrue(controller.delete_recipe(valid.id), "Deleting a valid recipe should return True")

    def test_delete_invalid_id(self):
        #First, add a valid recipe to the controller
        controller = RecipeController()
        valid = Recipe(1, "Pasta", ["noodles", "tomato sauce", "cheese"], 
                  ["Boil water in a medium pot", "Pour noodles into pot and wait 5 minutes, stirring occasionally", "Pour noodles out into a large bowl, and sprinkle tomato sauce and cheese over it"])
        controller.add_recipe(valid)

        self.assertFalse(controller.delete_recipe(0), "Trying to delete a recipe with an invalid ID should return False")
        self.assertFalse(controller.delete_recipe("1"), "Trying to delete a recipe with a non integer ID should return False")
        self.assertFalse(controller.delete_recipe(2), "Trying to delete a recipe whose ID is not found should return False")


if __name__ == "__main__":
    unittest.main() # All test cases pass if the program displays, "OK" at the bottom of the console
