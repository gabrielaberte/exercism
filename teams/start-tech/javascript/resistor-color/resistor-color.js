//criando um objeto com chaves sendo as cores:valores
const obj ={
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
};

export const colorCode = (color) => {  //pessoa entra com a cor e vai receber o valor
  return obj[color]
};
export const COLORS = Object.keys(obj); //chamando a classe obj em q mostre um array com as chaves
console.log(COLORS);

export const valorCode = (valor) => {
  var valores = Object.values(obj);
  console.log(valores)
  for (let index = 0; index < valores.length; index++) {
    if (valores[index] === valor ) {
      var keys = Object.keys(obj);
      console.log(keys)
      return keys[index];
    } 
  }
  return undefined; 
}