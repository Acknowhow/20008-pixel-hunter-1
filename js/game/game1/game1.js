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
import {changeView} from "../../../materials/toComponentsTransition_01.10/utils";


// Function maps default answer object by type and current screen
const getAns = (t, s) => {
  return mapAnsType(t, s);
};

const changeScreen = (state) => {

  const screen = new Game1View(state);
  const timer = new Clock(state, state.time, screen, tick);
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
    // if (livesLeft - 1 < 0) {
    //
    //   Results.push(Result.GAME_OVER);
    //   return Results;
    // }
    gameState = Object.assign({}, gameState);
    gameState.lives = livesLeft;
    return gameState;
  };

  const isWin = (ans1, ans2) => {
    return getWin(ans1.isWin, ans2.isWin);
  };

  screen.onAnswer = (answer1, answer2) => {
    timer.reset();

    switch (isWin(answer1, answer2)) {

      case `win`:
        Results.push(Result.WIN);
        changeView(changeScreen(updateLives(`win`, state, state.lives)));
        break;

      case `lose`:
        Results.push(Result.LOSE);
        changeView(changeScreen(updateLives(`lose`, state, state.lives - 1)));
        break;

      case `none`:
        Results.push(Result.NONE);
        changeView(changeScreen(updateLives(`none`, state, state.lives - 1)));
        break;
    }

    // Result.NEXT_SCREEN = isNextScreen() ? Results.push(Result.NEXT_SCREEN) : nextGameType;

    // If result is winning, calculate score, if not, assign into answers array with win result
    // Updates answer object with score
    // const getAnsScore = calculateScore(currentAnswer, state, screenNum);
    //
    //
    // // Pushes game answer into array
    // ansPush(gameAnswers, assignCurrentAnswer(getAnsScore, screenNum, isWin));
  };

  // on Return to greeting screen
  screen.onReturn = () => {
    showElement(greetingElement());
  };

  return screen;
};

export default () => changeScreen(initialGame);


