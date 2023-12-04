class Animal:

    def __init__(self, name, family, legs):
        self.name = name
        self.family = family
        self.legs = legs

    def make_sound(self):
        print(f'{self.name} is making a sound')


class Dog(Animal):

    def __init__(self, name, family='canidae', legs=4, trained = False):
        super().__init__(name, family, legs)
        self.trained = trained

    def make_sound(self):
        print(f'{self.name} goes woof')

    def fetch_ball(self):
        print(f'{self.name} fetches a ball')

    def give_paw(self):
        if self.trained:
            print(f'{self.name} gives you a paw')
        else:
            print(f'{self.name} is not trained to do that')


animal1 = Animal('Bobo', 'felidae', 4)
print(animal1.family)
animal1.make_sound()

dog1 = Dog('Rex')
print(dog1.name)
print(dog1.family)
print(dog1.trained)
dog1.make_sound()
dog1.fetch_ball()
dog1.give_paw()

dog2 = Dog('Lassy', True)
dog2.give_paw()

