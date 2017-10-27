import rulesData from './rules/rules-data';
import {makeIntroTemplate} from '../intro/intro';
import {makeGame1Template} from './game-1.js';
import {LINK_BACK, createElement, showElement} from '../../utils';

const pKeys = Object.keys(rulesData.text.p);
const sliced = pKeys.slice(2, 6);

const [photoSrc, photoWidth, photoHeight] =
  Object.keys(rulesData.icon.photo).map((key) => rulesData.icon.photo[key]);

const [paintSrc, paintWidth, paintHeight] =
  Object.keys(rulesData.icon.paint).map((key) => rulesData.icon.paint[key]);

const [formInput, formButton] = Object.keys(rulesData.form).map((key) => rulesData.form[key]);

const moduleRules = `<header class="header">${LINK_BACK}</header>
<div class="rules">
  <h1 class="rules__title">${rulesData.text.h.h1}</h1>
  <p class="rules__description">${pKeys[0]}
    <img src="${photoSrc}" width="${photoWidth}" height="${photoHeight}">${pKeys[1]}
    <img src="${paintSrc}" width="${paintWidth}" height="${paintHeight}" alt="">${sliced.map((key) => `
    ${pKeys.text.p[key]}<br>`).join(``)}<br>${pKeys[6]}
  </p>
  <form class="rules__form">
    <input class="rules__input" type="${formInput.type}" placeholder="${formInput.placeholder}">
    <button class="rules__button  continue" type="${formButton.type}" disabled>${formButton.text}</button>
  </form>
</div>`;

export const makeRulesTemplate = () => {
  const el = createElement(moduleRules);
  const rulesInput = el.querySelector(`.rules__input`);

  const rulesButton = el.querySelector(`.rules__button`);
  const linkBack = el.querySelector(`img[alt='Back']`);

  const switchBack = () => {
    linkBack.removeEventListener(`click`, switchBack);

    const introTemplate = makeIntroTemplate();
    insertIntoContainer(introTemplate);

  };

  const enable = () => {
    rulesButton.removeAttribute(`disabled`);
  };

  const next = () => {
    rulesInput.removeEventListener(`input`, enable);
    rulesButton.removeEventListener(`click`, next);

    const game1Template = makeGame1Template();
    insertIntoContainer(game1Template);
  };
  rulesInput.addEventListener(`input`, enable);
  rulesButton.addEventListener(`click`, next);

  linkBack.addEventListener(`click`, switchBack);
  return el;
};
