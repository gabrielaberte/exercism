//new no teste quer dizer que ta chamando o construtor

export class ResistorColorTrio {

  constructor(cores) { //teste vai colocar um array em cores
    this.cores = cores; //fazendo isso da pra usar no get
    
  };

  get label() {
    var lista ={ //declarando a lista de cores
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      violet: 7,
      grey: 8,
      white: 9
    };  

    var numResistor = +('' + lista[this.cores[0]] + lista[this.cores[1]]); //igaul no color duo

    if (Number.isNaN(numResistor)) throw new Error ('invalid color') //vai dar NaN se for uma cor q n ta na lista

    var cor3 = 10**(lista[this.cores[2]]); //calculando os 0 da cor 3

    var numResistorCor3 = numResistor*cor3; //fazendo o acréscimo dos 0 da terceira cor nas outras 2


    if (numResistorCor3 > 0 && numResistorCor3 <= 999) { //colocando o resultado na frase pedida no teste
      return "Resistor value: " + numResistorCor3 + " ohms";
    }
    else if (numResistorCor3 > 999) {
      return "Resistor value: " + (numResistorCor3/1000) + " kiloohms"; //mudando a unidade dos numeros grandes
    }


  };


};
