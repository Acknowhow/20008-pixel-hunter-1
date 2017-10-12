import {makeGreetingTemplate} from './greeting';
import {insertIntoContainer, makeTemplate} from '../module-constructor';

const contentIntro = `<div id="main" class="central__content">
    <div class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>`;

export const makeIntroTemplate = () => {
  const el = makeTemplate(contentIntro);
  const main = el.querySelector(`#main`);

  const next = (ev) => {
    if (ev.target === main.querySelector(`.intro__asterisk`)) {
      main.removeEventListener(`click`, next);

      const greetingTemplate = makeGreetingTemplate();
      insertIntoContainer(greetingTemplate);
    }
  };

  main.addEventListener(`click`, next);
  return el;
};
