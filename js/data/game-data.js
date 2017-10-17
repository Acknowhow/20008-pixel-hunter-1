import ImageData from 'image-data';
export const initialState = {
  score: 0,
  lives: 3,
  time: 0
};
export const setLives = (state, lives) => {
  initialState = Object.assign({}, state);
  initialState.lives = lives;
  return initialState;
};
export const Question1 = [
  {
    title: ImageData[0][`peoplePaint`][`Man bearded`],
    answers: [
      {photo: false},
      {paint: true}
    ]
  },
  {
    title: ImageData[0][`peoplePaint`][`Woman showered`],
    answers: [
      {photo: false},
      {paint: true}
    ]
  },
  {
    title: ImageData[0][`peoplePhoto`][`Morgan Freeman`],
    answers: [
      {photo: true},
      {paint: false}
    ]
  },
  {
    title: ImageData[0][`peoplePhoto`][`Grandma Indian`],
    answers: [
      {photo: true},
      {paint: false}
    ]
  },
  {
    title: ImageData[0][`animalPaint`][`Spider`],
    answers: [
      {photo: false},
      {paint: true}
    ]
  },
  {
    title: ImageData[0][`animalPhoto`][`Bumble bee`],
    answers: [
      {photo: true},
      {paint: false}
    ]
  },
  {
    title: ImageData[0][`itemPaint`][`Metal spheres`],
    answers: [
      {photo: false},
      {paint: true}
    ]
  },
  {
    title: ImageData[0][`fruitPhoto`][`Figs`],
    answers: [
      {photo: true},
      {paint: false}
    ]
  },
  {
    title: ImageData[0][`fruitPhoto`][`Apple Tree`],
    answers: [
      {photo: true},
      {paint: false}
    ]
  },
  {
    title: ImageData[0][`dishPaint`][`Plates`],
    answers: [
      {photo: false},
      {paint: true}
    ]
  },
];
export const Question2 = [
  {
    title: ImageData[0][`peoplePhoto`][`Girl homeless`],
    answers: [
      {photo: true},
      {paint: false}
    ]
  },
  {
    title: ImageData[0][`peoplePhoto`][`Ethiopian girl`],
    answers: [
      {photo: true},
      {paint: false}
    ]
  },
  {
    title: ImageData[0][`peoplePaint`][`Woman thoughtful`],
    answers: [
      {photo: false},
      {paint: true}
    ]
  },
  {
    title: ImageData[0][`peoplePaint`][`Girls sitting`],
    answers: [
      {photo: false},
      {paint: true}
    ]
  },
  {
    title: ImageData[0][`animalPaint`][`Lizard`],
    answers: [
      {photo: false},
      {paint: true}
    ]
  },
  {
    title: ImageData[0][`animalPhoto`][`Cheetah`],
    answers: [
      {photo: true},
      {paint: false}
    ]
  },
  {
    title: ImageData[0][`itemPhoto`][`Books abstract`],
    answers: [
      {photo: true},
      {paint: false}
    ]
  },
  {
    title: ImageData[0][`fruitPaint`][`Watermelon`],
    answers: [
      {photo: false},
      {paint: true}
    ]
  },
  {
    title: ImageData[0][`fruitPaint`][`Pomegranate`],
    answers: [
      {photo: false},
      {paint: true}
    ]
  },
  {
    title: ImageData[0][`dishPhoto`][`Mug`],
    answers: [
      {photo: true},
      {paint: false}
    ]
  },
];
