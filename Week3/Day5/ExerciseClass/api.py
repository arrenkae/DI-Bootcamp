import requests
import os, json

dir_path = os.path.dirname(os.path.realpath(__file__))

# response = requests.get('https://api.chucknorris.io/jokes/random')

# print(response)

#200 = Success
#300 = Redirect
#400 = Error
#404 = Not found

# print(response.json())

data = []

for i in range(11):
    response = requests.get('https://api.chucknorris.io/jokes/random')
    if response.status_code == 200:
        data.append(response.json())

with open(dir_path + '/jokes.json', mode = 'a') as file:
    json.dump(data, file)