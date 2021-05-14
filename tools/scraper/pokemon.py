import json
from json import JSONEncoder

class Pokemon:
    def __init__(self):
        self.value = ''
        self.name = ''
        self.hitPoints = 0
        self.attack = 0
        self.defense = 0
        self.specialAttack = 0
        self.specialDefense = 0
        self.speed = 0

class PokemonEncoder(JSONEncoder):
    def default(self, o):
        return o.__dict__