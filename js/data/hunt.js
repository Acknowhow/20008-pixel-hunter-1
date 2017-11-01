export const initialGame = {
  type: 1,
  screen: 0,
  lives: 3,
  time: 0
};

export const getTypeNum = (num) => {
  return `type_${num}`;
};

export const getScreenNum = (num) => {
  return `screen_${num}`;
};

export const getNextScreen = (state) => {

};

export const ansPush = (arr, obj) => {
  arr.push(obj);
};

export const assignCurrentAnswer = (ans, scr, win) => {
  ans = Object.assign({}, ans);
  ans[scr].isWin = win;
  return ans;
};

export const getAnsKeys = (Answers) => {
  return Object.keys(Answers);
};

const PAINT = `paint`;
const PHOTO = `photo`;

const PHOTO_1 = `photo_1`;
const PHOTO_2 = `photo_2`;

const PAINT_1 = `paint_1`;
const PAINT_2 = `paint_2`;

export const gameAnswers = [];

export const questions = {
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
    }
  },
  'type_2': {
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
  },
  'type_3': {
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
    }
  }
};
export const answers = {
  'type_1': {
    'screen_0': {
      isWin: null,
      elapsedTime: 0,
      speedBonus: 0,
      speedPenalty: 0,
      lifeBonus: 0,
      bonusAdded: 0,
      bonusTotal: 0
    }
  },
  'type_2': {
    'screen_0': {
      isWin: null,
      elapsedTime: 0,
      speedBonus: 0,
      speedPenalty: 0,
      lifeBonus: 0,
      bonusAdded: 0,
      bonusTotal: 0
    }
  },
  'type_3': {
    'screen_0': {
      isWin: null,
      elapsedTime: 0,
      speedBonus: 0,
      speedPenalty: 0,
      lifeBonus: 0,
      bonusAdded: 0,
      bonusTotal: 0
    },
    'screen_1': {
      isWin: null,
      elapsedTime: 0,
      speedBonus: 0,
      speedPenalty: 0,
      lifeBonus: 0,
      bonusAdded: 0,
      bonusTotal: 0
    }
  }
};


