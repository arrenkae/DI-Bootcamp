# Try to recreate the class explained below:
# We have a class called Door that has an attribute of is_opened declared when an instance is initiated.
# We can create a class called BlockedDoor that inherits from the base class Door.
# We just override the parent class's functions of open_door() and close_door() with our own BlockedDoor version of those functions, which simply raises an Error that a blocked door cannot be opened or closed.

class Door:

    def __init__(self, is_opened):
        self.is_opened = is_opened

    def open_door(self):
        if self.is_opened:
            print('The door is already open.')
        else:
            print('The door has been opened!')
            self.is_opened = True
        return self.is_opened

    def close_door(self):
        if self.is_opened:
            print('The door has been closed!')
            self.is_opened = False
        else:
            print('The door is already closed.')
        return self.is_opened

class BlockedDoor(Door):

    def __init__(self, is_opened):
        super().__init__(is_opened)
        self.is_opened = False

    def open_door(self):
        raise Exception('A blocked door can\'t be opened')

    def close_door(self):
        raise Exception('A blocked door can\'t be closed')


door1 = Door(False)

door1.close_door()
door1.open_door()
door1.open_door()
door1.close_door()

door2 = BlockedDoor(True)

print(door2.is_opened)
door2.close_door()
door2.open_door()


