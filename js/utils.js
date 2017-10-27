import footerDefault from 'footer/footer';
const centralContainer = document.querySelector(`.central`);


export const createElement = (template, footer = footerDefault()) => {
  const templateElement = document.createElement(`template`);
  const footerElement = document.createElement(`footer`);

  footerElement.classList.add(`footer`);
  templateElement.innerHTML = template;

  footerElement.innerHTML = footer;
  templateElement.content.appendChild(footerElement);
  return templateElement.content;
};

export const changeView = (view, container = centralContainer) =>{
  container.innerHTML = ``;
  container.appendChild(view.element);
};
