/* En este desafío vas a utilizar Object.freeze para prevenir el cambio de constantes matemáticas. 
Necesitas congelar el objeto MATH_CONSTANTS para que nadie pueda alterar el valor de PI, 
añadir o borrar propiedades. */

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Cambia solo el código debajo de esta línea
      Object.freeze(MATH_CONSTANTS);
    // Cambia solo el código encima de esta línea
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();