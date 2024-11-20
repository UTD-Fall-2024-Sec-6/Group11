class Account:
    def __init__(self, username, password, uid):
        if not isinstance(username, str):
            raise TypeError("The username must be a string")
        
        if not isinstance(password, str):
            raise TypeError("The password must be a string")
        
        if not isinstance(uid, int):
            raise TypeError("The uid must be an int")
        
        self.username = username
        self.password = password
        self.uid = uid

    def print_user(self):
        print(f"Account Info for: {self.username}")
        print()
        print(f"User ID: {self.uid}")
        print(f"User password: {self.password}")

class AccountController:
    def __init__(self):
        self.accounts = []

    def print_accounts(self):
        print(self.accounts)

    def sign_up(self, account):
        # Input must be an Account
        if not isinstance(account, Account):
            #print("Error: Input must be an Account")
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
        #print("Account successfully created!")
        return True
    
    def login(self, uname, psw):
        # uname must be found in self.accounts
        for acc1 in self.accounts:
            if uname == acc1.username:
                if psw == acc1.password:
                    #print("Login Successful!")
                    return True
                else:
                    #print("Error: Incorrect password")
                    return False
        
        # Past this point, the uname was not found in self.accounts.
        #print("Error: Account not found for given username")
        return False
