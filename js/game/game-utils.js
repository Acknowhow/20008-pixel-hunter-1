
const getAnsResultGame1 = (a1Wins, a2Wins) => {
  if (a1Wins === `none` && a2Wins === `none`) {
    return `none`;

  } else if (a1Wins === true && a2Wins === true) {
    return `win`;

  } return `lose`;
};


// Returns boolean answer result
export const getWin = (w1, w2) => {
  return getAnsResultGame1(w1, w2);
};

// Is used for inner timer method
export const tick = (game) => {
  game = Object.assign({}, game);
  game.time--;
  return game;
};
// ////////////////////////////////////////////////////////////////////



