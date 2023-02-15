//Completa la expresión regular waldoRegex para encontrar "Waldo" en la cadena waldoIsHiding con una coincidencia literal.
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Cambia esta línea
let result = waldoRegex.test(waldoIsHiding);