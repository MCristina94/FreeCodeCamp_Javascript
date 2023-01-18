/* Reemplaza las dos asignaciones con una sintaxis de desestructuración equivalente. 
Todavía deben seguir asignando las variables highToday y highTomorrow con los valores de
 today y tomorrow del objeto HIGH_TEMPERATURES. */

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Cambia solo el código debajo de esta línea
  
  /* const highToday = HIGH_TEMPERATURES.today;
  const highTomorrow = HIGH_TEMPERATURES.tomorrow;  */
  
  const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
  
  // Cambia solo el código encima de esta línea