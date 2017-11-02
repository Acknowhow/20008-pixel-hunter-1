import GreetingView from './greeting-view';
import rulesElement from './../rules/rules';

import data from './../greeting/greeting-data';
import {showElement} from '../../utils';

const greeting = new GreetingView(data);
greeting.onNext = () => {

  showElement(rulesElement().element);
};

export default () => greeting;
