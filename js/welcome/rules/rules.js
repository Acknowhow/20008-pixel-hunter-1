import RulesView from './rules-view';
import greetingElement from './../greeting/greeting';
import {showElement} from '../../utils';

const rules = new RulesView();


rules.onReturn = () => {
  showElement(greetingElement().element);
};

rules.onStart = () => {
  // showElement(startGame());
};

export default () => rules;
