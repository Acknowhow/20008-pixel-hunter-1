export const initialWelcomeState = {
  screen: 0
};
export const initialGame = {
  level: 0,
  lives: 3,
  time: 0,
  score: 0
}

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

const PAINT = `paint`;
const PHOTO = `photo`;

export const Action = {
  PAINT, PHOTO
};

export const screen = {
  'screen-0': `intro`,
  'screen-1': `greeting`,
  'screen-2': `rules`
};

export const game1 = {
  'screen-0': {
    Option1: {
      image: {
        src: `http://i.imgur.com/5kcp9i0.jpg`,
        alt: `Man bearded`
      },
      question: {
        [PAINT]: {
          name: `question1`,
          value: `paint`,
          isPaint: true,
          text: `Фото`
        },
        [PHOTO]: {
          name: `question1`,
          value: `photo`,
          isPhoto: false,
          text: `Рисунок`
        }
      }
    },
    Option2: {
      image: {
        src: `http://i.imgur.com/8aNXpLk.jpg`,
        alt: `Morgan Freeman`
      },
      question: {
        [PAINT]: {
          name: `question1`,
          value: `paint`,
          isPaint: true,
          text: `Фото`
        },
        [PHOTO]: {
          name: `question1`,
          value: `photo`,
          isPhoto: true,
          text: `Рисунок`
        }
      }
    }
  }
};

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
