import {changeView} from "../utils";
import {initialGame} from './../data/hunt';
import showIntro from './../welcome/welcome';
import showGame3 from './../game3/game3';
import Game2View from './game2-view';


const changeLevel = (state) => {
  const game2 = new Game2View(state);

  game2.onAnswer = (answer) => {
    if (answer.isWin) {
      changeView(showGame3());
    }
  };

  game2.onReturn = () => {
    changeView(showIntro());
  };
  return game2;

};


export default () => changeLevel(initialGame);
