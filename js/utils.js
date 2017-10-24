const centralContainer = document.querySelector(`.central`);
const footerDefault = `<a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
    <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2017</span>
    <div class="footer__social-links">
      <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
      <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
      <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
      <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
    </div>`.trim();
const drawHeart = (full) => {
  return `<img src="img/heart__${full ? `full` : `empty`}.svg" class="game__heart" alt="Life" width="32" height="32">`;
};

export const drawHeader = (data) => {
  return `<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </span>
    </div>
    <h1 class="game__timer">${data.time}</h1>
    <div class="game__lives">
      ${drawHeart(data.lives > 2)}
      ${drawHeart(data.lives > 1)}
      ${drawHeart(data.lives > 0)}
    </div>
  </header>`;
};

export const createElement = (template, footer = footerDefault) =>{ // , templateFooter = templateFooterDefault
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
