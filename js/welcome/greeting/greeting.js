import GreetingView from './greeting-view';
import rulesElement from './../rules/rules';
import {showElement} from "../../utils";

const greeting = new GreetingView();
greeting.onNext = () => {
  showElement(rulesElement().element);
};

export default () => greeting;
