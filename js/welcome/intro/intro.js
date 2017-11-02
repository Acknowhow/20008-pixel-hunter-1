import Intro from './intro-view';
// import {showElement} from "../../utils";
// import greetingElement from '../greeting/greeting';

const intro = new Intro();

intro.onNext = () => {
  // showElement(greetingElement().element);
};

export default () => intro;
