import {getScreen} from '../data/hunt';
import ModuleView from './../view';

const drawHeart = (full) => {
  return `<img src="img/heart__${full ? `full` : `empty`}.svg" class="game__heart" alt="Life" width="32" height="32">`;
};

const drawHeader = (data) => {
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

export default class Game1View extends ModuleView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {

    const screen = getScreen(this.state.screen);
    const options = Object.keys(screen);

    const optionsParams = options.map((option, imageParams, questionParams) => (
      {option, imageParams: screen[option].image, questionParams: screen[option].question}));

    return `
    ${drawHeader(this.state)}
  <div class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
       ${optionsParams.map(({option, imageParams, questionParams}) => `<div class="game__option">
        <img src="${imageParams.src}" alt="${option}" width="${imageParams.width}" height="${imageParams.height}">
        <label class="game__answer game__answer--${questionParams.paint.value}">
          <input name="${questionParams.paint.name}" type="radio" value="${questionParams.paint.value}">
          <span>${questionParams.paint.text}</span>
        </label>
        <label class="game__answer game__answer--${questionParams.photo.value}">
          <input name="${questionParams.photo.name}" type="radio" value="${questionParams.photo.value}">
          <span>${questionParams.photo.text}</span>
        </label>
</div>`).join(``)}
    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>`;

  }

  bind() {

    const form = this.element.querySelector(`.game__content`);
    // First and Second options screen
    const formOptions1 = form.children[0];
    const formOptions2 = form.children[1];

    const formAnswers1 = Array.from(formOptions1.querySelectorAll(`input`));
    const formAnswers2 = Array.from(formOptions2.querySelectorAll(`input`));

    const linkBack = this.element.querySelector(`img[alt='Back']`);

    linkBack.onclick = () => {
      this.onReturn();
    };

  }

  onReturn() {

  }

}
