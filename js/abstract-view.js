import {createElement} from './utils';

export default class AbstractView {

  get footer() {

  }

  // Returns last template used
  get markup() {

    if (!this._markup) {
      this._markup = this.render();
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

  get element() {

    if (!this._element) {
      this._element = this.markup;

      // Because previous template has different handlers
      this.bind();
    }

    return this._element;

  }
}
