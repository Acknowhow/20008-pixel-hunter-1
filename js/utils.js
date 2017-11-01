
const centralContainer = document.querySelector(`.central`);


export const showElement = (elem, container = centralContainer) => {
  container.innerHTML = ``;
  container.appendChild(elem);
};
