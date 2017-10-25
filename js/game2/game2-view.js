import {getGame2Screen} from '../data/hunt';
import {drawHeader} from "../utils";
import ModuleView from './../view';

export default class Game2View extends ModuleView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    const screen = getGame2Screen(this.state.screen);
    const options = Object.keys(screen);

    const optionsParams = options.map((option) => (
      {option, imageParams: screen[option].image, questionParams: screen[option].question}));

    return `
    ${drawHeader(this.state)}
    <div class="game">
        <p class="game__task">Угадай, фото или рисунок?</p>
      <form class="game__content  game__content--wide">
      
        ${optionsParams.map(({option, imageParams, questionParams}) => `<div class="game__option">
          <img src="${imageParams.src}" alt="${option}" width="${imageParams.width}" height="${imageParams.height}">
          
          <label class="game__answer game__answer--${questionParams.photo.value}">
            <input name="${questionParams.photo.name}" type="radio" value="${questionParams.photo.value}">
            <span>${questionParams.photo.text}</span>
          </label>
          
          <label class="game__answer  game__answer--wide  game__answer--${questionParams.paint.value}">
            <input name="${questionParams.paint.name}" type="radio" value="${questionParams.paint.value}">
            <span>${questionParams.paint.text}</span>
          </label>
          
        </div>`).join(``)}
      </form>
      
      <div class="stats">
        <ul class="stats">
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--correct"></li>
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--unknown"></li>
        </ul>
      </div>
    </div>`;

  }

  bind() {

    const formOption = this.element.querySelector(`.game__option`);

    formOption.onclick = (evt) => {
      const target = evt.target;
      const value = evt.target.value;

      const screen = getGame2Screen(this.state.screen);

      if (target.tagName.toLowerCase() === `input`) {
        const answer = screen.Option1.question[value];

        if (answer) {
          this.onAnswer(answer);
        }
      }
    };

    const linkBack = this.element.querySelector(`img[alt='Back']`);

    linkBack.onclick = () => {
      this.onReturn();
    };
  }

  onAnswer(answer) {
    return answer.isWin;
  }

  onReturn() {

  }
}
