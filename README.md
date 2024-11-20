# Required Info For our Test Classes for Phase 5
Below is all the information needed for this Phase regarding the classes and test cases for our two important use cases.

## Our two use cases for this phase are...
### 1. Account Creation/Sign-Up
### 2. User Login

## Code of all classes that are important for these 2 use cases
Our code for these classes was written in Python. Our two classes, "Account" and "AccountController" can be found in account_classes.py.
Testing was performed on two functions of the AccountController class. The first is "sign_up", and the second is "login".

## Identification of input values, their type, value specification, valid/invalid/exceptional values
### For Account Sign-Up
<img width="535" alt="image" src="https://github.com/user-attachments/assets/c9e76c39-6c5c-40cc-acef-84f2d2cbe9e6">

### For User Login
<img width="536" alt="image" src="https://github.com/user-attachments/assets/2a91a564-50bd-4ad0-95f9-9e6d9b16e599">

## Total number of test cases that can be written and their corresponding output
All rows crossed out are test cases that are unnecessary to implement.
### For Account Sign-Up
<img width="427" alt="image" src="https://github.com/user-attachments/assets/db4cba6c-97ea-4b96-aa2a-f4b405cc3296">

### For User Login
<img width="431" alt="image" src="https://github.com/user-attachments/assets/26e54d01-f70c-4d62-b8dc-3d5dff103ac4">

## Concrete values for the narrowed-down test cases
### For Account Sign-Up
Assume that the username “Alex” is already in the database with a userID of 1.

<img width="428" alt="image" src="https://github.com/user-attachments/assets/37321e3e-e4d8-4461-bbe5-df6643ae05c2">
</br>
<img width="430" alt="image" src="https://github.com/user-attachments/assets/5878ae1d-006a-4635-9a9e-69bfe9dcc378">

### For User Login
Assume that the username “Diego” is already in the database and his password is “GreenPig27”.
</br>
Assume that the username “Alex” is already in the database and his password is “SunnyOmelet42”.

<img width="429" alt="image" src="https://github.com/user-attachments/assets/e9a0786e-df68-4d5a-a845-b781a32a9449">

## Code/Implementation of the concrete test cases
To view the implementation of all of the test cases, download "account_classes.py" and "account_testing.py" and move them into the same working directory.

In a terminal, cd into that working directory.

Afterward, type the following command:

#### python -m unittest account_testing.py

All of the test cases pass if "OK" is displayed at the bottom of the output.
