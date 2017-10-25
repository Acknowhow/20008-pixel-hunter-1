export const initialWelcomeState = {
  screen: 0
};
export const initialGame = {
  screen: 0,
  level: 0,
  lives: 3,
  time: 0,
  score: 0
};

export const getWelcomeScreen = (num) => welcomeScreen[`screen-${num}`];

export const getGame1Screen = (num) => game1[`screen-${num}`];
export const getGame2Screen = (num) => game2[`screen-${num}`];
export const getGame3Screen = (num) => game3[`screen-${num}`];

export const nextScreen = (state) => {
  const next = state.screen + 1;

  if (!getWelcomeScreen(next)) {
    throw new RangeError(`Can't find screen ${next}`);
  }

  state = Object.assign({}, state);
  state.screen = next;

  return state;
};

const PAINT = `paint`;
const PHOTO = `photo`;

const PHOTO_1 = `photo_1`;
const PHOTO_2 = `photo_2`;

const PAINT_1 = `paint_1`;
const PAINT_2 = `paint_2`;

export const Action = {
  PAINT, PHOTO
};

export const welcomeScreen = {
  'screen-0': `intro`,
  'screen-1': `greeting`,
  'screen-2': `rules`
};

export const game1 = {
  'screen-0': {
    Option1: {
      image: {
        src: `http://i.imgur.com/5kcp9i0.jpg`,
        name: `Man bearded`,
        width: 468,
        height: 458
      },
      question: {
        [PHOTO]: {
          name: `question1`,
          value: `photo`,
          isWin: false,
          text: `Фото`
        },
        [PAINT]: {
          name: `question1`,
          value: `paint`,
          isWin: true,
          text: `Рисунок`
        }
      }
    },
    Option2: {
      image: {
        src: `http://i.imgur.com/8aNXpLk.jpg`,
        name: `Morgan Freeman`,
        width: 468,
        height: 458
      },
      question: {
        [PHOTO]: {
          name: `question2`,
          value: `photo`,
          isWin: true,
          text: `Фото`
        },
        [PAINT]: {
          name: `question2`,
          value: `paint`,
          isWin: false,
          text: `Рисунок`
        }
      }
    }
  }
};

export const game2 = {
  'screen-0': {
    Option1: {
      image: {
        src: `http://i.imgur.com/PKtMBLt.jpg`,
        name: `Grandma Indian`,
        width: 705,
        height: 455
      },
      question: {
        [PHOTO]: {
          name: `question1`,
          value: `photo`,
          isWin: true,
          text: `Фото`
        },
        [PAINT]: {
          name: `question1`,
          value: `paint`,
          isWin: false,
          text: `Рисунок`
        }
      }
    }
  }
};


export const game3 = {
  'screen-0': {
    Option1: {
      title: {
        text: `Найдите рисунок среди изображений`
      },
      question: {
        [PHOTO_1]: {
          src: `http://i.imgur.com/LWFCQSK.jpg`,
          name: `Cheetah`,
          alt: `Option 1`,
          width: 304,
          height: 455,
          isWin: true
        },
        [PAINT_1]: {
          src: `http://i.imgur.com/FA4D3kO.jpg`,
          name: `Lizard`,
          alt: `Option 1`,
          width: 304,
          height: 455,
          isWin: true
        },
        [PHOTO_2]: {
          src: `http://i.imgur.com/y9cN0UD.jpg`,
          name: `Figs`,
          alt: `Option 1`,
          width: 304,
          height: 455,
          isWin: false
        }
      }
    },
    Option2: {
      title: {
        text: `Найдите изображение среди рисунков`
      },
      question: {
        [PHOTO_1]: {
          src: `http://i.imgur.com/OI49pzH.jpg`,
          name: `Bumble bee`,
          alt: `Option 2`,
          width: 304,
          height: 455,
          isWin: true
        },
        [PAINT_1]: {
          src: `http://i.imgur.com/Sjjnuyi.jpg`,
          name: `Metal spheres`,
          alt: `Option 2`,
          width: 304,
          height: 455,
          isWin: false
        },
        [PAINT_2]: {
          src: `http://i.imgur.com/rvDgwaA.jpg`,
          name: `Watermelon`,
          alt: `Option 2`,
          width: 304,
          height: 455,
          isWin: false
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
