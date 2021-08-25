/*O método match() retorna uma correspondência entre uma string 
com uma expressão regular. Um objeto de expressão regular. Se regexp não for uma RegExp, 
o mesmo será convertido para uma nova RegExp usando new RegExp(regexp).
Se você não fornecer nenhum parâmetro ao usar o método match(), 
você obterá um Array com uma string vazia: [""].

O método every() testa se todos os elementos do array passam pelo teste implementado 
pela função fornecida. */

export const translate = (RNA = '') => { //definindo q rna vai ser tipo string
  
  //criação do objeto translation condendo codigo:proteina
  let translation = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP',
  };

  //se rna diferente de string então retorna array vazia
  if (RNA !== '') {
    let rnaArr = RNA.match(/.{1,3}/g); //divide a leitura em 3 grupos com 3 letras cada
    let transArr = []; // cria uma variavel com array vazia p poder dar push dps

    // Usei .every para interromper ao atingir um códon determinado 
    //(.every testa se todos os elementos do array passam pelo teste stop)
    rnaArr.every((rna) => {
      if (translation[rna] === 'STOP') {
        return false;
        } else if (translation[rna] === undefined) {
    // Tras o erro se o codon n eh um RNA valido 
        throw new Error('Invalid codon');
        } else {
        transArr.push(translation[rna]); //adiciona a tradução no fim da array vazia
        return true;
      }
    });
       return transArr; // Retorna a array de proteinas traduzidas
      } else {
    // Se nao tiver RNA listado entao nao tem proteinas 
    return [];
  }
};