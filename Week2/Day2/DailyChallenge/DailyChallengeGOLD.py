import datetime
import calendar

birthdate_input = input('Your birth date(DD/MM/YYYY format): ')
birthdate_list = birthdate_input.split('/')

date_current = datetime.datetime.now()
date_birth = datetime.datetime(int(birthdate_list[2]), int(birthdate_list[1]), int(birthdate_list[0]))

age = date_current.year - date_birth.year - ((date_current.month, date_current.day) < (date_birth.month, date_birth.day))

if age % 10 != 0:
    candles_num = age % 10
else:
    candles_num = 10

candles_margin = (11-candles_num)//2

cake_top = '_' * candles_margin + 'i' * candles_num + '_' * (11 - candles_num - candles_margin)
cake = (f"""
       {cake_top}
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
""")

if calendar.isleap(date_birth.year):
    print(cake * 2)
else:
    print(cake)