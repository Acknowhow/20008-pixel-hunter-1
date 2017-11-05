import {
  initialGame,
  tick,
  getTypeNum,
  getScreenNum,
  mapAnsType,
  ansPush,
  assignCurrentAnswer,
  Result,
  gameAnswers,
  calculateScore,
} from '../../data/hunt';

import Clock from '../../data/game-timer';
import greetingElement from '../../welcome/greeting/greeting';

import Game1View from './game1-view';
import {getWin} from './../game-utils';
import {showElement} from '../../utils';


// Function maps default answer object by type and current screen
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

  // Current answer object from db with default properties
  // by type and screen number
  const extractCurrentAnswerDefault = () => {
    return getAns(typeNum, screenNum);

  };

  const [answer] = extractCurrentAnswerDefault();

  // const currentQuestionsObj = () => {
  //   getCurrentQuestionsScreen(state.type, state.screen);
  // };

  // const next = () => {
  //   return nextScreen(state);
  //
  // };


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

  // const estimateResult = (ans, scr) => {
  //   switch (ans)
  //     }

  const result = (ansResult) => {
    switch (ansResult) {
      case Result.WIN:
        return true;
      default:
        throw new Error(`Unknown result ${ansResult}`);

    }
  };

  // Get current time from timer Object, assign to current state
  timer.currentTime = (_state) => {
    state = Object.assign({}, _state);

    return state;
  };

  // screen.overTime = () => {
  //   // Estimate win value
  //   // Push into answers array
  //
  //   // Call Result switch (result)
  // };

  screen.onAnswer = (ans1, ans2) => {
    timer.reset();

    const isWin = getWin(ans1.isWin, ans2.isWin);

    console.log(isWin);


    // if (!isWin) {
    //
    //   result(assignCurrentAnswer(answer, screenNum, isWin));
    //   ansPush(gameAnswers, assignCurrentAnswer(answer, screenNum, isWin));
    // }
    //
    //
    //   ansPush(gameAnswers, assignCurrentAnswer(calculateScore(answer, state, screenNum), screenNum, isWin));
  };

  // Make
  screen.onReturn = () => {
    showElement(greetingElement());
  };

  return screen;
};

export default () => changeScreen(initialGame);


