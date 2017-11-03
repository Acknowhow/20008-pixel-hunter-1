import Intro from './intro-view';
import data from './intro-data';

import {showElement} from '../../utils';
import greetingElement from '../greeting/greeting';

const intro = new Intro(data);

console.log(greetingElement());

intro.onNext = () => {
  console.log(greetingElement());
  showElement(greetingElement());
  console.log(greetingElement());
};

export default () => intro;
