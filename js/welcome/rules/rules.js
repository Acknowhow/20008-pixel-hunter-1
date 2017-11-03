import RulesView from './rules-view';
import data from './rules-data';

import greetingElement from './../greeting/greeting';
import {showElement} from '../../utils';

const rules = new RulesView(data);

console.log(greetingElement);
console.log(`rules`);

rules.onReturn = () => {
  showElement(greetingElement());
};

rules.onStart = () => {
  // showElement(startGame());
};

export default () => rules;
