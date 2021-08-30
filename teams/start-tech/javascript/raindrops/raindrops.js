// - has 3 as a factor, add 'Pling' to the result.
// - has 5 as a factor, add 'Plang' to the result.
// - has 7 as a factor, add 'Plong' to the result.
// - _does not_ have any of 3, 5, or 7 as a factor, the result should be the digits of the number.

// ## Examples

// - 28 has 7 as a factor, but not 3 or 5, so the result would be "Plong".
// - 30 has both 3 and 5 as factors, but not 7, so the result would be "PlingPlang".
// - 34 is not factored by 3, 5, or 7, so the result would be "34".

export const convert = (numero) => {
 var rainDrop ="";
 if (numero%3 == 0){rainDrop = rainDrop + "Pling"};
 if (numero%5 == 0){rainDrop = rainDrop + "Plang"};
 if (numero%7 == 0){rainDrop = rainDrop + "Plong"};
 if (numero%3 !== 0 && numero%5 !==0 && numero%7 !==0) {rainDrop = "" + numero}
 return rainDrop;
};

/*
let rainDrop ='';
!(numero % 3) ? rainDrop += 'Pling' : '';
!(numero % 5) ? rainDrop += 'Plang' : '';
!(numero % 7) ? rainDrop += 'Plong' : '';
if (!rainDrop) rainDrop += numero
return rainDrop;

*/



