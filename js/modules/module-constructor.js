import {templateFooterDefault} from "./templates/footer";
export const centralContainer = document.querySelector(`.central`);
export const makeTemplate = (templateMain, templateFooter = templateFooterDefault) =>{
  const template = document.createElement(`template`);
  const footer = document.createElement(`footer`);
  footer.classList.add(`footer`);
  footer.innerHTML = templateFooter;
  template.innerHTML = templateMain;
  template.appendChild(footer);
  return template;
};
