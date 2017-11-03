import RulesView from './rules-view';
import data from './rules-data';

import startGame from './../../game/game1/game1';
import greetingElement from './../greeting/greeting';
import {showElement} from '../../utils';

const rulesElement = () => {
  const rules = new RulesView(data);

  rules.onReturn = () => {
    showElement(greetingElement());
  };

  rules.onStart = () => {
    showElement(startGame());
  };

  return rules;
};

export default rulesElement;
