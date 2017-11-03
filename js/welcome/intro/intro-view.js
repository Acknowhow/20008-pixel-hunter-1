import footer from '../../footer/footer';
import AbstractView from '../../abstract-view';

export default class IntroView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return `<div id="main" class="central__content">
    <div class="intro">
      <h1 class="intro__asterisk">${this.data.text.h1}</h1>
      <p class="intro__motto"><sup>${this.data.text.sup}</sup>${this.data.text.p1}</p>
    </div>
  </div>${footer()}`;
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

