# Exercise 1 : Call History

# Create a class called Phone. This class takes a parameter called phone_number. When instantiating an object create an attribute called call_history which value is an empty list.
# Add a method called call that takes both self and other_phone (i.e another Phone object) as parameters. The method should print a string stating who called who, and add this string to the phone’s call_history.
# Add a method called show_call_history. This method should print the call_history.
# Add another attribute called messages to your __init__() method which value is an empty list.

# Create a method called send_message which is similar to the call method. Each message should be saved as a dictionary with the following keys:
# - to : the number of another Phone object
# - from : your phone number (also a Phone object)
# - content

# Create the following methods: show_outgoing_messages(self), show_incoming_messages(self), show_messages_from(self)

# Test your code !!!

class Phone:

    def __init__(self, phone_number):
        self.number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        call_info = f'{self.number} called {other_phone.number}'
        print(call_info)
        self.call_history.append(call_info)
        return self.call_history

    def show_call_history(self):
        print(self.call_history)

    def send_message(self, other_phone, text):
        message = {'to':other_phone.number, 'from':self.number, 'contect':text}
        self.messages.append(message)
        return self.messages

    def show_messages(self):
        for message in self.messages:
            print(message)

phone1 = Phone('+9725555555')
phone2 = Phone('+9721234567')
phone3 = Phone('+79261112233')

phone1.call(phone2)
phone1.call(phone3)

phone1.show_call_history()

phone1.send_message(phone2, 'Hey! How are you?')
phone1.send_message(phone3, 'Buy some milk on your way home')

phone1.show_messages()