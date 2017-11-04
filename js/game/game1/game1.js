import {
  initialGame,
  setLives,
  tick,
  nextScreen,
  getTypeNum,
  getScreenNum,
  getCurrentQuestionsScreen,
  mapAnsType,
  getAnsResultGame1,
  ansPush,
  assignCurrentAnswer,
  gameAnswers,
  calculateScore,
  Result
} from '../../data/hunt';

import Clock from '../../data/game-timer';
import greetingElement from '../../welcome/greeting/greeting';

import Game1View from './game1-view';
import {showElement} from '../../utils';

// Returns boolean answer result
const getWin = (w1, w2) => {
  return getAnsResultGame1(w1, w2);
};

// // Function maps default answer object by type and current screen
const getAns = (t, s) => {
  return mapAnsType(t, s);
};

const changeScreen = (state) => {

  const screen = new Game1View(state);
  const timer = new Clock(state, screen, tick);
  timer.start();

  // Get current type and screen value
  const typeNum = getTypeNum(state.type);
  const screenNum = getScreenNum(state.screen);

  const currentQuestionsObj = () => {
    getCurrentQuestionsScreen(state.type, state.screen);
  };

  const next = () => {
    return nextScreen(state);

  };
  // constants
  // - get currentScreenNum
  // - get currentTypeNum
  // - get nextScreen

  // - create view(state)
  // - create timer

  // - start timer

  // - on overTime or onAnswer
  // - assign time and lives
  // - assign bonus
  // - push in answers array

  // - create switch: win, lose, none, lost

  const result = (screenResult) => {

    switch (screenResult) {
      case Result.LOST:
        // sdf
        break;
      case Result.WIN:
        // sdfsdf
        break;

      case Result.LOSE:
        // sdfsdfdsf
        break;

      case Result.NONE:
        // sdfsdfsdf
        break;

      default:
        throw new Error(`Unknown result ${screenResult}`);

    }
  };

  // Get current time from timer Object, assign to current state
  timer.currentTime = (_state) => {
    state = Object.assign({}, _state);

    return state;
  };

  screen.overTime = () => {
    const livesLeft = () => {
      // If returns -1 then game is over
      return setLives(state, state.lives - 1);

    };
    // Estimate win value
    // Push into answers array

    // Call Result switch (result)
  };

  screen.onAnswer = (ans1, ans2) => {
    timer.reset();

    const isWin1 = ans1.isWin;
    const isWin2 = ans2.isWin;


    const isWin = getWin(isWin1, isWin2);

    const mappedCurrentAnswer = getAns(typeNum, screenNum);


    const [currentAnswer] = mappedCurrentAnswer;
    console.log(currentAnswer);

    // If result is winning, calculate score, if not, assign into answers array with win result
    // Updates answer object with score
    const getAnsScore = calculateScore(currentAnswer, state, screenNum);

    // Pushes game answer into array
    ansPush(gameAnswers, assignCurrentAnswer(getAnsScore, screenNum, isWin));

    // Calls result switch
    // result(isWin);
  };

  // Make

  screen.onReturn = () => {
    showElement(greetingElement());
  };

  return screen;
};

export default () => changeScreen(initialGame);


