# How Old Are You On Jupiter?

# Given an age in seconds, calculate how old someone would be on:
# Earth: orbital period 365.25 Earth days, or 31557600 seconds
# Mercury: orbital period 0.2408467 Earth years
# Venus: orbital period 0.61519726 Earth years
# Mars: orbital period 1.8808158 Earth years
# Jupiter: orbital period 11.862615 Earth years
# Saturn: orbital period 29.447498 Earth years
# Uranus: orbital period 84.016846 Earth years
# Neptune: orbital period 164.79132 Earth years

# So if you are told someone is 1,000,000,000 seconds old, the function should output that they are 31.69 Earth-years old.

import datetime

def age_seconds(birthdate):
    lived = datetime.datetime.now() - datetime.datetime.strptime(birthdate, '%d/%m/%Y')
    return int(lived.total_seconds())

my_seconds_age = age_seconds('04/03/1990')

planets = {'Mercury': 0.2408467, 'Venus': 0.61519726, 'Mars':1.8808158, 'Jupiter':11.862615, 'Saturn':29.447498, 'Uranus':84.016846, 'Neptun':164.79132}

def space_age(seconds, planet): 
    if planet not in planets:
        raise Exception(f'No data on {planet}')
    else:
        earth_age = seconds / 31557600
        planet_age = earth_age / planets[planet]
    return f'On {planet} you would be {planet_age} years old.'

print(space_age(my_seconds_age, 'Venus'))
print(space_age(my_seconds_age, 'Mars'))
print(space_age(my_seconds_age, 'Uranus'))
    
