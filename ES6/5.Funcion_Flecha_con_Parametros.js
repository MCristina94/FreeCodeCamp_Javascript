/* 
Reescribe la función myConcat que añade 
el contenido de arr2 a arr1 para que la función use la sintaxis de función flecha.

var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
  }; */
  
  const myConcat = (arr1, arr2) => arr1.concat(arr2);
  
  
  console.log(myConcat([1, 2], [3, 4, 5]));