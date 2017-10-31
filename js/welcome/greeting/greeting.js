import {greetingData} from './greeting-data';
import rulesElement from '../rules/rules';
import {createElement, showElement} from '../../utils';

const pKeys = Object.keys(greetingData.text.p);
const sliced = pKeys.slice(0, 4);

const [greetingSrc, greetingWidth, greetingHeight, greetingAlt] =
  Object.keys(greetingData.img.greeting).map((key) => greetingData.img.greeting[key]);

const [nextSrc, nextWidth, nextHeight, nextAlt] =
  Object.keys(greetingData.img.next).map((key) => greetingData.img.next[key]);

const greetingPrint = () => {
  return `<div class="greeting central--blur">
    <div class="greeting__logo">
      <img src="${greetingSrc}" width="${greetingWidth}" height="${greetingHeight}" alt="${greetingAlt}">
    </div>
    
    <h1 class="greeting__asterisk">${greetingData.text.h.h1}</h1>
    <div class="greeting__challenge">
      <h3>${greetingData.text.h.h3}</h3>
      <p>${sliced.map((key) => `${greetingData.text.p[key]}</br>`).join(``)}${greetingData.text.p[pKeys[4]]}</p>
    </div>
    
    <div class="greeting__continue">
      <span>
        <img src="${nextSrc}" width="${nextWidth}" height="${nextHeight}" alt="${nextAlt}">
      </span>
    </div>
    
  </div>`.trim();
};

const greeting = () => {
  const el = createElement(greetingPrint());
  const linkNext = el.querySelector(`img[alt='Next']`);

  linkNext.onclick = () => {
    showElement(rulesElement());
  };

  return el;
};

export default greeting;

