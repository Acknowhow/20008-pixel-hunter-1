import {centralContainer} from '../module-constructor';
import {makeTemplate} from "../module-constructor";
import {makeGreetingTemplate} from './greeting.js';
const contentIntro = `<div id="main" class="central__content">
    <div class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>`;
export const makeIntroTemplate = () => {
  makeTemplate(contentIntro);
  let next = (ev) => {
    if (ev.target === document.querySelector(`.intro__asterisk`)) {
      centralContainer.removeEventListener(`click`, next);
      makeGreetingTemplate();
    }
  };
  centralContainer.addEventListener(`click`, next);
};
