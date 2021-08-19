
export const gigasecond = (DataInicial) => {
  var DataEmMs = DataInicial.getTime(); //pegando o n de milisegundo da datainicial desde 1970
  var DataEmGiga = DataEmMs + 1e9 * 1000; //somando 1gigasegundo a data transformada
  return new Date(DataEmGiga);// transformando o numero em mili para data normal(para o objeto Date)
};
