
export const classify = (numero) => {
    if (numero <= 0) // erro para numeros menores ou iguais a 0
        throw new Error('Classification is only possible for natural numbers.');
    
    let somaDosDivisiveis = 0 //soma começando no 0
    for (let n = 1; n < numero; n++) {
        if (numero % n === 0) {//ve se o resto é zero
         somaDosDivisiveis += n } //se for 0 o resto soma o n no somaDosDivisiveis
    };

    if (somaDosDivisiveis == numero) return 'perfect';
    if (somaDosDivisiveis > numero) return 'abundant';
    if (somaDosDivisiveis < numero) return 'deficient';
};





//     if (numeroTestado < 1)
//         throw new Error('Classification is only possible for natural numbers.');
//     // Caso extremo só divisível por ele
//     if (numeroTestado === 1)
//         return 'deficient'

//     // Cria uma array com o tamanho enviado - 1, sem o zero 
//     const divisores = [...Array(numeroTestado).keys()].slice(1);

//     // Verifica quais números podem dividir o número testado e os soma
//     const soma = divisores.
//     reduce((s, n) => s += !(numeroTestado % n) ? n : 0);

//     if (soma === numeroTestado && numeroTestado > 5) return 'perfect';
//     console.log(soma);
//     if (soma > numeroTestado) return 'abundant';
//     if (soma < numeroTestado) return 'deficient';
// };