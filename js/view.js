import {createElement} from './utils';

export default class ModuleView {

  get template() {
    throw new Error(`You have to define template for view`);
  }

  render() {
    return createElement(this.template);
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }

}
