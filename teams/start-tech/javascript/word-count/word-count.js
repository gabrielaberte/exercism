/* ('\w+) -> junta o ' com a proxima letra para incluir como palavra senao a letra ia ficar separada
(\w+) -> separa por palavras
* 0 ou mais do que foi colocado
------------------------------------------------------------------------------------------------
O método match() retorna uma correspondência entre uma string com uma expressão regular.
str.match(regexp)
*/

export const countWords = (frase) => {
  let fraseMinuscula = frase.toLowerCase() //transformando em letra minuscula
  let palavrasSeparadas = fraseMinuscula.match(/\w+('\w+)?/g);//separando a string por palavras

  let resultado = {}; //criando objeto vazio pro contador mandar os resultados
  for (const palavra of palavrasSeparadas) { //vai contar as palavras repetidas

      resultado[palavra] ??= 0; //se for nulo ou indefinido atribua 0 e manda pro obj
      resultado[palavra] += 1; //se não, adiciona 1 a cada palavra igual e manda pro obj
    
  };
  return resultado;
};
