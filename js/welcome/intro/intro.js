import Intro from './intro-view';
import data from './intro-data';

import {showElement} from '../../utils';
import greetingElement from '../greeting/greeting';

export const introElement = () => {
  const intro = new Intro(data);

  intro.onNext = () => {

    showElement(greetingElement());
  };

  return intro;
};

