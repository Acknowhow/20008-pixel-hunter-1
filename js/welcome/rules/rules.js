import RulesView from './rules-view';
import GreetingView from './../greeting/greeting-view';
import Game1View from './../../game/game1/game1-view'
import {showElement} from '../../utils';
import {initialGame} from '../../data/hunt';

const rules = new RulesView();
const greeting = new GreetingView();
const game = new Game1View(initialGame);

rules.onReturn = () => {
  showElement(greeting.element);
};

rules.onStart = () => {
  showElement(game.element);
};

export default () => rules;
