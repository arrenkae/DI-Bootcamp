# class MyClass:

#     def __init__(self, val):
#         self.val = self.filterInt(val)


#     @staticmethod # doesn't need self
#     def filterInt(val):
#         if not isinstance(val, int):
#             raise TypeError
#         else:
#             return val

# a = MyClass(5)

# print(a.val)

# b = MyClass('100') - TypeError
# print(b.val)


class AtmAccount:

    available_acc_num = 2000 

    def __init__(self, holder):
        self.__holder = holder #private
        self.__account_num = AtmAccount.available_acc_num
        self.__balance = 0
        AtmAccount.available_acc_num += 1

    @property
    def balance(self):
        return self.__balance

    @balance.setter
    def balance(self, amount):
        self.__balance = self.validate_amount(amount)

    def deposit(self, amount):
        self.__balance += self.validate_amount(amount)
        return self.balance

    def withdraw(self, amount):
        if self.validate_amount(amount) < self.balance:
            self.balance -= self.validate_amount(amount)
        else:
            raise ValueError

    @staticmethod
    def validate_amount(amount):
        if amount < 0:
            raise ValueError('Can\'t be negative')
        else:
            return amount

    @classmethod
    def get_next_acc_num(cls):
        return cls.available_acc_num

    def __str__(self):
        return(f'Account Number: {self.__account_num}\nAccount Holder: {self.__holder}\nBalance: {self.__balance}')

    def __iadd__(self, amount):
        self.deposit(amount)
        return self

account1 = AtmAccount('Juliana S.')

# print(account1.holder) gives error
print(account1._AtmAccount__holder)

account1.deposit(100)
print(account1.balance)

account1.withdraw(20)
print(account1.balance)

account2 = AtmAccount('John Doe')
account3 = AtmAccount('Leo Di Caprio')

print(account1._AtmAccount__account_num)
print(account2._AtmAccount__account_num)
print(account3._AtmAccount__account_num)

print(AtmAccount.get_next_acc_num())

print(account1)

all_accounts = [account1, account2, account3]

print(len(all_accounts))

account1 += 20

print(account1)