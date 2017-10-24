import {changeView} from "../utils";
import {initialWelcomeState, nextScreen} from "../data/hunt";
import IntroView from './welcome-view';
import {introTemp, greetingTemp, rulesTemp} from './welcome-utils';
import startGame from './../game1/game1';

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
        rulesButton.onclick = () => {
          changeView(startGame());
        };
      };
      break;

  }

  return intro;
};


export default () => changeScreen(initialWelcomeState);


