// import {templateFooterDefault} from './templates/footer';

const centralContainer = document.querySelector(`.central`);

export const createElement = (templateMain) =>{ // , templateFooter = templateFooterDefault
  const template = document.createElement(`template`);
  const footer = document.createElement(`footer`);

  footer.classList.add(`footer`);
  template.innerHTML = templateMain;

  footer.innerHTML = ``;
  template.content.appendChild(footer);
  return template.content;
};

export const changeView = (view, container = centralContainer) =>{
  container.innerHTML = ``;
  container.appendChild(view.element);
};
