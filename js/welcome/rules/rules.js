import rulesData from './rules-data';
import introElement from '../intro/intro';
import game1Element from './../../game/game1/game1-view.js';
import {LINK_BACK, createElement, showElement} from '../../utils';

const pKeys = Object.keys(rulesData.text.p);
const sliced = pKeys.slice(2, 6);

const [photoSrc, photoWidth, photoHeight] =
  Object.keys(rulesData.icon.photo).map((key) => rulesData.icon.photo[key]);

const [paintSrc, paintWidth, paintHeight] =
  Object.keys(rulesData.icon.paint).map((key) => rulesData.icon.paint[key]);

const [formInput, formButton] = Object.keys(rulesData.form).map((key) => rulesData.form[key]);

const rulesPrint = `<header class="header">${LINK_BACK}</header>
<div class="rules">
  <h1 class="rules__title">${rulesData.text.h.h1}</h1>
  
  <p class="rules__description">${pKeys[0]}
    <img src="${photoSrc}" width="${photoWidth}" height="${photoHeight}">${pKeys[1]}
    <img src="${paintSrc}" width="${paintWidth}" height="${paintHeight}" alt="">${sliced.map((key) => `${rulesData.text[key]}<br>`).join(``)}<br>${pKeys[6]}
  </p>
  
  <form class="rules__form">
    <input class="rules__input" type="${formInput.type}" placeholder="${formInput.placeholder}">
    <button class="rules__button  continue" type="${formButton.type}" disabled>${formButton.text}</button>
  </form>
</div>`;

const rules = () => {
  const el = createElement(rulesPrint);
  const rulesInput = el.querySelector(`.rules__input`);

  const rulesButton = el.querySelector(`.rules__button`);

  LINK_BACK.onclick = () => {
    showElement(introElement());
  };

  rulesInput.oninput = () => {
    rulesButton.removeAttribute(`disabled`);
  };
  rulesButton.onclick = () => {
    showElement(game1Element());
  };

  return el;
};

export default () => rules;
