export const welcomeState = {
  level: 0
};

export const huntState = {
  level: 0,
  lives: 3,
  time: 0
};

export const setLives = (game, lives) => {
  if (lives < 0) {
    throw new RangeError(`Can't set negative lives`);
  }
  game = Object.assign({}, game);
  game.lives = lives;
  return game;
};

export const tick = (game) => {
  game = Object.assign({}, game);
  game.time++;
  return game;
};

export const getLevel = (num) => hunt[`level-${num}`];

export const nextLevel = (state) => {
  const next = state.level + 1;
  if (!getLevel(next)) {
    throw new RangeError(`Can't find level ${next}`);
  }
  state = Object.assign({}, state);
  state.level = next;
  return state;
};

const CHECKED = `checked`;
const UNCHECKED = ``;

// export const game1 = {
//   'level-0': {
//   }
// }
