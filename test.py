import requests
import json
""" r = requests.get("https://pokeapi.co/api/v2/pokemon/charmander").json()
print(r) """
def getPoke(poke):
    response = requests.get(f"https://pokeapi.co/api/v2/pokemon/{poke}")
    if response.status_code != 200:
        return
    else:
        data = response.json()
        print(data)
        #return data
        return {
             "name": data["name"],
        "height": data["height"],
        "weight": data["weight"],
        "types": [t["type"]["name"] for t in data["types"]],
        }
        
pokemon = getPoke("Bulbasaur")
print(pokemon)