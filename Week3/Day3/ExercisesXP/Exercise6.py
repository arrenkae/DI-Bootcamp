# Exercise 6 : Birthday and minutes

# Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.

import datetime

def minutes_lived(birthdate):
    lived = datetime.datetime.now() - datetime.datetime.strptime(birthdate, '%d/%m/%Y')
    print(f'You have lived {int(lived.total_seconds() // 60)} minutes')

minutes_lived('04/03/1990')