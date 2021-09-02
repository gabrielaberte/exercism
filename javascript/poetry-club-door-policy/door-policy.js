// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.
//
// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./door-policy.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Good luck with that door policy!

import { workerData } from "worker_threads";

export function frontDoorResponse(blurb) {
  var primeiraLetra = blurb[0]
  return primeiraLetra
};

export function backDoorResponse(blurb) {
  //Caracteres em uma string são indexados da esquerda para a direita. O índice do primeiro caractere é 0 (zero), 
  //e o índice do último caractere em uma string declarada como stringName é stringName.length - 1
  var tirandoEspaco = blurb.trim()
  var numeroDeLetras = tirandoEspaco.length
  var ultimaLetra = tirandoEspaco[numeroDeLetras - 1]
  return ultimaLetra
}

/**
 * Capitalizes a word, meaning only the first character is a capital, and the
 * remaining letters are lower case.
 *
 * @param {string} word
 * @returns {string}
 */
function capitalize(word) {
var letraMaiuscula = frontDoorResponse(word).toUpperCase();
var capitalized = letraMaiuscula + word.slice(1).toLowerCase();
return capitalized
}

export function frontDoorPassword(responses) {
  return capitalize(responses)
}

export function backDoorPassword(responses) {
  return "" + capitalize(responses) + ", please"
}
