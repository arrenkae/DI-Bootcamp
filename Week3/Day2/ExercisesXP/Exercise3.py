# Exercise 3 : Dogs Domesticated
# Create a new python file and import your Dog class from the previous exercise.
# In the new python file, create a class named PetDog that inherits from Dog.
# Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
# Add the following methods:

# train: prints the output of bark and switches the trained boolean to True
# play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.
# do_a_trick: If the dog is trained the method should print one of the following sentences at random:

# “dog_name does a barrel roll”.
# “dog_name stands on his back legs”.
# “dog_name shakes your hand”.
# “dog_name plays dead”.

import random
from Exercise2 import Dog, dog1, dog2, dog3

class PetDog(Dog):

    def __init__(self, name, age, weight, trained = False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        if self.trained:
            print(f'{self.name} is already trained')
        else:
            self.trained = True

    def play(self, *args):
        dog_names = [self.name]
        for dog in args:
            dog_names.append(dog.name)
        return(f'{", ".join(dog_names)} all play together')

    def do_a_trick(self):
        tricks = ['does a barrel roll', 'stands on his back legs', 'shakes your hand', 'plays dead']
        if self.trained:
            print(self.name, tricks[random.randint(0, len(tricks)-1)])
        else:
            print(f'{self.name} is not trained')


petdog1 = PetDog('Scratch', 5, 15)

petdog1.do_a_trick()
petdog1.train()
petdog1.do_a_trick()

print(petdog1.fight(dog1))
print(petdog1.play(dog1, dog2, dog3))