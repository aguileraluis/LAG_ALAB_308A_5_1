export function flatFunctionOriginal(array) { 
  const result = []; 

  array.forEach((arrayItem) => {
    if (Array.isArray(arrayItem)) {
      result.push(...flatFunctionOriginal(arrayItem)); 
    } else {
      result.push(arrayItem); 
    }
  }); 

  return result; 
};

export class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
    return Number(result);
  }

  static MAX_HEALTH = 100;
}