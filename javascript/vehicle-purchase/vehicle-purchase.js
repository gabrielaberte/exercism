// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  if (kind== 'car' || kind == 'truck') {return true}
  else return false;
}

export function chooseVehicle(option1, option2) {
  if (option1 < option2) {return `${option1} is clearly the better choice.`}
  else {return `${option2} is clearly the better choice.`};
}

export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {return originalPrice*0.80}
  else if (age >= 3 && age <= 10) {return originalPrice*0.70}
  else return originalPrice*0.50;
}
