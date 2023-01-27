/*Añade el método catch a tu promesa. Usa error como el parámetro de tu función callback e 
imprime error en la consola. */

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer es establecido a false para representar una respuesta no satisfactoria del servidor
    let responseFromServer = false;
  
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });
  
  makeServerRequest.catch(function(error){
    console.log(error);
  });