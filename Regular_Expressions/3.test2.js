//Completa la expresión regular petRegex para que coincida con las mascotas dog, cat, bird, o fish.

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Cambia esta línea
let result = petRegex.test(petString);