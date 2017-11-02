import RulesView from './rules-view';
import data from './rules-data';

import greetingElement from './../greeting/greeting';
import {showElement} from '../../utils';

const rules = new RulesView(data);

rules.onReturn = () => {
  showElement(greetingElement().element);
};

rules.onStart = () => {
  // showElement(startGame());
};

export default () => rules;
