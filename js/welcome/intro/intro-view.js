import {introData} from './intro-data';
import footer from '../../footer/footer';

// import greetingElement from '../greeting/greeting';
import AbstractView from '../../abstract-view';

export default class IntroView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<div id="main" class="central__content">
    <div class="intro">
      <h1 class="intro__asterisk">${introData.text.h1}</h1>
      <p class="intro__motto"><sup>${introData.text.sup}</sup>${introData.text.p1}</p>
    </div>
  </div>${footer()}`;
  }

  bind() {

    const asterisk = this.element.querySelector(`.intro__asterisk`);

    // const next = () => {
    //   showElement(greetingElement());
    // };

    // asterisk.addEventListener(`click`, next);
    // return el;

  }
}

