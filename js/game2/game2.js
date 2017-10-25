import {changeView} from "../utils";
import {initialGame} from './../data/hunt';
import showIntro from './../welcome/welcome';
import Game2View from './game2-view';


const changeLevel = (state) => {
  const game2 = new Game2View(state);

  game2.onAnswer = (answer) => {
    if (answer.isWin) {

    }
  }

  game2.onReturn = () => {
    changeView(showIntro());
  };
  return game2;

};


export default () => changeLevel(initialGame);
