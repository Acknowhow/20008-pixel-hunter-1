export const centralContainer = document.querySelector(`.central`);
export const makeTemplate = (templateMain, templateFooter) =>{
  const container = document.createElement(`template`);
  const footer = document.createElement(`footer`);
  footer.classList.add(`footer`);
  footer.innerHTML = templateFooter;
  container.innerHTML = templateMain;
  centralContainer.innerHTML = ``;
  centralContainer.appendChild(container.content);
  centralContainer.appendChild(footer);
};
