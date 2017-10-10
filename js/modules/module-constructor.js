export const centralContainer = document.querySelector(`.central`);
export const makeTemplate = (templateMain, templateFooter) =>{
  const container = document.createElement(`template`);
  const footer = document.createElement(`footer`);
  footer.classList.add(`footer`);
  footer.innerHTML = templateFooter;
  container.innerHTML = templateMain;
  while (centralContainer.firstChild) {
    centralContainer.removeChild(centralContainer.firstChild);
  }
  centralContainer.appendChild(container.content);
  centralContainer.appendChild(footer);
};
