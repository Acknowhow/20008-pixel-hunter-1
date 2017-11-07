export const initialGame = {
  type: 1,
  screen: 0,
  lives: 3,
  time: 30
};

export const currentState = {
  NEXT_SCREEN: null,
  NEXT_TYPE: null
};

export const getTypeNum = (tNum) => {
  return `type_${tNum}`;
};

export const getScreenNum = (sNum) => {
  return `screen_${sNum}`;
};

export const getScreen = (tNum, sNum) => question[`type_${tNum}`][`screen_${sNum}`];

const PAINT = `paint`;
const PHOTO = `photo`;

const PHOTO_1 = `photo_1`;
const PHOTO_2 = `photo_2`;

const PAINT_1 = `paint_1`;
const PAINT_2 = `paint_2`;


export const question = {
  'type_1': {
    'screen_0': {
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
    },
    'screen_1': {
      Option1: {
        image: {
          src: `http://i.imgur.com/PKtMBLt.jpg`,
          name: `Grandma Indian`,
          width: 468,
          height: 458
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
      },
      Option2: {
        image: {
          src: `http://i.imgur.com/aA3KkAW.jpg`,
          name: `Woman thoughtful`,
          width: 468,
          height: 458
        },
        question: {
          [PHOTO]: {
            name: `question2`,
            value: `photo`,
            isWin: false,
            text: `Фото`
          },
          [PAINT]: {
            name: `question2`,
            value: `paint`,
            isWin: true,
            text: `Рисунок`
          }
        }
      }
    }
  },
  'type_2': {
    'screen_0': {
      Option1: {
        image: {
          src: `http://i.imgur.com/jX3HIry.jpg`,
          name: `Ethiopian girl`,
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
    },
    'screen_1': {
      Option1: {
        image: {
          src: `http://i.imgur.com/27nbLSA.jpg`,
          name: `Girls sitting`,
          width: 705,
          height: 455
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
      }
    }
  },
  'type_3': {
    'screen_0': {
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
            isWin: false
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
    },
    'screen_1': {
      Option1: {
        title: {
          text: `Найдите рисунок среди изображений`
        },
        question: {
          [PHOTO_1]: {
            src: `http://i.imgur.com/Eb5bc8u.jpg`,
            name: `Books abstract`,
            alt: `Option 1`,
            width: 304,
            height: 455,
            isWin: false
          },
          [PAINT_1]: {
            src: `http://i.imgur.com/Sjjnuyi.jpg`,
            name: `Metal spheres`,
            alt: `Option 1`,
            width: 304,
            height: 455,
            isWin: true
          },
          [PHOTO_2]: {
            src: `http://i.imgur.com/Spk7kTG.jpg`,
            name: `Mug`,
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
            src: `http://i.imgur.com/l8J6vbh.jpg`,
            name: `Woman showered`,
            alt: `Option 2`,
            width: 304,
            height: 455,
            isWin: false
          },
          [PAINT_2]: {
            src: `http://i.imgur.com/mgbDqkB.jpg`,
            name: `Pomegranate`,
            alt: `Option 2`,
            width: 304,
            height: 455,
            isWin: false
          }
        }
      }
    }
  }
};

// GAME answers
const answer = {
  'type_1': {
    'screen_0': {
      isWin: null,
      lifeBonus: 0,
      speedBonus: 0,
      totalScore: 0
    },
    'screen_1': {
      isWin: null,
      lifeBonus: 0,
      speedBonus: 0,
      totalScore: 0
    },
  },
  'type_2': {
    'screen_0': {
      isWin: null,
      lifeBonus: 0,
      speedBonus: 0,
      totalScore: 0
    },
    'screen_1': {
      isWin: null,
      lifeBonus: 0,
      speedBonus: 0,
      totalScore: 0
    },
  },
  'type_3': {
    'screen_0': {
      isWin: null,
      lifeBonus: 0,
      speedBonus: 0,
      totalScore: 0,
    },
    'screen_1': {
      isWin: null,
      lifeBonus: 0,
      speedBonus: 0,
      totalScore: 0
    }
  }
};

// current game answers
export const Answers = [];

export const Results = {
  WIN: `win`,
  LOSE: `lose`,
  NONE: `none`
};

const getAnsKeys = (ans) => {
  return Object.keys(ans);
};

const ansKeys = getAnsKeys(answer);


export const mapAnsType = (tNum, sNum) => {
  return ansKeys.map((type) => ({type, [sNum]: answer[type][sNum]})).filter((key) => {

    return key.type === `${tNum}`;
  });
};

export const ansPush = (arr, obj) => {
  arr.push(obj);
};

export const assignAnswer = (ans, scr, win) => {
  ans = Object.assign({}, ans);

  ans[scr].isWin = win;
  return ans;
};

// SCORE calculation

export const SCORE_BASE = 100;

const calculateLifeBonus = (livesNum) => {
  if (livesNum > 2) {
    return 150;

  } else if (livesNum > 1) {
    return 100;

  } else if (livesNum > 0) {
    return 50;

  } else {
    return 0;
  }
};

const calculateSpeedBonus = (timeElapsed) => {
  if (timeElapsed > 20) {
    return 50;

  } else if (timeElapsed < 10) {
    return -50;

  } else {
    return 0;
  }
};

export const calculateScore = (ansObj, state, scrNum) => {
  let speedBonus = calculateSpeedBonus(state.time);

  ansObj = Object.assign({}, ansObj);

  ansObj[scrNum][`speedBonus`] = speedBonus;
  ansObj[scrNum][`totalScore`] = SCORE_BASE + speedBonus;

  return ansObj;
};


