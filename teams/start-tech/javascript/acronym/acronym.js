//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (frase) => {
  const separandoPalavras = frase.replace('_', '').match(/(\w+)('\w+)?/g);
  var filtrandoPalavras = separandoPalavras.filter(w => w).filter(w => w !== '-');
console.log(filtrandoPalavras)          //se w for true coloque ele na nova array
};
