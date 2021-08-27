//se a frase tiver todas as letras dar true, senão, dar false.

export const isPangram = (frase) => {
    if (frase === ('')) {return false};
  
  let fraseMinuscula = frase.toLowerCase()  //transformando em letra minuscula
  let silabasSeparadas = fraseMinuscula.match(/([a-z])/g);//separando a string por palavras
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  for (let i=0; i<alfabeto.length; i++){  // o laço for será executado para todas as letras do alfabeto
    if (!silabasSeparadas.includes(alfabeto[i])) return false; //aqui faz a análise se as letras do alfabeto estão
      }  //inclusas no silabas, se alguma tiver faltando vai dar falso, n pode ser ao contrario pq ele ia analisar
         //se tem um a e se tivesse ja ia retornar true.
  return true; 
};