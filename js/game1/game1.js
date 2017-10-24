import {changeView} from "../utils";
import {initialGame} from './../data/hunt';
import showIntro from './../welcome/welcome';
import Game1View from './game1-view';

const changeLevel = (state) => {
  const game1 = new Game1View(state);

  game1.onReturn = () => {
    changeView(showIntro());
  };
  return game1;

};


export default () => changeLevel(initialGame);
