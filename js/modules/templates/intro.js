import {makeTemplate} from "../module-constructor";
const contentIntro = `<div id="main" class="central__content">
    <div class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>`;
export const makeIntroTemplate = () => {
  const el = makeTemplate(contentIntro);
  let next = (ev) => {
    if (ev.target === el.querySelector(`.intro__asterisk`)) {
      el.removeEventListener(`click`, next);
    }
  };
  el.addEventListener(`click`, next);
  return el;
};
