//Part 1: Humble Beginnings

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"]
//     }

  //   create a loop that logs each item in Robin’s inventory

//   for (let key in adventurer) {
//     if (adventurer.hasOwnProperty(key)) {
//       console.log(key, adventurer[key]);
//     }
//   }

//   const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {
//             name:"Frank",
//             type:"Flea",
//             belogings:["small hat","sunglasses"]
//              },
   
//     },
//     roll (mod = 0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`)
//     }

// }

//Test this method by calling adventurer.roll() a few times.

//console.log(adventurer.roll())

//Part 2: Class Fantasy

class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
  }

  const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];


//Part 3: Class Features