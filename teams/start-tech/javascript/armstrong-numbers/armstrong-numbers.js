export const isArmstrongNumber = (numero) => {
    //transformando numero em array
    var numeroSeparado = numero.toString().match(/[0-9]/g); 

    let soma = 0 //somando cada elemento do array elevado ao tamanho do array
    for (let index = 0; index < numeroSeparado.length; index++) {
            soma += numeroSeparado[index]**numeroSeparado.length;
        };
    if (soma === numero) return true; //se a soma for igual o numero ele é armstrong
    else return false;

    };
   
   
   
   

   
    // const string = `${numero}`;
    // let soma = 0;
    // // Numero de Armstrong = cada elelemento elevado ao número de elementos
    // for (let i = 0; i < string.length; i++) {
    //     soma += parseInt(string[i]) ** string.length;
    // }
    // return numero === soma;
