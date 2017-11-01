import RulesView from './rules-view';
import GreetingView from './../greeting/greeting-view';
import startGame from './../../game/game1/game1';
import {showElement} from '../../utils';

const rules = new RulesView();
const greeting = new GreetingView();

rules.onReturn = () => {
  showElement(greeting.element);
};

rules.onStart = () => {
  showElement(startGame());
};

export default () => rules;
