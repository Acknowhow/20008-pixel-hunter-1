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
        const element = intro.element.querySelector(`.intro__asterisk`);
        element.onclick = () => {
          intro.onChange(state);
          changeView(changeScreen(nextScreen(state)));
        };
      };
      break;
    case 1:
      intro.template = greetingTemp;
      intro.bind = () => {
        const element = intro.element.querySelector(`.greeting__continue`);
        element.onclick = () => {
          intro.onChange(state);
          changeView(changeScreen(nextScreen(state)));
        };
      };
      break;
    case 2:
      intro.template = rulesTemp;
      intro.bind = () => {
        const element = intro.element.querySelector(`img[alt='Back']`);
        element.onclick = () => {
          changeView(changeScreen(initialWelcomeState));
        };
      };
      break;
  }
  return intro;
};


export default () => changeScreen(initialWelcomeState);


