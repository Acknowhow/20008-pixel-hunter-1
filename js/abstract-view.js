import {createElement} from './utils';

export default class AbstractView {

  get footer() {

  }

  // Returns last template used
  get markup() {

    if (!this._markup) {

      this._markup = this.render();
      this.bindHandlers();
    }

    return this._markup;
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

    if (!this._element) {
      this._element = this.markup;

      // Because previous template has different handlers
      this.bind();
    }

    return this._element;

  }

  set element(el) {
    this._element = el;
  }
}
