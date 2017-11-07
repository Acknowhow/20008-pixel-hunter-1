import {
  initialGame,
  getScreen,
  // getTypeNum,
  // getScreenNum,
  // mapAnsType,
  Result
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
  const timer = new Clock(state, state.time, screen, tick);
  timer.start();

  // Gets current time from timer Object, assign to current state
  timer.currentTime = (_state) => {
    state = Object.assign({}, _state);

    return state;
  };

  // Get current type and screen
  // const typeKey = getTypeNum(state.type);
  // const screenKey = getScreenNum(state.screen);

  // Current answer object from db
  // const answerDefault = () => {
  //   return getAns(typeKey, screenKey);
  //
  // };

  // const [answer] = answerDefault();
  const Results = [];

  const setLives = (_state, livesLeft) => {
    if (livesLeft < 0) {
      throw new RangeError(`Can't set negative lives`);
    }

    state = Object.assign({}, _state);
    state.lives = livesLeft;
  };

  const updateLives = (win) => {
    switch (win) {

      case Result.WIN:
        Results.push(Result.NEXT_SCREEN);

        setLives(state, state.lives);
        break;

      default:
        try {
          setLives(state, state.lives - 1);

        } catch (life) {
          if (life instanceof RangeError) {
            Results.push(Result.GAME_OVER);

            setLives(state, initialGame.lives);
          }

        }
        break;
    }

    return Results;
  };

  // Gets win result
  const isWin = (ans1, ans2) => {
    return getWin(ans1.isWin, ans2.isWin);

  };

  // Updates lives based on result
  const response = (a1, a2) => {
    updateLives(isWin(a1, a2));

  };

  const nextType = (_state, gameType) => {
    const nxtT = gameType;

    if (!getScreen(nxtT, _state.screen)) {
      throw new RangeError(`Can't find type ${nxtT}`);

    }

    state = Object.assign({}, _state);
    state.type = nxtT;

    return state;
  };


  const switchType = (_state, gameType) => {
    try {
      nextType(_state, gameType + 1);

    } catch (thatType) {
      if (thatType instanceof RangeError) {
        Results.push(Result.GAME_WON);

      }
    }
    return Results;
  };

  const nxtType = (_state, gameType) => {
    return switchType(_state, gameType);
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

    return state;
  };

  const switchScreen = (_state, gameScreen) => {
    try { // Check if next screen exists
      nextScreen(_state, gameScreen + 1);
      Results.push(Result.NEXT_SCREEN);

    } catch (thatScreen) {
      if (thatScreen instanceof RangeError) {
        Results.push(Result.NEXT_TYPE);

        nextScreen(_state, initialGame.screen);
        nxtType(_state, _state.type);
      }

    }
    return Results;
  };

  const nxtScreen = (_state, gameScreen) => {
    return switchScreen(_state, gameScreen);

  };


  screen.onAnswer = (answer1, answer2) => {
    timer.reset();

    nxtScreen(state, state.screen);


    switch (response(answer1, answer2)) {

      case Results[Result.WIN]:
        showElement(changeScreen(state));
        break;

      case Results[Result.NEXT_SCREEN]:
        showElement(changeScreen(state));
        break;

      case Results[Result.GAME_OVER]:
        screen.onReturn = () => {
          showElement(greetingElement());
        };
        break;

    }

    // Result.NEXT_SCREEN = isNextScreen() ? Results.push(Result.NEXT_SCREEN) : nextGameType;
    // If result is winning, calculate score, if not, assign into answers array with win result

    // Updates answer object with score
    // const getAnsScore = calculateScore(currentAnswer, state, screenNum);
    //
    // ansPush(gameAnswers, assignCurrentAnswer(getAnsScore, screenNum, isWin));
  };

  // on Return to greeting screen
  screen.onReturn = () => {
    showElement(greetingElement());
  };

  return screen;
};

export default () => changeScreen(initialGame);


