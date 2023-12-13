import requests
import random
import psycopg2
import os
from dotenv import load_dotenv

response = requests.get('https://restcountries.com/v3.1/all?fields=name,capital,flags,subregion,population')

if response.status_code == 200:
    all_countries = response.json()

countries = []

for i in range(11):
    while True:
        random_coutry = random.choice(all_countries)
        if random_coutry not in countries:
            countries.append(random_coutry)
            break

load_dotenv()

conn = psycopg2.connect(
    dbname=os.getenv('db_name'),
    user=os.getenv('db_user'),
    password=os.getenv('db_password'),
    host=os.getenv('db_host'),
    port=os.getenv('db_port')
)
cur = conn.cursor()

for country in countries:
    query = 'INSERT INTO countries (name, capital, flag, subregion, population) VALUES (%s, %s, %s, %s, %s)'
    data = (country['name']['common'], country['capital'][0], country['flags']['png'], country['subregion'], country['population'])
    cur.execute(query, data)

conn.commit()

cur.close()
conn.close()