import {makeTemplate} from '../module-constructor.js';
import {introTemplate} from '../../main.js';
// import {makeGame1Template} from './game-1.js';
import {centralContainer} from "../module-constructor";
import {insertIntoContainer} from "../module-constructor";
const moduleRules = `<header class="header">
  <div class="header__back">
    <span class="back">
    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
    <img src="img/logo_small.svg" width="101" height="44">
    </span>
  </div>
</header>
<div class="rules">
  <h1 class="rules__title">Правила</h1>
  <p class="rules__description">Угадай 10 раз для каждого изображения фото 
  <img src="img/photo_icon.png" width="16" height="16"> или рисунок <img src="img/paint_icon.png" width="16" height="16" alt="">.<br>
  Фотографиями или рисунками могут быть оба изображения.<br>На каждую попытку отводится 30 секунд.<br>
  Ошибиться можно не более 3 раз.<br><br>
  Готовы?
  </p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
</div>`;
export const makeRulesTemplate = () => {
  const el = makeTemplate(moduleRules);
  // const rulesInput = centralContainer.querySelector(`.rules__input`);
  // const rulesButton = centralContainer.querySelector(`.rules__button`);
  // const linkBack = centralContainer.querySelector(`img[alt='Back']`);
  // console.log(linkBack);
  const switchBack = () => {
    centralContainer.removeEventListener(`click`, switchBack);
    insertIntoContainer(introTemplate, centralContainer);
  };
  // const enable = () => {
  //   if (rulesButton.hasAttribute(`disabled`)) {
  //     rulesButton.removeAttribute(`disabled`);
  //   }
  // };
  // const empty = () => {
  //   rulesInput.addEventListener(`input`, enable);
  // };
  // const next = (ev) => {
  //   if (ev.target === rulesButton) {
  //     rulesInput.removeEventListener(`input`, enable);
  //     rulesInput.removeEventListener(`keydown`, empty);
  //     rulesButton.removeEventListener(`click`, next);
  //     makeGame1Template();
  //   }
  // };
  // centralContainer.addEventListener(`keydown`, empty);
  // centralContainer.addEventListener(`click`, next);
  centralContainer.addEventListener(`click`, switchBack);
  return el;
};
