import {
  initialGame,
  tick,
  getTypeNum,
  getScreenNum,
  mapAnsType,
  ansPush,
  assignAnswer,
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

  // Gets current time from timer Object, assign to current state
  timer.currentTime = (_state) => {
    state = Object.assign({}, _state);

    return state;
  };

  // Get currents type and screen
  const typeNum = getTypeNum(state.type);
  const screenNum = getScreenNum(state.screen);

  // Current answer object from db
  const answerDefault = () => {
    return getAns(typeNum, screenNum);

  };

  const [answer] = answerDefault();

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


  // Assigns only into current state
  // Uses response result from answerFunction

  const updateLives = (ansResponse, gameState, livesLeft) => {
    if (livesLeft < 0) {
      throw new RangeError(`Can't set negative lives`);
    }

    switch (ansResponse) {
      case Result.WIN:

        gameState = Object.assign({}, gameState);
        gameState.lives = livesLeft;
        return gameState;

      case Result.LOSE:

        gameState = Object.assign({}, gameState);
        gameState.lives = livesLeft - 1;
        return gameState;

      case Result.NONE:

        gameState = Object.assign({}, gameState);
        gameState.lives = livesLeft - 1;
        return gameState;
    }

    return gameState;
  };


  screen.onAnswer = (ans1, ans2) => {
    timer.reset();

    const isWin = getWin(ans1.isWin, ans2.isWin);



    // Need to define which function assigns last
    // But calls calc or next funcion
    const answerResponse = assignAnswer(answer, screenNum, isWin);

    updateLives(answerResponse[screenNum].isWin, state, state.lives);


    // ansPush(gameAnswers, assignAnswer(answer, screenNum, isWin));


  };

  // Make
  screen.onReturn = () => {
    showElement(greetingElement());
  };

  return screen;
};

export default () => changeScreen(initialGame);


