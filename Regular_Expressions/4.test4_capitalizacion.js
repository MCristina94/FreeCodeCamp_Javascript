//Escribe una expresión regular fccRegex para que coincida con freeCodeCamp sin importar su capitalización. 
//Tu expresión regular no debe coincidir con ninguna abreviatura o variación con espacios.
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Cambia esta línea
let result = fccRegex.test(myString);