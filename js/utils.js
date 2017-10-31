import footerDefault from './footer/footer';
const centralContainer = document.querySelector(`.central`);

export const createElement = (template, footer = footerDefault()) => {
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
