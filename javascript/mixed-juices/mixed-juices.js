import { time } from "console";

export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5
    break;
    case 'Energizer':
      return 1.5
    break;
    case 'Green Garden':
      return 1.5
    break;
    case 'Tropical Island':
      return 3
    break;
    case 'All or Nothing':
      return 5
    break;

    default:
      return 2.5
      break;
  };
}

export function limesToCut(wedgesNeeded, limes) {
  let cortaLimao = 0
  let contador = 0

  while (cortaLimao < wedgesNeeded && contador < limes.length) {
        if (limes[contador] =='small') cortaLimao += 6;
        else if (limes[contador] =='medium') cortaLimao += 8;
        else if (limes[contador] =='large') cortaLimao += 10;
        contador++ 
      };
   return contador;
  };

export function remainingOrders(timeLeft, orders) {
  // let tempoDePreparo = 0
  // let contador = 0
  // while (tempoDePreparo <= timeLeft){
   
  //     if (orders[contador] == 'Pure Strawberry Joy') {tempoDePreparo += 2.5;
  //     orders.shift()}
  //     else if (orders[contador] == 'Green Garden') {tempoDePreparo += 1.5;
  //     orders.shift()}
  //     else if (orders[contador] =='Energizer') {tempoDePreparo += 1.5;
  //     orders.shift()}
  //     else if (orders[contador]==  'Tropical Island') { tempoDePreparo += 3;
  //     orders.shift()}
  //     else if (orders[contador] == 'All or Nothing') {tempoDePreparo += 5
  //     orders.shift()}
  //     //else if (orders[contador] === []) {}
  //     else {tempoDePreparo += 2.5;
  //       orders.shift()}

  // contador ++}
  
    let tempo = timeLeft
    let contador = 0

    do {
      if (orders.length === 0) return [];
      let totalSuco = timeToMixJuice(orders[contador]);
      tempo -= totalSuco;
      contador ++;
      
    } while (tempo > 0);

  return orders.slice(contador);

}
