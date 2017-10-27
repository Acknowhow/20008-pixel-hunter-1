import introElement from './../../welcome/intro/intro';
import {initialGame, getGame1Screen} from '../../data/hunt';
import {LINK_BACK, showElement} from '../../utils';
import {drawHeader} from '../header/header';


const screenIndex = getGame1Screen(initialGame.screen);
const options = Object.keys(screenIndex);

const optionsParams = options.map((option) => (
  {option, imageParams: screenIndex[option].image, questionParams: screenIndex[option].question}));

const game1Print = (screen) => `${drawHeader(screen)}
  <div class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    
    <form class="game__content">
       ${optionsParams.map(({option, imageParams, questionParams}) => `<div class="game__option">
        <img src="${imageParams.src}" alt="${option}" width="${imageParams.width}" height="${imageParams.height}">
        
        <label class="game__answer game__answer--${questionParams.photo.value}">
          <input name="${questionParams.photo.name}" type="radio" value="${questionParams.photo.value}">
          <span>${questionParams.photo.text}</span>
        </label>
        
        <label class="game__answer game__answer--${questionParams.paint.value}">
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
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>`;

const game1Element = (state) => {
  const form = Array.from(document.querySelectorAll(`.game__option`));

  const formOptions1 = form[0];
  const formOptions2 = form[1];

  formOptions1.onclick = (evt) => {
    const target = evt.target;
    const value = evt.target.value;

    const checked = evt.target.checked;
    const screen = getGame1Screen(state.screen);

    if (target.tagName.toLowerCase() === `input`) {
      const answer = checked ? screen.Option1.question[value] : null;
      if (answer) {

        // this.onAnswer1(answer);
      }
    }
  };

  formOptions2.onclick = (evt) => {
    const target = evt.target;
    const value = evt.target.value;

    const checked = evt.target.checked;
    const screen = getGame1Screen(this.state.screen);

    if (target.tagName.toLowerCase() === `input`) {
      const answer = checked ? screen.Option2.question[value] : null;

      if (answer) {
        this.onAnswer2(answer);
      }
    }
  };

  LINK_BACK.onclick = () => {
    showElement(introElement());
  };
};

export default () => game1Element(initialGame);

