import {footerStamp} from './footer/footer';
const centralContainer = document.querySelector(`.central`);

export const LINK_BACK = `<span class="back">
  <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
  <img src="img/logo_small.svg" width="101" height="44">
  </span>`;

export const createElement = (template, footer = footerStamp()) => {
  const templateEl = document.createElement(`template`);
  const footerEl = document.createElement(`footer`);

  footerEl.classList.add(`footer`);
  templateEl.innerHTML = template;

  footerEl.innerHTML = footer;
  templateEl.content.appendChild(footerEl);

  return templateEl.content;
};

export const showElement = (elem, container = centralContainer) => {
  container.innerHTML = ``;
  container.appendChild(elem);
};
