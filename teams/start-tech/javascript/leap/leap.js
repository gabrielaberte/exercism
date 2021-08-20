//
//verificar se a data referencia é um ano bissexto
// condições para ocorrer: 
//Todo ano divisivel por 4
//exceto que esse ano seja divisivel por 100
//a menos que esse ano seja divisivel por 400
//garantir o que é par e não é um ano bissexto

//export const isLeap = (ano) => {
   //if ( (ano%4 == 0 & ano%100 !== 0) //ano divisível por 4 E não divisível por 100 -> true
   //|| (ano % 400 === 0) ) {          // ou ano divível por 400
   //  return true
  // } else {
   //  return false
  // }
// };
 
   export const isLeap = (ano) => {
   var divisivelPor4 = ano%4 === 0; // ano é divisível por 4
   var divisivelPor100 = ano%100 === 0; // ano é divisível por 100
   var divisivelPor400 = ano%400 === 0; // ano é divisível por 400
   var ehBissexto = divisivelPor4 && !divisivelPor100 || divisivelPor400; 
               //      DIVISIVEL POR 4   AND NAODIVISIVEL 100 OR DIVISIVEL 400
    console.log(ehBissexto);
    return ehBissexto;
   };

//   export const isLeap = (ano) => {
//    if ((ano%4 == 0 & ano%25 !==0) || (ano%400 ==0)) {return true;} //x%4 (resto da divisão por 4)== 0 é divisível, se for 0
//     else {
//    return false};
//  };