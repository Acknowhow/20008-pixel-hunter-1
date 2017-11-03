import GreetingView from './greeting-view';
import rulesElement from './../rules/rules';

import {showElement} from '../../utils';

const greetingElement = () => {
  const greeting = new GreetingView();

  greeting.onNext = () => {

    showElement(rulesElement());
  };

  return greeting;
};
export default greetingElement;
