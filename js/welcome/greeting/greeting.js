import greetingData from './greeting-data';
import rulesElement from '../rules/rules';
import {createElement, showElement} from '../../utils';

const pKeys = Object.keys(greetingData.text.p);

const [greetingSrc, greetingWidth, greetingHeight, greetingAlt] =
  Object.keys(greetingData.img.greeting).map((key) => greetingData.img.greeting[key]);

const [nextSrc, nextWidth, nextHeight, nextAlt] =
  Object.keys(greetingData.img.next).map((key) => greetingData.img.next[key]);

const moduleGreeting = `<div class="greeting central--blur">
    <div class="greeting__logo">
      <img src="${greetingSrc}" width="${greetingWidth}" height="${greetingHeight}" alt="${greetingAlt}">
    </div>
    <h1 class="greeting__asterisk">${greetingData.text.h.h1}</h1>
    <div class="greeting__challenge">
      <h3>${greetingData.text.h.h3}</h3>
      ${pKeys.map((key) => `<p>${pKeys.text.p[key]}</p></br>`).join(``)}
    </div>
    <div class="greeting__continue">
      <span>
        <img src="${nextSrc}" width="${nextWidth}" height="${nextHeight}" alt="${nextAlt}">
      </span>
    </div>
  </div>`;

const greeting = () => {
  const el = createElement(moduleGreeting);
  const linkNext = el.querySelector(`img[alt='Next']`);

  linkNext.onclick = () => {
    showElement(rulesElement());
  };
  return el;
};

export default () => greeting;

