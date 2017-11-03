// import {
//   initialGame,
//   tick,
//   answers,
//   getTypeNum,
//   getScreenNum,
//   getAnsKeys,
//   ansPush,
//   assignCurrentAnswer,
//   gameAnswers
// } from '../../data/hunt';
// import Clock from '../../data/game-timer';
// import greetingElement from '../../welcome/greeting/greeting';
// import {getResult} from "./game1-utils";
// import Game1View from './game1-view';
// import {showElement} from "../../utils";

// const changeScreen = (state) => {
//   const screen = new Game1View(state);
//   const timer = new Clock({
//
//     _state: state,
//     // Current screen
//     _screen: screen,
//     // Object assign function
//     _tick: tick
//
//   });
//
//   timer.start();
//
//   screen.overTime = () => {
//
//   };
//
//
//   const typeNum = getTypeNum(state.type);
//   const screenNum = getScreenNum(state.screen);
//
//   screen.onAnswer = (ans1, ans2) => {
//
//     // const timeLeft = timer.reset();
//
//     const win1 = ans1.isWin;
//     const win2 = ans2.isWin;
//
//     // Checking if both answers are correct
//     const win = getResult(win1, win2);
//
//     // Getting answer keys from data file
//     const ansKeys = getAnsKeys(answers);
//
//     // Mapping answer by type and current screen number
//     const mapAnsType = (tNum, sNum) => {
//       return ansKeys.map((type) => ({type, [sNum]: answers[type][sNum]})).filter((key) => {
//         return key.type === `${tNum}`;
//       });
//     };
//
//     const getAns = mapAnsType(typeNum, screenNum);
//
//     const [currentAnswer] = getAns;
//
//     // Assigning new Object and pushing answer into array
//     ansPush(gameAnswers, assignCurrentAnswer(currentAnswer, screenNum, win));
//
//
//   };
//
//   screen.onReturn = () => {
//     showElement(greetingElement.element);
//   };
//
//   return screen;
// }

// export default () => changeScreen(initialGame).element;


