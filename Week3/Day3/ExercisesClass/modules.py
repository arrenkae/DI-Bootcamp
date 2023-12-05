import random
import math
from decorators import AtmAccount
from faker import Faker as f

r_num = random.randint(0, 100)
print(r_num)

print(AtmAccount.available_acc_num)

fakeperson = f()

print(fakeperson.name(), fakeperson.address())