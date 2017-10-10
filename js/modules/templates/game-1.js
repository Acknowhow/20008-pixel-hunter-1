import {templateFooter} from './footer';
import {makeTemplate} from '../module-constructor.js';
import {makeIntroTemplate} from './intro';
import {makeGame2Template} from './game-2.js';
const moduleGame1 = `<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </span>
    </div>
    <h1 class="game__timer">NN</h1>
    <div class="game__lives">
      <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
    </div>
  </header>
  <div class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>`;
export const makeGame1Template = () => {
  makeTemplate(moduleGame1, templateFooter);
  // First options screen
  const opts1 = document.querySelector(`form > div:nth-child(1)`);
  // Second options screen
  const opts2 = document.querySelector(`form > div:nth-child(2)`);
  // Select all inputs in option1
  const answers1 = Array.from(document.querySelector(`.game__content`).children[0].querySelectorAll(`input`));
  // Select all inputs in option2
  const answers2 = Array.from(document.querySelector(`.game__content`).children[1].querySelectorAll(`input`));
  const linkBack = document.querySelector(`.header__back`);
  const switchBack = (ev) => {
    if (ev.currentTarget === linkBack) {
      linkBack.removeEventListener(`click`, switchBack);
      makeIntroTemplate();
    }
  };
  const checkArr = (a) => {
    return a.checked === true;
  };
  const checkOpt1 = () => {
    if (answers2.some(checkArr) === true) {
      opts1.removeEventListener(`click`, checkOpt1);
      opts2.removeEventListener(`click`, checkOpt2);
      makeGame2Template();
    }
  };
  const checkOpt2 = () => {
    if (answers1.some(checkArr) === true) {
      opts1.removeEventListener(`click`, checkOpt1);
      opts2.removeEventListener(`click`, checkOpt2);
      makeGame2Template();
    }
  };
  opts1.addEventListener(`click`, checkOpt1);
  opts2.addEventListener(`click`, checkOpt2);
  linkBack.addEventListener(`click`, switchBack);
};

