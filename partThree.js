function primeNumber(n, output = []) {

  let numberContainer = document.getElementById("numberBox");
  let numbers = []; 
    
  while (n > 1) {
    for (let i = 1; i <= n; i++) {
      if (n % i === 0){
        numbers.push(i); 
      }
    }
    
    if (numbers.length === 2) {
      let currLi = document.createElement('li'); 
    currLi.innerText = n; 
    numberContainer.append(currLi); 
    } else {
      n--; 
      numbers = []; 
    }
  }

  setTimeout(() => {
    alert('The results are complete.')
  }, 500);

  return () => primeNumber(n)
}

const trampoline = fn => (...args) => {
  let result = fn(...args)
  while (typeof result === 'number') {
    result = result()
  }
  return result
}

const check = trampoline(primeNumber); 

check(10000); 

