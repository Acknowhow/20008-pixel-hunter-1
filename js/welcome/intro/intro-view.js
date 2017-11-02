import {introData} from './intro-data';
// import footer from '../../footer/footer';
import AbstractView from '../../abstract-view';

export default class IntroView extends AbstractView {
  constructor() {
    super();
  }

  getMarkUp() {
    return `<div id="main" class="central__content">
    <div class="intro">
      <h1 class="intro__asterisk">${introData.text.h1}</h1>
      <p class="intro__motto"><sup>${introData.text.sup}</sup>${introData.text.p1}</p>
    </div>
  </div>`;
  }

  bind() {

    const asterisk = this.element.querySelector(`.intro__asterisk`);

    asterisk.onclick = () => {
      this.onNext();
    };
  }

  onNext() {

  }
}

