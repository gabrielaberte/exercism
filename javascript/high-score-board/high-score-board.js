
export function createScoreBoard() {
  var objScoreBoard = {
     "The Best Ever": 1000000
   };
   return objScoreBoard;
  }

export function addPlayer(scoreBoard, player, score) {
  let newscoreBoard = scoreBoard
  newscoreBoard[player] = score;
  return newscoreBoard
}


 export function removePlayer(scoreBoard, player) {
   let newscoreBoard = scoreBoard;
   delete newscoreBoard[player];
  return newscoreBoard;
 }


 export function updateScore(scoreBoard, player, points) {
  let newscoreBoard = scoreBoard;
  if (newscoreBoard.hasOwnProperty(player)) { scoreBoard[player] += points};
// newscoreBoard[player] = points;  ==> newscoreBoard[player] += points;
//   newscoreBoard[player] = points;
  return newscoreBoard;

 }

 export function applyMondayBonus(scoreBoard) {
   let newScoreBoard = scoreBoard
  for (const player in newScoreBoard) {
    newScoreBoard[player] += 100
 }return newScoreBoard;
}


 export function normalizeScore(params) {
   return params.normalizeFunction(params.score)
 }