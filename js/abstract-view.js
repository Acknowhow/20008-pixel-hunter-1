import {createElement} from './utils';

export default class AbstractView {

  get footer() {

  }

  // Returns last template used
  get markup() {

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

    if (!this._element) {
      this._element = this.render();

      // Because previous template has different handlers
      this.bindHandlers();
      return this._element;
    }

    this.bind();
    return this._element;
  }
}
