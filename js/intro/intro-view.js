import ModuleView from '../view';

export default class IntroView extends ModuleView {
  get template() {
    return `<div id="main" class="central__content">
    <div class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>`.trim();
  }

  bind() {
    const asterisk = this.element.querySelector(`.intro__asterisk`);
    asterisk.onclick = () => {
      this.onProceed();
    };
  }
  onProceed() {
  }
}
