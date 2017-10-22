import ModuleView from '../view';

export default class IntroView extends ModuleView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return this.temp.trim();
  }

  set template(tmp) {
    this.temp = tmp;
  }

  bind() {

  }

  onChange() {

  }
}


