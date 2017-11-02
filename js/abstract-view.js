import {createElement} from './utils';

export default class AbstractView {


  get footer() {

  }

  // Returns last template used
  getMarkUp() {
    return this.render();

  }

  get template() {
    throw new RangeError(`You have to define template first`);

  }

  render() {
    return createElement(this.template);

  }

  bind() {

  }

  bindHandlers() {

  }

  get element() {
    this._element = this.getMarkUp();
    this.bind();

    if (!this._element) {
      this._element = this.render();

      this.bind();
      return this._element;
    }

    this.bindHandlers();
    return this._element;
  }
}
