import {makeIntroTemplate} from './intro';
import {makeGame1Template} from './game-1.js';
import {insertIntoContainer, makeTemplate} from '../module-constructor';

const moduleRules = `<header class="header">
  <div class="header__back">
    <span class="back">
    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
    <img src="img/logo_small.svg" width="101" height="44">
    </span>
  </div>
</header>
`;

export const makeRulesTemplate = () => {
  const el = makeTemplate(moduleRules);
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
