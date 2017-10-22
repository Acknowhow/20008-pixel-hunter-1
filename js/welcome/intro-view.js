import ModuleView from '../view';

export default class IntroView extends ModuleView {
  constructor() {
    super();
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


  // bind() {
  //   const asterisk = this.element.querySelector(`.intro__asterisk`);
  //   asterisk.onclick = () => {
  //     this.onScreen(this.state);
  //   };
  // }

  // onScreen(state) {
  //   return state;
  // }

  // onProceed() {
  // }
}
