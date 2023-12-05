# Mini-Project: Characters game

#     Create a class called Character with the following attributes and methods:
#         attribute name
#         attribute life – starts with a default value of 20
#         attribute attack – the base attack of a character (integer) will be a default of 10
#         method basic_attack() - accepts another Character instance as a parameter. Your character will <attack> the other character so his <life> points should drop.


# Instructions

#     Now create 3 different classes that inherit from Character:
#     Every character type should say (ie. print) something when they are created, get creative :)
#         Druid:
#             meditate() - increases life by 10, decrease attack by 2
#             animal_help()- increases attack by 5
#             fight() - accepts another Character instance as a parameter and subtracts (0.75*life + 0.75*attack) from the other character’s life.
#             Example:
#             druid.fight(other_char): other_char.life - (0.75*self.life + 0.75*self.attack)

#         Warrior:
#             brawl() - accepts another Character instance as a parameter, subtracts (2*attack) to the other characters life and adds (0.5*attack) to his own life.
#             train() - increases both your attack and life points by 2.
#             roar() - accepts another Character instance as a parameter and subtracts their attack points by 3.

#         Mage:
#             curse() – accepts another Character instance as a parameter and subtracts their attack points by 2.
#             summon() - increases attack attribute by 3 points.
#             cast_spell() - accepts another Character instance as a parameter and subtracts attack/life to the other character’s life points (eg if your attack is 20 and life is 5 you will subtract 4 life points).

#     Once all your classes are created start testing them, create one of each character and use each of their method.


class Character:

    def __init__(self, name, life=20, attack=10, is_alive=True):
        self.name = name
        self.life = life
        self.attack = attack
        self.is_alive = is_alive

    def basic_attack(self, other, atk_description='attacks', damage=None, heal=None):
        if damage is None:
            damage = self.attack
        if other.is_alive:
            print(f'{self.name} {atk_description} {other.name}! {other.name} loses {damage} life')
            other.life = other.life - damage if other.life - damage >= 0 else 0
            if heal:
                print(f'{self.name} gains {heal} life')
                self.life += heal
            if other.life == 0:
                print(f'{other.name} dies!')
                other.is_alive = False
        else:
            print(f'{other.name} is already dead!')

    def __repr__(self):
        return f'| {self.name}\n| Life: {self.life}\n| Attack: {self.attack}'

class Druid(Character):

    def __init__(self, name, life=20, attack=10, is_alive=True):
        super().__init__(name, life, attack, is_alive)

    def meditate(self):
        self.life += 10
        self.attack = self.attack - 2 if self.attack - 2 >= 0 else 0
        print(f'{self.name} meditates, gaining 2 life and losing 2 attack points')

    def animal_help(self):
        self.attack += 5
        print(f'{self.name} gets help from animals for 5 additional attack points')

    def fight(self, other):
        damage = int(0.75*self.life + 0.75*self.attack)
        super().basic_attack(other, 'unleashes the wrath of nature at', damage)
        
class Warrior(Character):

    def __init__(self, name, life=20, attack=10, is_alive=True):
        super().__init__(name, life, attack, is_alive)

    def train(self):
        self.life += 2
        self.attack += 2
        print(f'{self.name} trains, gaining 2 life and 2 attack points')

    def roar(self, other):
        other.attack = other.attack - 3 if other.attack - 3 >= 0 else 0
        print(f'{self.name} roars, intimidating {other.name} to lose 3 attack points')

    def brawl(self, other):
        damage = 2*self.attack
        heal = int(0.5*self.attack)
        super().basic_attack(other, 'brawls with', damage, heal)

class Mage(Character):

    def __init__(self, name, life=20, attack=10, is_alive=True):
        super().__init__(name, life, attack, is_alive)

    def summon(self):
        self.attack += 3
        print(f'{self.name} summons a demon for 2 additional attack points')

    def curse(self, other):
        other.attack = other.attack - 2 if other.attack - 2 >= 0 else 0
        print(f'{self.name} curses {other.name} to lose 2 attack points')

    def cast_spell(self, other):
        damage = self.attack // self.life
        super().basic_attack(other, 'casts a spell at', damage)

player_druid = Druid('Paelias')

player_warrior = Warrior('Arisa')
player_mage = Mage('Victor', life=5, attack=30)

monster = Character('Goblin', 15, 2)
boss = Character('Vampire', 100, 20)

player_druid.meditate()
player_druid.animal_help()

print(player_druid)

player_warrior.train()
player_warrior.train()

print(player_warrior)

player_mage.summon()
player_mage.curse(monster)

print(player_mage)
print(monster)

monster.basic_attack(player_warrior)

player_mage.cast_spell(monster)
player_warrior.brawl(monster)
player_warrior.brawl(monster)

player_warrior.roar(boss)

boss.basic_attack(player_mage)

print(boss)

player_druid.fight(boss)

player_warrior.brawl(boss)

print(boss)

boss.basic_attack(player_warrior)

print(player_warrior)

player_warrior.brawl(boss)
player_warrior.brawl(boss)