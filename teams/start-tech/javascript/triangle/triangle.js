//Equilátero -> 3 lados iguais -- isosceles -> pelo menos 2 lados iguais -- Scalene -> 3 lados diferentes
//Degenerate_ triangle -> linha --
//todos os lados > 0
//soma dos comps de qualquer 2 lados deve ser maior ou igual ao comp do 3º 
// https://jsfiddle.net/uym8xt1L/
//Classes são funções especiais"

export class Triangle { //triangle é o nome da classe
   lados;               // lados vai ser atributo da classe; cria-se a var lados com valor undefined

   constructor(...lados) {  //constructor([argumentos]) { ... } para classes filhas
                            // o construtor padrão é contructor(...arguments){}. os ... são do spread
     this.lados = lados;   //this referencia que to chamando um atributo da classe Triangle,o lados
   }

  get isEquilateral() { //*método* get associa a propriedade de um objeto a uma função
                       //que será chamada quando tal propriedade é acessada
                       // função -> isEquilateral
    var ladoA = this.lados[0]; //pega o input (lado) da posição 0 e coloca na variavel 
    var ladoB = this.lados[1]; //usa var pq pode ser redeclarado?
    var ladoC = this.lados[2];

    return ladoA === ladoB && ladoB === ladoC && //lados iguais
           ladoA > 0 && ladoB > 0 && ladoC > 0   //lados maior que 0
   }

   get isIsosceles () { //*método*

    var ladoA = this.lados[0];
    var ladoB = this.lados[1];
    var ladoC = this.lados[2];

    return (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC)  && //pelo menos 2 lados iguais
           (ladoA > 0 && ladoB > 0 && ladoC > 0) &&  // lados > 0
           (ladoA + ladoB >= ladoC &&                // soma de 2 lados > 3º
           ladoA + ladoC >= ladoB &&
           ladoB + ladoC >= ladoA);
          
   }
   get isScalene (){
    
    var ladoA = this.lados[0];
    var ladoB = this.lados[1];
    var ladoC = this.lados[2];
    
    return (ladoA !== ladoB && ladoB !== ladoC )&& //lados diferentes
          (ladoA > 0 && ladoB > 0 && ladoC > 0) && //lados > 0
          (ladoA + ladoB >= ladoC &&              //soma de 2 lados > 3º
          ladoA + ladoC >= ladoB &&
          ladoB + ladoC >= ladoA);
   }
 get isDegenerate () { //soma de 2 lados é = ao 3º lado
       var ladoA = this.lados[0];
       var ladoB = this.lados[1];
       var ladoC = this.lados[2];
   
return (ladoA > 0 && ladoB > 0 && ladoC > 0) && 
(ladoA + ladoB == ladoC || ladoA + ladoC == ladoB || ladoB + ladoC == ladoA); //degenerado
}
 };
