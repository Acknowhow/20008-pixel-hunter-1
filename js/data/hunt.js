export const welcomeState = {
  screen: 0
};


export const getScreen = (num) => screen[`screen-${num}`];

export const nextScreen = (state) => {
  const next = state.screen + 1;
  if (!getScreen(next)) {
    throw new RangeError(`Can't find screen ${next}`);
  }
  state = Object.assign({}, state);
  state.screen = next;
  return state;
};

export const screen = {
  'screen-0': `intro`,
  'screen-1': `greeting`,
  'screen-2': `rules`
}

// const CHECKED = `checked`;
// const UNCHECKED = ``;

// export const game1 = {
//   'level-0': {
//   }
// }
// export const setLives = (game, lives) => {
//   if (lives < 0) {
//     throw new RangeError(`Can't set negative lives`);
//   }
//   game = Object.assign({}, game);
//   game.lives = lives;
//   return game;
// };
//
// export const tick = (game) => {
//   game = Object.assign({}, game);
//   game.time++;
//   return game;
// };
