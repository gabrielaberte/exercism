/*3x + 1
Dado n -> Se n for par, divida n por 2 para obter n / 2. 
Se n forímpar, multiplique n por 3 e some 1 para obter 3n + 1. 
Repita até chegar em 1
- Retorne o número de etapas necessárias para chegar a 1.
*/
export const steps = (numero) => {
    if (numero <= 0) 
    throw new Error('Only positive numbers are allowed');

    let passos = 0
    while (numero > 1) {
        if (numero%2 == 0) {numero = (numero/2)}
        else {numero = ((numero*3) + 1)};
        passos++;
    };
        return passos;
};
 
 
 
 
 
