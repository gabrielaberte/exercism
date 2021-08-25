/*
*/

export const compute = (esquerda = "", direita="") => {
  
  if (esquerda === direita) {return 0;}  

  else if (esquerda ===""){
      throw new Error ('left strand must not be empty');
    }
  else if (direita === "") {
      throw new Error ('right strand must not be empty');
    }
  else if (direita.length !== esquerda.length) {
    throw new Error ('left and right strands must be of equal length');
  }
  else {
    let diferenca = 0

    for (let index = 0; index < esquerda.length; index++) {
   
      if (esquerda[index] !== direita[index]){ //a letra 1 da direita é diferente da esquerda? se sim adiciona 1 no contador diferenca
      diferenca++                              //se não, ele passa pra ler a proxima letra 
      };
    };
  
  return diferenca;
  };
  
};
