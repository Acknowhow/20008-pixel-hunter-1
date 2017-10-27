import introData from './intro-data';
import greetingElement from '../greeting/greeting';
import {createElement, showElement} from '../../utils';

const introContent = `<div id="main" class="central__content">
    <div class="intro">
      <h1 class="intro__asterisk">${introData.h1}</h1>
      <p class="intro__motto"><sup>${introData.sup}</sup>${introData.p1}</p>
    </div>
  </div>`;

const intro = () => {
  const el = createElement(introContent);
  const asterisk = el.querySelector(`.intro__asterisk`);

  const next = () => {
    showElement(greetingElement());

    asterisk.removeEventListener(`click`, next);
  };

  asterisk.addEventListener(`click`, next);
  return el;
};

export default () => intro;
