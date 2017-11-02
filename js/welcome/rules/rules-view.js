import footer from '../../footer/footer';

import AbstractView from "../../abstract-view";

export default class RulesView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {

    const pKeys = Object.keys(this.data.text.p);
    const sliced = pKeys.slice(2, 6);

    const [photoSrc, photoWidth, photoHeight] =
      Object.keys(this.data.icon.photo).map((key) => this.data.icon.photo[key]);

    const [paintSrc, paintWidth, paintHeight] =
      Object.keys(this.data.icon.paint).map((key) => this.data.icon.paint[key]);

    const [formInput, formButton] = Object.keys(this.data.form).map((key) => this.data.form[key]);

    return `<header class="header">
            <div class="header__back">
            
              <span class="back">
                <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
                <img src="img/logo_small.svg" width="101" height="44">
              </span>
              
            </div>
          </header>
          
          <div class="rules">
            <h1 class="rules__title">${this.data.text.h.h1}</h1>
        
            <p class="rules__description">${this.data.text.p[pKeys[0]]}
              <img src="${photoSrc}" width="${photoWidth}" height="${photoHeight}">${this.data.text.p[pKeys[1]]}
              <img src="${paintSrc}" width="${paintWidth}" height="${paintHeight}" alt="">
              ${sliced.map((key) => `${this.data.text.p[key]}<br>`).join(``)}<br>${this.data.text.p[pKeys[6]]}
            </p>
        
            <form class="rules__form">
            <form class="rules__form">
            
              <input class="rules__input" type="${formInput.type}" placeholder="${formInput.placeholder}">
              <button class="rules__button  continue" type="${formButton.type}" disabled>${formButton.text}</button>
              
            </form>      
          </div>${footer()}`.trim();
  }

  bind() {
    const linkBack = this._element.querySelector(`.header__back`);

    const rulesInput = this._element.querySelector(`.rules__input`);
    const rulesButton = this._element.querySelector(`.rules__button`);

    linkBack.onclick = () => {
      this.onReturn();
    };

    rulesInput.oninput = () => {
      rulesButton.removeAttribute(`disabled`);
    };

    rulesButton.onclick = () => {
      this.onStart();
    };

  }

  onStart() {

  }

  onReturn() {

  }

}
