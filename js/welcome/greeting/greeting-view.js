import {greetingData} from './greeting-data';
// import rulesElement from '../rules/rules';
import footer from '../../footer/footer';
import AbstractView from "../../abstract-view";

export default class GreetingView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    const pKeys = Object.keys(greetingData.text.p);
    const sliced = pKeys.slice(0, 4);

    const [greetingSrc, greetingWidth, greetingHeight, greetingAlt] =
      Object.keys(greetingData.img.greeting).map((key) => greetingData.img.greeting[key]);

    const [nextSrc, nextWidth, nextHeight, nextAlt] =
      Object.keys(greetingData.img.next).map((key) => greetingData.img.next[key]);

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
    
  </div>${footer()}`.trim();

  }

  bind() {
    const linkNext = this.element.querySelector(`img[alt='Next']`);

    linkNext.onclick = () => {
      this.onNext();
    };

  }

  onNext() {

  }
}


