export function totalBirdCount(birdsPerDay) {
  let soma = 0
  for (let index = 0; index < birdsPerDay.length; index++) {
    soma += birdsPerDay[index]
  }
  return soma
}
/* USANDO REDUCE
let soma = birdsPerDay.reduce((acc, birds) => acc += birds, 0)
return soma;
*/

export function birdsInWeek(birdsPerDay, week) {
 let passaros = 0;
 let passarosSemana = birdsPerDay.slice((week*7)-7,(week*7));
 return totalBirdCount(passarosSemana);
}



export function fixBirdCountLog(birdsPerDay) {
  for (let index = 0; index < birdsPerDay.length; index += 2) {
    birdsPerDay[index] += 1;  
  }
  return birdsPerDay;
}
