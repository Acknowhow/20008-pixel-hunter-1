import {changeView} from "../utils";
import {initialGame} from './../data/hunt';
import showIntro from './../welcome/welcome';
import Game3View from './game3-view';

const changeLevel = (state) => {
  const game3 = new Game3View(state);


  game3.onReturn = () => {
    changeView(showIntro());
  };
  return game3;

};


export default () => changeLevel(initialGame);
