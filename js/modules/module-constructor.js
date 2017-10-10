export const central = document.querySelector(`.central`);
export const makeTemplate = (templateMain, templateFooter, templateHeader, questionObj) =>{
  const container = document.createElement(`template`);
  const footer = document.createElement(`footer`);
  footer.classList.add(`footer`);
  footer.innerHTML = templateFooter;
  container.innerHTML = templateMain;
  while (central.firstChild) {
    central.removeChild(central.firstChild);
  }
  central.appendChild(container.content);
  central.appendChild(footer);
  if (!templateHeader) {
    return;
  }
  central.insertAdjacentHTML(`afterbegin`, templateHeader);
  if (!questionObj) {
    return;
  }
};
