import RulesView from './rules-view';
import GreetingView from './../greeting/greeting-view';
import {showElement} from "../../utils";

const rules = new RulesView();
const greeting = new GreetingView();

rules.onReturn = () => {
  showElement(greeting.element);
};

export default () => rules;
