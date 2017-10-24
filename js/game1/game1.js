import {initialGame} from './../data/hunt';
import Game1View from './game1';

const changeLevel = (state) => {
  const game1 = new Game1View(state);
  return game1;
};


export default () => changeLevel(initialGame);
