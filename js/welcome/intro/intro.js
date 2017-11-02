import Intro from './intro-view';
import data from './intro-data';
import {showElement} from "../../utils";
import greetingElement from '../greeting/greeting';

const intro = new Intro(data);

intro.onNext = () => {
  showElement(greetingElement().element);
};

export default () => intro;
