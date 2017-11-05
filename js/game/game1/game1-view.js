import {
  questions,
  getScreenNum,
  getTypeNum,
} from '../../data/hunt';

import {drawHeader} from '../header/header';
import AbstractView from "../../abstract-view";

export default class Game1View extends AbstractView {
  constructor(state) {
    super();
    this.state = state;

    this.screen = questions[getTypeNum(this.state.type)][getScreenNum(this.state.screen)];
    this.options = Object.keys(this.screen);

    this.optionsParams = this.options.map((option) => (
      {option, imageParams: this.screen[option].image, questionParams: this.screen[option].question}));
  }

  get template() {

    return `${drawHeader(this.state)}
  <div class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    
    <form class="game__content">
       ${this.optionsParams.map(({option, imageParams, questionParams}) => `<div class="game__option">
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
  </div>`.trim();
  }

  bind() {
    const form = this.element.querySelector(`.game__content`);
    const answers1 = () => {
      return Array.from(form.querySelectorAll(`input[name='question1']`)).filter((ans) => ans.checked);
    };
    const answers2 = () => {
      return Array.from(form.querySelectorAll(`input[name='question2']`)).filter((ans) => ans.checked);
    };

    this.timeElement = this.element.querySelector(`.game__timer`);


    form.onclick = (evt) => {
      if (evt.target.tagName.toUpperCase() !== `INPUT`) {
        return;
      }

      const ansVal1 = answers1()[0].value;
      const ansVal2 = answers2()[0].value;

      const answer1 = answers1() ? this.screen.Option1.question[answers1()[0].value] : null;
      const answer2 = answers2() ? this.screen.Option2.question[answers2()[0].value] : null;

      console.log(ansVal1, ansVal2);

1

      // evt.target.name === `question1` && evt.target.checked ? screen.Option1.question[evt.target.value] : null;


      // const answers1Checked = answers1().filter((ans) => ans.checked);
      // const answers2Checked = answers2().filter((ans) => ans.checked);
      //
      // const answered = () => {
      //   return answers1Checked.length && answers2Checked.length;
      // };
      //
      // if (answered()) {
      //
      //   // Selecting both answers from database
      //   const answer1 = answers1Checked[0].value ? screen.Option1.question[answers1Checked[0].value] : null;
      //   const answer2 = answers2Checked[0].value ? screen.Option2.question[answers2Checked[0].value] : null;

        // this.onAnswer(answer1.isWin, answer2.isWin);
    };

    this.element.querySelector(`.header__back`).onclick = () => {
      this.onReturn();
    };

  }

  // Timer updates existing time
  updateTime(time) {
    if (time === 0) {

      this.onAnswer(`none`, `none`);
    }

    this.timeElement.textContent = time;
  }


  onAnswer() {

  }

  onReturn() {

  }
}


