 //criando um objeto com chaves sendo as cores:valores
 const color ={
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

export const decodedValue = (colorArray) => {//aqui é uma array, n pode 2 input
  
  return color[colorArray[0]]*10 + color[colorArray[1]]
  //const result = color[colorArray[0]] + color[colorArray[1]];
  //return +result ->se for em formato string
};

