import {LINK_BACK} from '../../data/hunt';
const drawHeart = (full) => {
  return `<img src="img/heart__${full ? `full` : `empty`}.svg" class="game__heart" alt="Life" width="32" height="32">`;
};

export const drawHeader = (data) => {
  return `<header class="header">
    <div class="header__back">${LINK_BACK}</div>
    <h1 class="game__timer">${data.time}</h1>
    <div class="game__lives">
      ${drawHeart(data.lives > 2)}
      ${drawHeart(data.lives > 1)}
      ${drawHeart(data.lives > 0)}
    </div>
  </header>`.trim();
};
