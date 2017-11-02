import {rulesData} from './rules-data';
import footer from '../../footer/footer';

import AbstractView from "../../abstract-view";

const pKeys = Object.keys(rulesData.text.p);
const sliced = pKeys.slice(2, 6);

const [photoSrc, photoWidth, photoHeight] =
  Object.keys(rulesData.icon.photo).map((key) => rulesData.icon.photo[key]);

const [paintSrc, paintWidth, paintHeight] =
  Object.keys(rulesData.icon.paint).map((key) => rulesData.icon.paint[key]);

const [formInput, formButton] = Object.keys(rulesData.form).map((key) => rulesData.form[key]);

export default class RulesView extends AbstractView {
  constructor() {
    super();
  }

  get template() {

    return `<header class="header">
            <div class="header__back">
            
              <span class="back">
                <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
                <img src="img/logo_small.svg" width="101" height="44">
              </span>
              
            </div>
          </header>
          
          <div class="rules">
            <h1 class="rules__title">${rulesData.text.h.h1}</h1>
        
            <p class="rules__description">${rulesData.text.p[pKeys[0]]}
              <img src="${photoSrc}" width="${photoWidth}" height="${photoHeight}">${rulesData.text.p[pKeys[1]]}
              <img src="${paintSrc}" width="${paintWidth}" height="${paintHeight}" alt="">
              ${sliced.map((key) => `${rulesData.text.p[key]}<br>`).join(``)}<br>${rulesData.text.p[pKeys[6]]}
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
