import {
  initialGame,
  tick,
  getTypeNum,
  getScreenNum,
  nextType,
  nextScreen,
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

  // Get current type and screen
  const typeKey = getTypeNum(state.type);
  const screenKey = getScreenNum(state.screen);

  // Current answer object from db
  const answerDefault = () => {
    return getAns(typeKey, screenKey);

  };

  const [answer] = answerDefault();

  const Results = [];


  const isNextType = () => {
    return nextType(state, state.type);
  };

  const isNextScreen = () => {
    return nextScreen(state, state.screen);
  };


  // Updates type if there is one in current answer type
  const nextGameType = () => {
    return isNextType() ? Results.push(Result.NEXT_TYPE) : Results.push(Result.GAME_OVER);
  };

  const updateLives = (ansWins, gameState, livesLeft) => {
    if (livesLeft - 1 < 0) {

      Results.push(Result.GAME_OVER);
      return Results;
    }

    switch (ansWins) {
      case Result.WIN:

        Results.push(Result.WIN);
        gameState = Object.assign({}, gameState);
        gameState.lives = livesLeft;
        return gameState;

      case Result.LOSE:

        Results.push(Result.LOSE);
        gameState = Object.assign({}, gameState);
        gameState.lives = livesLeft - 1;
        return gameState;

      case Result.NONE:

        Results.push(Result.NONE);
        gameState = Object.assign({}, gameState);
        gameState.lives = livesLeft - 1;
    }

    return gameState;
  };


  screen.onAnswer = (ans1, ans2) => {
    timer.reset();

    const isWin = getWin(ans1.isWin, ans2.isWin);
    updateLives(isWin, state, state.lives);

    Result.NEXT_SCREEN = isNextScreen() ? Results.push(Result.NEXT_SCREEN) : nextGameType;


    console.log(Results);
  };

  // on Return to greeting screen
  screen.onReturn = () => {
    showElement(greetingElement());
  };

  return screen;
};

export default () => changeScreen(initialGame);


