import psycopg2
import os
from dotenv import load_dotenv

# establsh a connection

load_dotenv()

conn = psycopg2.connect(
    dbname=os.getenv('db_name'),
    user=os.getenv('db_user'),
    password=os.getenv('db_password'),
    host=os.getenv('db_host'),
    port=os.getenv('db_port')
)

# Create a cursor object to execute SQL queries
cur = conn.cursor()

# CRUD - Create (insert) Read (select) Update (update) Delete (delete)

# Insert query
# insert_query = 'INSERT INTO products (name, price) VALUES (%s, %s)'
# data_to_insert = ('iKey', 750)
# cur.execute(insert_query, data_to_insert)

# Update query
# update_query = 'UPDATE products SET name=%s WHERE id=%s'
# new_value = ('iPhone16', 2)
# cur.execute(update_query, new_value)

# Delete query
# cur.execute('DELETE FROM products WHERE id=%s', ('8'))

# Commit the transaction
# conn.commit()

# Execute a SELECT query
cur.execute('SELECT * FROM products')
rows = cur.fetchall()

for row in rows:
    print(row)

# Close the cursor and the connection

cur.close()
conn.close()