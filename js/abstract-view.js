import {createElement} from './utils';

export default class AbstractView {

  get template() {
    throw new Error(`You have to define template for view`);
  }
  get footer() {

  }
  get markUp() {
    return this.template;
  }

  render() {
    return createElement(this.markUp);
  }

  bind() {

  }

  bindHandlers() {

  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
      this.bindHandlers();
    }
    return this._element;
  }

}
