/*Reemplaza las dos asignaciones con una sintaxis de desestructuración equivalente. 
Todavía deben seguir asignando las variables lowToday y highToday con los valores de today.low 
y today.high del objeto LOCAL_FORECAST.
*/

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Cambia solo el código debajo de esta línea
  
  /* const lowToday = LOCAL_FORECAST.today.low;
  const highToday = LOCAL_FORECAST.today.high; */
  
  const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;
  
  
  // Cambia solo el código encima de esta línea