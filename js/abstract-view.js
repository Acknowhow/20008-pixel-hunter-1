import {createElement} from './utils';

export default class AbstractView {


  get footer() {

  }
  getMarkUp() {

  }
  get template() {
    return this.getMarkUp();
  }

  render() {
    return createElement(this.template);
  }

  bind() {

  }

  bindHandlers() {

  }

  get element() {
    if (!this.getMarkUp) {
      this.getMarkUp = this.render();

      this.bind();
      this.bindHandlers();
    }

    return this.getMarkUp;
  }
}
