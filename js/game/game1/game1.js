import introElement from './../../welcome/intro/intro';
import {initialGame, answers, getAnsKeys, mapAnsType, getScreenState, getScreenNum, getTypeNum, ansPush, ansCurrAssign} from '../../data/hunt';
import {createElement, showElement} from '../../utils';
import {drawHeader} from '../header/header';
import {ansSwitchAssign, getResult} from "./game1-utils";


const screen = getScreenState(initialGame);
const options = Object.keys(screen);

const optionsParams = options.map((option) => (
  {option, imageParams: screen[option].image, questionParams: screen[option].question}));

const game1Print = (state) => {
  return `${drawHeader(state)}
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
  </div>`.trim();
};

const game1 = (state) => {
  const el = createElement(game1Print(state));
  const form = Array.from(el.querySelectorAll(`.game__option`));

  const formOptions1 = form[0];
  const formOptions2 = form[1];

  let switchAnswers = [];
  const gameAnswers = [];

  const typeNum = getTypeNum(initialGame.type);
  const screenNum = getScreenNum(initialGame.screen);


  formOptions1.onclick = (evt) => {
    const target = evt.target;
    const value = evt.target.value;

    const checked = evt.target.checked;

    if (target.tagName.toLowerCase() === `input`) {
      const answer = checked ? screen.Option1.question[value] : null;

      const assignAnswer1 = (ans) => {

            switchAnswers.push(`ans_1`);
            if (switchAnswers.find((key) => key === `ans_2`)) {

              ansPush(switchAnswers, ansSwitchAssign(ans, `ans_1`));
              const [Win1, Win2] = switchAnswers;

              const win = getResult([Win1.isWin, Win2.isWin]);

              const typeMapped = mapAnsType(getAnsKeys(answers), typeNum, screenNum);
              const getAns = typeMapped(typeNum, screenNum);

              const [currentAnswer] = getAns;

              const ansAssigned = ansCurrAssign(currentAnswer, screenNum, win);
              ansPush(gameAnswers, ansAssigned);

            }
            else {
              switchAnswers = [];
            }
      };

      assignAnswer1(answer);
    }
  };

  formOptions2.onclick = (evt) => {
    const target = evt.target;
    const value = evt.target.value;

    const checked = evt.target.checked;

    if (target.tagName.toLowerCase() === `input`) {
      const answer = checked ? screen.Option2.question[value] : null;

      const assignAnswer2 = (ans) => {

        switchAnswers.push(`ans_2`);
        if (switchAnswers.find((key) => key === `ans_1`)) {

          ansPush(switchAnswers, ansSwitchAssign(ans, `ans_2`));
          const [Win1, Win2] = switchAnswers;

          const win = getResult([Win1.isWin, Win2.isWin]);

          const typeMapped = mapAnsType(getAnsKeys(answers), typeNum, screenNum);
          const getAns = typeMapped(typeNum, screenNum);

          const [currentAnswer] = getAns;

          const ansAssigned = ansCurrAssign(currentAnswer, screenNum, win);
          ansPush(gameAnswers, ansAssigned);

        }
        else {
          switchAnswers = [];
        }

      };

      assignAnswer2(answer);
    }
  };

  el.querySelector(`.header__back`).onclick = () => {
    showElement(introElement());
  };

  return el;
};

export default () => game1(initialGame);

