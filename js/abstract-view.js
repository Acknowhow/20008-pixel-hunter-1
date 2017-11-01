import footerDefault from 'footer/footer';

const createElement = (template, footer) => {
  const templateEl = document.createElement(`template`);
  const footerEl = document.createElement(`footer`);

  footerEl.classList.add(`footer`);
  templateEl.innerHTML = template;

  footerEl.innerHTML = footer;
  templateEl.content.appendChild(footerEl);

  return templateEl.content;
};

export default class AbstractView {

  get template() {
    throw new Error(`You have to define template for view`);
  }

  get markUp() {
    this.template();
  }

  render() {
    return createElement(this.markUp(), footerDefault());
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
