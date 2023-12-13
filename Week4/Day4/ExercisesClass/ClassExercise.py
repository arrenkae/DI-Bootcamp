# Managing a Simple User Database

# Scenario:
# You're building a basic user management system that interacts with a PostgreSQL database. 
# Users should be able to:

# View all existing users.
# Add a new user.
# Update a user's information.
# Delete a user.

# Tasks:
# Database Setup:

# Create a PostgreSQL database named user_management.
# Inside the database, create a table named users with columns: 
# id (integer, primary key), username (varchar), email (varchar), and age (integer).

# Python Script:

# Write a Python script that connects to the user_management database.
# Implement functions to perform the following operations:
# View all users from the users table.
# Add a new user to the users table.
# Update a user's information based on their id.
# Delete a user from the users table based on their id.

# User Interaction:

# Create a simple command-line interface (CLI) to interact with your Python functions.
# The CLI should provide options to view, add, update, or delete users, 
# and take appropriate inputs from the user to perform these actions.

# Testing:

# Test your Python script by adding users, viewing all users, 
# updating user information, and deleting users.

import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

conn = psycopg2.connect(
    dbname=os.getenv('db_name'),
    user=os.getenv('db_user'),
    password=os.getenv('db_password'),
    host=os.getenv('db_host'),
    port=os.getenv('db_port')
)
cur = conn.cursor()

def view_users():
    cur.execute('SELECT * FROM users ORDER BY id')
    rows = cur.fetchall()
    for row in rows:
        print(' '.join(map(str, row)))

def add_user(username, email, age):
    cur.execute('SELECT id FROM users ORDER BY id DESC LIMIT 1')
    count = cur.fetchone()
    if count:
        user_id = count[0] + 1
    else:
        user_id = 1
    cur.execute(f"INSERT INTO users (id, username, email, age) VALUES ({user_id}, '{username}', '{email}', {age})")
    conn.commit()

def update_user(user_id, col, val):
    cur.execute(f"UPDATE users SET {col}='{val}' WHERE id={user_id}")
    conn.commit()

def delete_user(user_id):
    cur.execute(f"DELETE FROM users WHERE id={user_id}")
    conn.commit()

def manage_users():
    columns = {'u':'username', 'e':'email', 'a':'age'}
    while True:
        menu_choice = input('''
Welcome to the User Management System!

(S) Show users
(A) Add user
(U) Update user
(D) Delecte user
(E) Exit
''')
        if menu_choice.lower() == 's':
            view_users()
        elif menu_choice.lower() == 'a':
            print('Give me the user details:')
            username = input('Username: ')
            email = input('E-mail: ')
            age = input('Age: ')
            add_user(username, email, age)
        elif menu_choice.lower() == 'u':
            user_id = input('User ID: ')
            while True:
                col_choice = input('''
Update:
(U) Username
(E) Email
(A) Age
''')
                if col_choice.lower() in columns.keys():
                    col = columns[col_choice]
                    break
                else:
                    print('Choose a valid menu item')
            val = input('Update to: ')
            update_user(user_id, col, val)
        elif menu_choice.lower() == 'd':
            user_id = input('User ID: ')
            delete_user(user_id)
        elif menu_choice.lower() == 'e':
            break
        else:
            print('Choose a valid menu item')

manage_users()

cur.close()
conn.close()