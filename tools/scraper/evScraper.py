import requests
from bs4 import BeautifulSoup
import json

from pokemon import Pokemon
from pokemon import PokemonEncoder

# Table Data constants for code clarity.
POKEMON_ROW_START_INDEX = 1
POKEMON_ID_INDEX = 0
POKEMON_NAME_INDEX = 2
HP_INDEX = 4
ATTACK_INDEX = 5
DEFENSE_INDEX = 6
SPECIAL_ATTACK_INDEX = 7
SPECIAL_DEFENSE_INDEX = 8
SPEED_INDEX = 9

# Pulls from the Bulbapedia EV list page.
url = 'https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_effort_value_yield'
page = requests.get(url)

soup = BeautifulSoup(page.content, 'html.parser')

# Find the table with all of the EV yields and get all of the rows.
table = soup.find("table", class_="sortable")
rows = table.find_all("tr")

# Array used to store the ID, name, and EVs of each pokemon.
pokemonData = []

for row in rows:
    # This will store all of the scraped data into a Pokemon object.
    # See ./Pokemon.py for class definition.
    pokemon = Pokemon()
    rowData = row.find_all("td")

    # Ensures that the rowData is actually a Pokemon row.
    if (len(rowData) > 0):
        # Assign stats to object.
        pokemon.value = rowData[POKEMON_ID_INDEX].b.string
        pokemon.hitPoints = int(rowData[HP_INDEX].string)
        pokemon.attack = int(rowData[ATTACK_INDEX].string)
        pokemon.defense = int(rowData[DEFENSE_INDEX].string)
        pokemon.specialAttack = int(rowData[SPECIAL_ATTACK_INDEX].string)
        pokemon.specialDefense = int(rowData[SPECIAL_DEFENSE_INDEX].string)
        pokemon.speed = int(rowData[SPEED_INDEX].string)

        # Some pokemon have an additional name (such as Mega Charizard). This checks
        # for that as it is a seperate HTML element.
        if(rowData[POKEMON_NAME_INDEX].small != None):
            pokemon.name = f"{rowData[POKEMON_NAME_INDEX].a.string} {rowData[POKEMON_NAME_INDEX].small.string}"
        else:
            pokemon.name = rowData[POKEMON_NAME_INDEX].a.string
    
    pokemonData.append(pokemon)

# TODO: Look into why this is happening. For some reason the first pokemon in
#       the list has empty attributes. Not sure why as the first row of data appears
#       to be a Pokemon.
pokemonData.pop(0)

jsonString = json.dumps(pokemonData, indent=4, cls=PokemonEncoder)

jsonDumpFile = open("pokemonData.json", "w")
jsonDumpFile.write(jsonString)
jsonDumpFile.close()