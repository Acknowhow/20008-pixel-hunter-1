import footerDefault from 'footer/footer';
const centralContainer = document.querySelector(`.central`);

export const LINK_BACK = `<span class="back">
  <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
  <img src="img/logo_small.svg" width="101" height="44">
  </span>`;

export const createElement = (template, footer = footerDefault()) => {
  const templateElement = document.createElement(`template`);
  const footerElement = document.createElement(`footer`);

  footerElement.classList.add(`footer`);
  templateElement.innerHTML = template;

  footerElement.innerHTML = footer;
  templateElement.content.appendChild(footerElement);
  return templateElement.content;
};

export const showElement = (element, container = centralContainer) => {
  container.innerHTML = ``;
  container.appendChild(element);
};
