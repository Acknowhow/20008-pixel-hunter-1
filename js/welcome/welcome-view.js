import ModuleView from '../view';

export default class IntroView extends ModuleView {
  constructor(state) {
    super();
    this.state = state;
  }
  // this.bnd = bnd;
  // this.bnd.el = bnd.element; // element
  // this.bnd.class = bnd.class; // element class


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
