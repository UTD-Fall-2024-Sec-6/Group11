import unittest
from account_classes import Account, AccountController

class TestAccountOperations(unittest.TestCase):
    # Tests for Use Case 1: Account Sign Up
    def test_valid_signup(self):
        t1_1 = Account("Alex", "PeppaPig27", 1)
        controller = AccountController()
        self.assertTrue(controller.sign_up(t1_1), "Adding a valid account should return True")

    def test_id_already_stored(self):
        # Store a dummy account in the AccountController
        storedAcc = Account("Alex", "PeppaPig27", 1)
        controller = AccountController()
        controller.sign_up(storedAcc)

        # Try to create an account with the same id
        t2_1 = Account("Bob", "PinkPanther1", 1)
        self.assertFalse(controller.sign_up(t2_1), "Adding an account whose id already exists should return False")

    def test_id_invalid(self):
        t2_2 = Account("Bob", "PinkPanther1", 0)
        controller = AccountController()
        self.assertFalse(controller.sign_up(t2_2), "Adding an account with an invalid id should return False")

    def test_psw_short(self):
        t3_1 = Account("Chloe", "Short12", 3)
        controller = AccountController()
        self.assertFalse(controller.sign_up(t3_1), "Adding an account with too short a password should return False")
    
    def test_psw_long(self):
        t3_2 = Account("Chloe", "Armadillo11111111111111111111111111111111111111111111111111111111", 3)
        controller = AccountController()
        self.assertFalse(controller.sign_up(t3_2), "Adding an account with too long a password should return False")
    
    def test_psw_no_numbers(self):
        t3_3 = Account("Chloe", "Armadillo", 3)
        controller = AccountController()
        self.assertFalse(controller.sign_up(t3_3), "Adding an account without a number in the password should return False")

    def test_psw_no_uppercase(self):
        t3_4 = Account("Chloe", "armadillo99", 3)
        controller = AccountController()
        self.assertFalse(controller.sign_up(t3_4), "Adding an account without at least 1 uppercase letter in the password should return False")

    def test_psw_no_lowercase(self):
        t3_5 = Account("Chloe", "ARMADILLO99", 3)
        controller = AccountController()
        self.assertFalse(controller.sign_up(t3_5), "Adding an account without at least 1 lowercase letter in the password should return False")

    def test_uname_short(self):
        t5_1 = Account("Mo", "OrangeBagel33", 4)
        controller = AccountController()
        self.assertFalse(controller.sign_up(t5_1), "Adding an account with too short a username should return False")

    def test_uname_long(self):
        t5_2 = Account("Antidisestablishmentarianism111", "OrangeBagel33", 4)
        controller = AccountController()
        self.assertFalse(controller.sign_up(t5_2), "Adding an account with too long a username should return false")

    def test_uname_special_chars(self):
        t5_3 = Account("##Recipe God##", "OrangeBagel33", 4)
        controller = AccountController()
        self.assertFalse(controller.sign_up(t5_3), "Adding an account with spaces or special characters in the username should return False")

    def test_uname_already_stored(self):
        # Store a dummy Account into the AccountController
        storedAcc = Account("Alex", "PeppaPig27", 1)
        controller = AccountController()
        controller.sign_up(storedAcc)

        # Try to create an Account with the same username
        t5_4 = Account("Alex", "OrangeBagel33", 4)
        self.assertFalse(controller.sign_up(t5_4), "Adding an account whose username is not unique should return False")

    # Tests for Use Case 2: User Login
    def test_valid_login(self):
        #Store dummy Accounts into the AccountController
        controller = AccountController()
        storedAcc1 = Account("Diego", "GreenPig27", 1)
        storedAcc2 = Account("Alex", "SunnyOmelet42", 2)
        controller.sign_up(storedAcc1)
        controller.sign_up(storedAcc2)

        self.assertTrue(controller.login("Alex", "SunnyOmelet42"), "Logging in with a valid username and password should return True")
    
    def test_incorrect_password(self):
        #Store dummy Accounts into the AccountController
        controller = AccountController()
        storedAcc1 = Account("Diego", "GreenPig27", 1)
        storedAcc2 = Account("Alex", "SunnyOmelet42", 2)
        controller.sign_up(storedAcc1)
        controller.sign_up(storedAcc2)

        self.assertFalse(controller.login("Alex", "SunnyOmelet41"), "Logging in with an unmatched password should return False")

    def test_uname_not_found(self):
        #Store dummy Accounts into the AccountController
        controller = AccountController()
        storedAcc1 = Account("Diego", "GreenPig27", 1)
        storedAcc2 = Account("Alex", "SunnyOmelet42", 2)
        controller.sign_up(storedAcc1)
        controller.sign_up(storedAcc2)

        self.assertFalse(controller.login("Diegi", "GreenPig27"), "Logging in with a username not found in the system should return False")
