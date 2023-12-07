# The Deck of cards class should NOT inherit from a Card class.

# The requirements are as follows:

#     The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
#     The Deck class :
#         should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
#         should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.

import random

class Card:

    def __init__(self, suit, value):
        self.suit = suit
        self.value = value


class Deck:

    SUITS = ['hearts', 'diamonds', 'clubs', 'spades']
    VALUES = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']

    def __init__(self):
        self.cards = [card for card in self.gen_cards()]

    @staticmethod
    def gen_cards():
        for suit in Deck.SUITS:
            for value in Deck.VALUES:
               yield Card(suit, value)

    def show_deck(self):
        for card in self.cards:
            print(f'{card.value} of {card.suit}')

    def shuffle(self):
        if len(self.cards) == 52:
            random.shuffle(self.cards)
        else:
            raise Exception('Can only shuffle full deck')

    def deal(self):
        card_dealt = random.choice(self.cards)
        print(f'You deal {card_dealt.value} of {card_dealt.suit}')
        self.cards.remove(card_dealt)


my_deck = Deck()

my_deck.shuffle()
my_deck.show_deck()

my_deck.deal()
my_deck.deal()
my_deck.deal()

my_deck.show_deck()