# Exercise 1 : Upcoming Holiday

# Write a function that displays today’s date.
# The function should also display the amount of time left from now until the next upcoming holiday and print which holiday that is. (Example: the next holiday is in 30 days and 12:03:45 hours).
#  Hint: Start by hardcoding the datetime and name of the upcoming holiday.

import datetime

def until_holiday(holiday_name, holiday_date):
    date_md = datetime.datetime.strptime(holiday_date, '%d/%m')
    if date_md.month == datetime.datetime.now().month and date_md.day == datetime.datetime.now().day:
        return print(f'{holiday_name} is today!')
    elif date_md.month >= datetime.datetime.now().month and date_md.day > datetime.datetime.now().day:
        date_full = date_md.replace(year=datetime.datetime.now().year)
    else:
        date_full = date_md.replace(year=datetime.datetime.now().year + 1)
    time_left = date_full - datetime.datetime.now()
    hours_left = time_left.seconds//3600
    minutes_left = (time_left.seconds - hours_left*3600)//60
    seconds_left = time_left.seconds - hours_left*3600 - minutes_left*60
    print(f'The next {holiday_name} is in {time_left.days} days and {hours_left}:{minutes_left}:{seconds_left} hours')

until_holiday('Hanukkah', '07/12')
until_holiday('New Year', '01/01')