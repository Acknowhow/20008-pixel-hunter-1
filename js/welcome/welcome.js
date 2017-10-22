import {changeView} from "../utils";
import {initialWelcomeState, nextScreen} from "../data/hunt";
import IntroView from './welcome-view';
import {introTemp, greetingTemp, rulesTemp} from './welcome-utils';

const changeScreen = (state) => {
  const intro = new IntroView(state);
  switch (state.screen) {

    case 0:
      intro.template = introTemp;
      intro.bind = () => {
        const asterisk = intro.element.querySelector(`.intro__asterisk`);
        asterisk.onclick = () => {
          intro.onChange(state);
          changeView(changeScreen(nextScreen(state)));
        };
      };
      break;

    case 1:
      intro.template = greetingTemp;
      intro.bind = () => {
        const linkNext = intro.element.querySelector(`.greeting__continue`);
        linkNext.onclick = () => {
          intro.onChange(state);
          changeView(changeScreen(nextScreen(state)));
        };
      };
      break;

    case 2:
      intro.template = rulesTemp;
      intro.bind = () => {
        const linkBack = intro.element.querySelector(`img[alt='Back']`);
        const rulesButton = intro.element.querySelector(`.rules__button`);
        const rulesInput = intro.element.querySelector(`.rules__input`);
        linkBack.onclick = () => {
          changeView(changeScreen(initialWelcomeState));
        };
        rulesInput.oninput = () => {
          rulesButton.removeAttribute(`disabled`);
        };
      };
      break;

  }

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

  return intro;
};


export default () => changeScreen(initialWelcomeState);


