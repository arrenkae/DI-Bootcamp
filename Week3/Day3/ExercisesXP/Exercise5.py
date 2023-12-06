# Exercise 5 : Amount of time left until January 1st

# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).

import datetime

def countdown():
    
    time_left = datetime.datetime(2024, 1, 1) - datetime.datetime.now()
    hours_left = time_left.seconds//3600
    minutes_left = (time_left.seconds - hours_left*3600)//60
    seconds_left = time_left.seconds - hours_left*3600 - minutes_left*60
    print(f'the 1st of January is in {time_left.days} days and {hours_left}:{minutes_left}:{seconds_left} hours')

countdown()