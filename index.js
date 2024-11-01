import flatFunctionOriginal from './indexTwo.js'; 
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

// (flatArray([
//   [ ["hello", "how", "is", "this", "working"],
//   ["is", "this", "working"],
//   ["is", "it", "working"]], 
//   [ ["hello2", "how2", "is2", "this2", "working2"],
//   ["is2", "this2", "working2"],
//   ["is2", "it2", "working2"]],
// ]));

// Part Three is in partThree.js file.




