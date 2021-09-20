const FranceArmy = {
  FranceArmyCharacteristics() {
    const fArcher = {
      "ability": {
        "fast reload": "suas bestas disparam a cada 3 minutos"
      },
      "strength": "8",
      "dexterity": "13",
      "constitution": "8",
      "intelligence": "10",
      "wisdom": "10",
      "lifePoints": "25",
      "equipaments": [
        {
          "armor": "armadura leve",
          "weapom": "besta",
          "arrows": "100"
        }
      ]
    }
    const fVillager = {
      "ability": {
        "zero": "ability non"
      },
      "strength": "8",
      "dexterity": "5",
      "constitution": "6",
      "intelligence": "8",
      "wisdom": "10",
      "lifePoints": "15",
      "equipaments": [
        {
          "weapom": "fork",
        }
      ]
    }
    const fKnight = {
      "ability": {
        "fast death": "o primeiro golpe de sua espada é critico"
      },
      "strength": "13",
      "dexterity": "10",
      "constitution": "15",
      "intelligence": "10",
      "wisdom": "10",
      "lifePoints": "35",
      "equipaments": [
        {
          "armor": "full plate",
          "weapom": "big sword"
        }
      ],
      "mount": "horse",
      "mount eqipament": {
        "cela": "uma cela de couro",
        "ferradura": "um conjunto de ferraduras"
      }
    }
    const fSM = {
      "ability": {
        "fast sword": "eles conseguem bater 2x antes de qualquer reação em seu primeiro ataque contra o oponente"
      },
      "strength": "12",
      "dexterity": "16",
      "constitution": "11",
      "intelligence": "10",
      "wisdom": "10",
      "lifePoints": "30",
      "equipaments": [
        {
          "armor": "armadura pesada",
          "weapom": "big sword",
          "shild": "um escudo de madeira com bordas de ferro"
        }
      ]
    }

    return {
      "Characteristcs of Frence Archers": fArcher,

      "Characteristcs of Frence Sword Master": fSM,

      "Characteristcs of Frence Villager": fVillager,

      "Characteristcs of Frence Knight": fKnight,
    }
  }
}


export default FranceArmy