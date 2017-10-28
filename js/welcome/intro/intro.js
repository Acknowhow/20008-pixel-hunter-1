import {introData} from './intro-data';
import greetingElement from '../greeting/greeting';
import {createElement, showElement} from '../../utils';

const introPrint = `<div id="main" class="central__content">
    <div class="intro">
      <h1 class="intro__asterisk">${introData.text.h1}</h1>
      <p class="intro__motto"><sup>${introData.text.sup}</sup>${introData.text.p1}</p>
    </div>
  </div>`;

const intro = () => {
  const el = createElement(introPrint);
  const asterisk = el.querySelector(`.intro__asterisk`);

  const next = () => {
    showElement(greetingElement());
  };

  asterisk.addEventListener(`click`, next);
  return el;
};

export default intro;
