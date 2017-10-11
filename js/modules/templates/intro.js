import {makeTemplate} from "../module-constructor";
import {makeGreetingTemplate} from "./greeting";
import {centralContainer} from "../../modules/module-constructor";
import {insertIntoContainer} from "../../modules/module-constructor";
const contentIntro = `<div id="main" class="central__content">
    <div class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>`;
export const makeIntroTemplate = () => {
  const el = makeTemplate(contentIntro);
  let next = (ev) => {
    if (ev.target === centralContainer.querySelector(`.intro__asterisk`)) {
      centralContainer.removeEventListener(`click`, next);
      const greetingTemplate = makeGreetingTemplate();
      insertIntoContainer(greetingTemplate, centralContainer);
    }
  };
  centralContainer.addEventListener(`click`, next);
  return el;
};
