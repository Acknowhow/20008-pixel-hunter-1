const centralContainer = document.querySelector(`.central`);

export const createElement = (template) => {
  const templateEl = document.createElement(`template`);

  templateEl.innerHTML = template;

  return templateEl.content;
};

export const showElement = (elem, container = centralContainer) => {
  container.innerHTML = ``;
  container.appendChild(elem);
};
