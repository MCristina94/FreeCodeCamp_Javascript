/* Corrige el código para que la variable i, declarada en la sentencia if sea 
una variable separada de la variable i, declarada en la primera línea de la función.
Asegúrate de no utilizar la palabra clave var en ninguna parte de tu código. */

function checkScope() {
   let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  };

  checkScope();