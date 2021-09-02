
export function getItem(cards, position) {
  return cards[position]
}


export function setItem(cards, position, replacementCard) {
  var troca = cards.splice(position, 1, replacementCard);
  return cards;
}

export function insertItemAtTop(cards, newCard) {
  var push = cards.push(newCard);
  return cards
}

export function removeItem(cards, position) {
  var remove = cards.splice(position, 1);
  return cards;
}

export function removeItemFromTop(cards) {
  var remove2 = cards.pop();
  return cards;
}

export function insertItemAtBottom(cards, newCard) {
  var colocandoNoFim = cards.unshift(newCard);
  return cards;
}

export function removeItemAtBottom(cards) {
  var tirandoDoFim = cards.shift();
  return cards;
}

export function checkSizeOfStack(cards, stackSize) {
  var tamanho = cards.length
  if (tamanho == stackSize) return true
  else return false;
}
