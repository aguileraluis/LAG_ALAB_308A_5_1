import { flatFunctionOriginal } from './indexTwo.js'; 

import { Character } from './indexTwo.js'; 
// Part One: Stack Overflow
let count = 0;

try {
  function increment() {
    count++;
    increment();
  }
  increment();

} catch (error) {
  console.log(error);
  // console.log(count);
}
// Part Two: Trampolines

// Step One


console.log(flatFunctionOriginal([
  [ ["hello", "how", "is", "this", "working"],
  ["is", "this", "working"],
  ["is", "it", "working"]], 
  [ ["hello2", "how2", "is2", "this2", "working2"],
  ["is2", "this2", "working2"],
  ["is2", "it2", "working2"]],
 ,
])); 


// Step Two
const flatFunction = (array, result = []) => { 

  if (Array.isArray(array)) {
  array.forEach((arrayItem) => {
    
    result = result.concat(arrayItem); 
  
  })   } else {
    return;
  }

  // console.log(result.flat()); 
  return () => flatFunction(array[0] + 1); 
};

// Step Three
const trampoline = fn => (...args) => {
  let result = fn(...args)
  while (typeof result === 'function') {
    result = result()
  }
  return result
}

const flatArray = trampoline(flatFunction); 

(flatArray([
  [ ["hello", "how", "is", "this", "working"],
  ["is", "this", "working"],
  ["is", "it", "working"]], 
  [ ["hello2", "how2", "is2", "this2", "working2"],
  ["is2", "this2", "working2"],
  ["is2", "it2", "working2"]],
]));


// Part 1: Humble Beginnings
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Flea",
      belongings: ["hat", "sunglasses"],
    },
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};

adventurer.roll();

// Part 2: Class Fantasy


const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.roll();

// Part 3: Class Features
class Adventurer extends Character {
  constructor(name, role) {
    let roleIncluded = false;
    super(name);

    this.inventory.push("bedroll", "50 gold coins");

    const roles = Adventurer.ROLES;

    roles.forEach((roleItem) => {
      if (roleItem === role) {
        roleIncluded = true;
      }
    });

    if (roleIncluded) {
      this.role = role;
    }
  }

  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }

  run() {
    console.log(`${this.name} is running`);
  }

  speak() {
    console.log(`${this.name} is speaking`);
  }

  static ROLES = ["Fighter", "Healer", "Wizard"];

  // Part 6: Developing Skills
  duel(adventurer) {
    let winner = false;
    let myHealth = this.health;
    let oppHealth = adventurer.health;

    while (winner === false) {
      let score = this.roll();
      let oppScore = adventurer.roll();

      if (score > oppScore) {
        oppHealth = oppHealth - 1;
        adventurer.health = oppHealth;
      } else if (oppScore > score) {
        myHealth = myHealth - 1;
        this.health = myHealth;
      } else if (score === oppScore) {
        oppHealth = oppHealth;
        myHealth = myHealth;
      }

      if (myHealth <= 50 || oppHealth <= 50) {
        winner = true;
        if (this.health > 50) {
          console.log(`The winner of this duel is ${this.name}`);
        } else {
          console.log(`The winner of this duel is ${adventurer.name}`);
        }
        return;
      }
    }
  }
}

// Part 4: Class Uniforms
class Companion extends Character {
  constructor(name, role, ...inventory) {
    super(name);
    this.role = role;
    this.inventory.push(...inventory);
  }
}

const pepe = new Adventurer("Pepe", "Wizard");
const luis = new Adventurer("Luis", "Healer");

pepe.duel(luis);
const pedro = new Companion("Pedro", "Gatherer", "Sword", "80 bucks");

// Part 5: Gather your party
class AdventurerFactory {
  constructor(role) {
    this.role = role;
    this.adventurers = [];
  }
  generate(name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
  }
  findByIndex(index) {
    return this.adventurers[index];
  }
  findByName(name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
const pablo = healers.generate("Pablo");



