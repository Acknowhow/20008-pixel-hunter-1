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
  // calculateScore,
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

  // const result = (ansResult) => {
  //   switch (ansResult) {
  //     case Result.WIN:
  //       return true;
  //     default:
  //       throw new Error(`Unknown result ${ansResult}`);
  //
  //   }
  // };
  //
  // const getNextScreen = () => {
  //
  // };

  // Only assigns lives into currentState
  // Uses response result from answerFunction
  const updateLives = (ansWins, gameState, livesLeft) => {
    if (livesLeft < 0) {
      throw new RangeError(`Can't set negative lives`);
    }

    switch (ansWins) {
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
    updateLives(isWin, state, state.lives);

    // Need to define which function assigns last
    // But calls calc or next function

    // /**/const answerResponse = assignAnswer(answer, screenNum, isWin);

    ansPush(gameAnswers, assignAnswer(answer, screenNum, isWin));
  };

  // on Return to greeting screen
  screen.onReturn = () => {
    showElement(greetingElement());
  };

  return screen;
};

export default () => changeScreen(initialGame);


