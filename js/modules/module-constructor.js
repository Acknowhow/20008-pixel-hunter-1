import {templateFooterDefault} from "./templates/footer";
export const centralContainer = document.querySelector(`.central`);
export const makeTemplate = (templateMain, templateFooter = templateFooterDefault) =>{
  const template = document.createElement(`template`);
  const footer = document.createElement(`footer`);
  footer.classList.add(`footer`);
  template.innerHTML = templateMain;
  footer.innerHTML = templateFooter;
  template.appendChild(footer);
  return template;
};
export const insertIntoContainer = (template, container) =>{
  container.innerHTML = ``;
  container.appendChild(template);
};
