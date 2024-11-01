export default function flatFunctionOriginal(array) { 
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