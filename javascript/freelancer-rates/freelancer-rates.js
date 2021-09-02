
export function dayRate(ratePerHour) {
   var taxaPorDia = 8 * ratePerHour
  return taxaPorDia;
}

export function monthRate(ratePerHour, discount) {
  var taxaPorMes = ratePerHour * 8 * 22 - (ratePerHour *8* discount *22)
  return Math.round(taxaPorMes);
}
//orçamento = taxa por dia * desconto * dias trabalhados
//orçamento/(taxa por dia * desconto) = dias trabalhados
export function daysInBudget(budget, ratePerHour, discount) {
  var horasPorDia = 8
  var taxaPorDia = horasPorDia * ratePerHour -( horasPorDia * ratePerHour *discount)
  var diasTrabalhados = budget/taxaPorDia
  return Math.floor(diasTrabalhados);
}

/**
 * Applies a discount to the value
 *
 * @param {number} value
 * @param {number} percentage for example 20% written as 0.2
 * @returns {number} the discounted value
 */
function applyDiscount(value, percentage) {
  throw new Error('Implement the applyDiscount function');
}
