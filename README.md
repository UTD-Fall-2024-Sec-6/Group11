# Required Info For our Test Classes for Phase 5
Below is all the information needed for this Phase regarding the classes and test cases for our four important use cases.

## Our four new use cases for this phase are...
### 1. Account Creation/Sign-Up (Default/Required)
### 2. User Login (Default/Required)
### 3. Recipe Update (Additional/Unique)
### 4. Display Recipe (Additional/Unique)

## Code of all classes that are important for these 4 use cases
Our code for these classes was written in Python. Our four classes, "Account", "AccountController", "Recipe", and "RecipeController" can be found in phase5_classes.py.
Testing was performed on two functions of the AccountController class. The first is "sign_up", and the second is "login". Testing was performed on two functions of the RecpipeController class. The first is "update_recipe", and the second is "display_recipe".

## Identification of input values, their type, value specification, valid/invalid/exceptional values
### For Account Sign-Up
<img width="593" alt="image" src="https://github.com/user-attachments/assets/aa918305-176f-4314-846e-79d679e6dfea"></br>
<img width="590" alt="image" src="https://github.com/user-attachments/assets/e8a6d274-fe34-49fb-9b51-79f20b2342f4"></br>

### For User Login
<img width="590" alt="image" src="https://github.com/user-attachments/assets/9c9b8a13-7737-4cc3-afbe-c8f4bafd057f"></br>

### For Recipe Update
<img width="596" alt="image" src="https://github.com/user-attachments/assets/835ba776-efe2-471e-973d-e9bf98d9403f"></br>

### For Display Recipe
<img width="595" alt="image" src="https://github.com/user-attachments/assets/d02bd3e0-a1b5-45b6-9378-26893204750e"></br>

## Total number of test cases that can be written and their corresponding output
All rows crossed out are test cases that are unnecessary to implement.
### For Account Sign-Up
<img width="476" alt="image" src="https://github.com/user-attachments/assets/b64eef39-d10a-4697-9943-3c4ac1901a6a"></br>

### For User Login
<img width="479" alt="image" src="https://github.com/user-attachments/assets/22f10579-2ab1-42f2-9da8-83f4b7359809"></br>

### For Recipe Update
<img width="571" alt="image" src="https://github.com/user-attachments/assets/54c25b4c-cd62-460a-a3fb-5a9e69d5ddb3"></br>

### For Display Recipe
<img width="473" alt="image" src="https://github.com/user-attachments/assets/26c7ab8c-792c-4122-b4bc-8257fe5fe154"></br>

## Concrete values for the narrowed-down test cases
### For Account Sign-Up
Assume that the username “Alex” is already in the database with a userID of 1, and an email “AlexD@example.com”.
<img width="568" alt="image" src="https://github.com/user-attachments/assets/93656b17-6ca1-4eba-bbdd-7e2e5af01822"></br>
<img width="563" alt="image" src="https://github.com/user-attachments/assets/bd4c0d4a-0da8-471b-be76-422a1e06b9c5"></br>
<img width="567" alt="image" src="https://github.com/user-attachments/assets/96f55482-69de-49bb-b860-d2afdbbcd3a8"></br>
<img width="563" alt="image" src="https://github.com/user-attachments/assets/db06c345-a959-4893-929a-18b145520af1"></br>

### For User Login
Assume that the username “Diego” is already in the database and his password is “GreenPig27”.
</br>
Assume that the username “Alex” is already in the database and his password is “SunnyOmelet42”.
<img width="472" alt="image" src="https://github.com/user-attachments/assets/f05c4733-3d48-4c74-9cd1-a220f9eeaa54"></br>

### For Recipe Update
Assume that a valid recipe is stored with a recipeID of 1, with the name “Pasta”
<img width="583" alt="image" src="https://github.com/user-attachments/assets/822e6036-8d99-4a45-98fc-11289445bdbe"></br>
<img width="584" alt="image" src="https://github.com/user-attachments/assets/e9a81819-2e42-4054-958f-8530f1da4059"></br>

### For Display Recipe
Assume that a Recipe with an ID of 1 exists in the system.</br>
<img width="474" alt="image" src="https://github.com/user-attachments/assets/5d263d6b-719a-432a-bf9d-93c2c4836209"></br>

## Code/Implementation of the concrete test cases
To view the implementation of all test cases, download "phase5_classes.py" and "phase5_testing.py" and move them into the same working directory.

In a terminal, cd into that working directory.

Afterward, type the following command:

#### python -m unittest phase5_testing.py

All test cases pass if "OK" is displayed at the bottom of the output.
