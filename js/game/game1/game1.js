import {
  initialGame,
  tick,
  answers,
  getTypeNum,
  getScreenNum,
  getAnsKeys,
  getAnsResult,
  ansPush,
  assignCurrentAnswer,
  gameAnswers,
  calculateScore,
  Result
} from '../../data/hunt';
import Clock from '../../data/game-timer';

import greetingElement from '../../welcome/greeting/greeting';
import Game1View from './game1-view';
import {showElement} from "../../utils";

const changeScreen = (state) => {

  const screen = new Game1View(state);
  const timer = new Clock(state, screen, tick);

  const typeNum = getTypeNum(state.type);
  const screenNum = getScreenNum(state.screen);

  timer.start();

  // Gets current time from timer, assigns to current state
  timer.currentTime = (_state) => {
    state = Object.assign({}, _state);
    return state;
  };

  screen.overTime = () => {
    const timeZero = state.time;
    console.log(timeZero);

  };

  screen.onAnswer = (ans1, ans2) => {

    timer.reset();

    const win1 = ans1.isWin;
    const win2 = ans2.isWin;

    // Checking if both answers are correct
    const win = getAnsResult(win1, win2);

    // Getting answer keys from data file
    const ansKeys = getAnsKeys(answers);

    // Mapping answer by type and current screen number
    const mapAnsType = (tNum, sNum) => {
      return ansKeys.map((type) => ({type, [sNum]: answers[type][sNum]})).filter((key) => {
        return key.type === `${tNum}`;
      });
    };

    // Gets answer with win result
    const getAns = mapAnsType(typeNum, screenNum);
    const [currentAnswer] = getAns;


    // Updates answer object with score
    const getAnsScore = calculateScore(currentAnswer, state, screenNum);

    console.log(getAnsScore);


    // Assigning new Object and pushing answer into array
    ansPush(gameAnswers, assignCurrentAnswer(currentAnswer, screenNum, win));

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
  // -


  screen.onReturn = () => {
    showElement(greetingElement());
  };

  return screen;
};

export default () => changeScreen(initialGame);


