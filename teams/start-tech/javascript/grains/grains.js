//erros: 0, num negativo e > 64
// 64 quadrados e cada quadrado dobra o numero de grãos
//- quantos grãos tem no quadrado
//- o número total de grãos no tabuleiro de xadrez

export const square = (quadrado) => {
  
  if (quadrado <= 0 || quadrado > 64) {
    throw new Error("square must be between 1 and 64");
  }
   
    let n = quadrado - 1; //qual quadrado estou 
    var graosNoQuadrado = BigInt(2**n);  //dobrando quadrado anterior
    return graosNoQuadrado
  
  };

export const total = () => {
  var totalDeGraos = BigInt(0);
for (let n = 0; n < 64; n++) { //para n ate 64 vou somando no loop

totalDeGraos += BigInt(2**n); //total = totaldegraos + graos no prox quadrado 
}
return totalDeGraos;

}