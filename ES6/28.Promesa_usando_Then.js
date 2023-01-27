/*Añade el método then a tu promesa. Usa result como parámetro de tu función callback,
 asimismo imprime result en la consola. */

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer es establecido a true para representar una respuesta satisfactoria del servidor
    let responseFromServer = true;
  
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(function(result) {
    console.log(result)
  });