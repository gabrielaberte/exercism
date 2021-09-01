
const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven(actualMinutesInOven) {
  var remainingMinutesInOven = EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
  return remainingMinutesInOven;
};

export function preparationTimeInMinutes(numberOfLayers) {
 var tempoDePreparacao = PREPARATION_MINUTES_PER_LAYER*numberOfLayers;
  return tempoDePreparacao;
};

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  var tempoTotalEmMinutos = (PREPARATION_MINUTES_PER_LAYER*numberOfLayers) + actualMinutesInOven;
  return tempoTotalEmMinutos;
  
};