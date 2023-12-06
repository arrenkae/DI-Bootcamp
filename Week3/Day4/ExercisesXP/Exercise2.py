# Exercise 2: Working with JSON
# Instructions

# Access the nested “salary” key from the JSON-string above.
# Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
# Save the dictionary as JSON to a file.

import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

sample = json.loads(sampleJson)

print(sample['company']['employee']['payable']['salary'])

sample['company']['employee']['birth_date'] = '06/12/1990'

print(sample)

json_file = 'sample.json'

with open(json_file, 'w') as file_obj:
    json.dump(sample, file_obj)