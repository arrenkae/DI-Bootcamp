import json

#converting a python dict into a json file

# my_family = {
#     'parents':['Beth', 'Jerry'],
#     'children':['Summer', 'Morty']
# }

# json_file = 'family.json'

# with open(json_file, 'w') as file_obj:
#     json.dump(my_family, file_obj)

# retrieve json data

json_file = 'family.json'

with open(json_file, 'r') as file_obj:
    my_family2