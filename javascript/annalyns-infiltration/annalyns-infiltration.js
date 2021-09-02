
export function canExecuteFastAttack(knightIsAwake) {
  if (knightIsAwake == true) { return false;}
  else return true;
};

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if ( knightIsAwake == true && archerIsAwake == true && prisonerIsAwake == true) { return true};
  if (knightIsAwake == false && archerIsAwake == false && prisonerIsAwake ==false) {return false};
  if (knightIsAwake == true || archerIsAwake == true || prisonerIsAwake ==true) {return true};
};

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (archerIsAwake == true) {return false}
  else if (prisonerIsAwake == false) {return false}
  else return true;
};

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  if (knightIsAwake == false && archerIsAwake == false && prisonerIsAwake ==false && petDogIsPresent == false) {return false}
  if (knightIsAwake == false && archerIsAwake == false && prisonerIsAwake ==false && petDogIsPresent == true) {return true}
  if (knightIsAwake == true && archerIsAwake == false && prisonerIsAwake ==true && petDogIsPresent == true) {return true}
  if (knightIsAwake == true && archerIsAwake == false && prisonerIsAwake ==true && petDogIsPresent == false) {return false}
  if (knightIsAwake == false && archerIsAwake ==true && prisonerIsAwake == false && (petDogIsPresent ==true || petDogIsPresent == false)) {return false}
  if (knightIsAwake == false && archerIsAwake == false && prisonerIsAwake ==true && (petDogIsPresent == true || petDogIsPresent ==false)) {return true}
  if (knightIsAwake == false && archerIsAwake == true && prisonerIsAwake ==true && (petDogIsPresent == false || petDogIsPresent == true)) {return false}
  if (knightIsAwake == true && archerIsAwake == false && prisonerIsAwake ==false && petDogIsPresent == false) {return false}
  if (knightIsAwake == true && archerIsAwake == false && prisonerIsAwake ==false && petDogIsPresent == true) {return true}
  if (knightIsAwake == true && archerIsAwake == true && prisonerIsAwake ==false && (petDogIsPresent == false || petDogIsPresent == true)) {return false}
  if (knightIsAwake == true && archerIsAwake == true && prisonerIsAwake ==true && (petDogIsPresent == false || petDogIsPresent ==true)) {return false}
};
