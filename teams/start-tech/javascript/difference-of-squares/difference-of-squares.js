//Math.pow(number,2) ou Number **2
//for (let i = 0; i < 9; i++) {}
//let i = 0; while (i < 9) {i++;}
  


export class Squares {
  numero;
  constructor(numero) {
    this.numero = numero
  } 

  get sumOfSquares() {
    let n = 0; //primeiro num que precisa ser trabalhado
    var somaDosQuadrados = 0;
    while (n <= this.numero) {//numero de vz q vai repetir, <=
    somaDosQuadrados += n**2 ; //(1²+2²+3²....n²)
    n++;  //soma +1 em n e entra no while de novo
  }
  return somaDosQuadrados;
}

  get squareOfSum() {
    let n = 0; //primeiro num que precisa ser trabalhado
    var soma = 0;
    var quadradoDaSoma
    while (n <= this.numero) {//numero de vz q vai repetir, <= pq ele
    soma += n;       //(1+2+3+...n)
    n++;   //soma +1 em n e entra no while de novo
  }
  return quadradoDaSoma = soma**2 
  }

  get difference() {
    var diferenca;
    return diferenca = this.squareOfSum - this.sumOfSquares
    
  }
}
