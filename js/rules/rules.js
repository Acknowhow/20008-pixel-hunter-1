import RulesView from './rules-view';

const rules = new RulesView();

export default () => rules;

// export const makeRulesTemplate = () => {
//   const el = makeTemplate(moduleRules);
//   const rulesInput = el.querySelector(`.rules__input`);
//
//   const rulesButton = el.querySelector(`.rules__button`);
//   const linkBack = el.querySelector(`img[alt='Back']`);
//
//   const switchBack = () => {
//     linkBack.removeEventListener(`click`, switchBack);
//     const introTemplate = makeIntroTemplate();
//     insertIntoContainer(introTemplate);
//   };
//
//   const enable = () => {
//     rulesButton.removeAttribute(`disabled`);
//   };
//
//   const next = () => {
//     rulesInput.removeEventListener(`input`, enable);
//     rulesButton.removeEventListener(`click`, next);
//
//     const game1Template = makeGame1Template();
//     insertIntoContainer(game1Template);
//   };
//   rulesInput.addEventListener(`input`, enable);
//   rulesButton.addEventListener(`click`, next);
//
//   linkBack.addEventListener(`click`, switchBack);
//   return el;
// };
