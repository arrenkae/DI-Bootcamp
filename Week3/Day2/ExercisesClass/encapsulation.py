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
        self.__balance = amount

    def deposit(self, amount):
        self.__balance += amount
        return self.balance

    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError
        else:
            self.balance -= amount

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