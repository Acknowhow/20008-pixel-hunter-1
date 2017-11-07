import {
  initialGame,
  Results,
  currentState,
  getScreen,
  getTypeNum,
  getScreenNum,
  mapAnsType,
  assignAnswer
} from '../../data/hunt';

import Clock from '../../data/game-timer';
import greetingElement from '../../welcome/greeting/greeting';
import Game1View from './game1-view';
import {getWin, tick} from './../game-utils';
import {showElement} from '../../utils';


// Function maps default answer object by type and current screen
// const getAns = (t, s) => {
//   return mapAnsType(t, s);
// };

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

  const getAns = (t, s) => {
    return mapAnsType(t, s);
  };

  const isNextScreen = (_state, scr) => {
    try {
      nextScreen(_state, scr);

    } catch (nxtScr) {
      if (nxtScr instanceof RangeError) {
        currentState.NEXT_SCREEN = `last`;

        state = Object.assign({}, state);
        state.screen = initialGame.screen;

        return state;
      }
    }
    return state;
  };

  const isNextType = (_state, tp) => {
    try {
      nextType(_state, tp);

    } catch (nxtTp) {
      if (nxtTp instanceof RangeError) {
        currentState.NEXT_TYPE = `last`;

        state = Object.assign({}, state);
        state.type = initialGame.type;

        return state;
      }
    }
    return state;
  };


  // Current answer object from db
  const answerDefault = () => {
    return getAns(typeKey, screenKey);

  };

  const answerIs = (win) => {
    return assignAnswer(answerDefault(), screenKey, win);

  };


  const setLives = (_state, livesLeft) => {
    if (livesLeft < 0) {
      throw new RangeError(`Can't set negative lives`);
    }

    state = Object.assign({}, _state);
    state.lives = livesLeft;
    return state;
  };

  const getCurrrentState = () => {
    return currentState;
  };


  const nextType = (_state, gameType) => {
    const nxtT = gameType;

    if (!getScreen(nxtT, _state.screen)) {
      throw new RangeError(`Can't find type ${nxtT}`);

    }

    currentState.NEXT_TYPE = `next`;
    state = Object.assign({}, _state);

    state.type = nxtT;
    return state;
  };


  const nextScreen = (_state, gameScreen) => {
    const nxtS = gameScreen;


    if (!getScreen(_state.type, nxtS)) {
      // First must check if there is next type
      // Here must launch calculate bonus function !!! Just a sample call, must return GAME_OVER (assigned)
      // game = questions[`type_${game.type + 1}`] ? nextType(game, game.type + 1) : Result.GAME_OVER;
      throw new RangeError(`Can't find level ${nxtS}`);

    }

    state = Object.assign({}, _state);
    state.screen = nxtS;
    currentState.NEXT_SCREEN = `next`;

    return state;
  };


  screen.onAnswer = (answer1, answer2) => {
    timer.reset();
    state = Object.assign({}, state);
    state.time = initialGame.time;

    switch (getWin(answer1.isWin, answer2.isWin)) {
      case Results.WIN:
        // Assign to lives state
        setLives(state, state.lives);
        isNextScreen(state, state.screen + 1);

        break;
      case Results.NONE:
        setLives(state, state.lives - 1);
        isNextScreen(state, state.screen + 1);

        break;
    }

    switch (currentState.NEXT_SCREEN) {
      case `next`:

        showElement(changeScreen(state));
        break;

      case `last`:
        isNextType(state, state.type + 1);

        break;
    }

    switch (currentState.NEXT_TYPE) {
      case `next`:

        showElement(changeScreen(state));
        break;

      case `last`:

        showElement(changeScreen(greetingElement()));
        break;
    }

  };


  // switch (response(answer1, answer2)) {
  //
  //   case Results[Result.WIN]:
  //     showElement(changeScreen(state));
  //     break;
  //
  //   case Results[Result.NEXT_SCREEN]:
  //     showElement(changeScreen(state));
  //     break;
  //
  //   case Results[Result.GAME_OVER]:
  //     screen.onReturn = () => {
  //       showElement(greetingElement());
  //     };
  //     break;
  //
  // }

  // If result is winning, calculate score, if not, assign into answer array with win result

  //   ansPush(gameAnswers, assignCurrentAnswer(answer, screenNum, isWin));

  // Updates answer object with score
  // const getAnsScore = calculateScore(currentAnswer, state, screenNum);
  //
  // ansPush(gameAnswers, assignCurrentAnswer(getAnsScore, screenNum, isWin));
  // on Return to greeting screen
  screen.onReturn = () => {
    showElement(greetingElement());
  };

  return screen;

};


export default () => changeScreen(initialGame);


