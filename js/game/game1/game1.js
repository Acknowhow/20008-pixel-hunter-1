import introElement from './../../welcome/intro/intro';
import {
  initialGame,
  answers,
  questions,
  getAnsKeys,
  getScreenNum,
  getTypeNum,
  ansPush,
  ansCurrAssign
} from '../../data/hunt';
import {createElement, showElement} from '../../utils';
import {drawHeader} from '../header/header';
import {ansSwitchAssign, getResult} from "./game1-utils";


const screen = questions[getTypeNum(initialGame.type)][getScreenNum(initialGame.screen)];
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
  const form = el.querySelector(`.game__content`);

  const answers1 = Array.from(form.querySelectorAll(`input[name='question1']`));
  const answers2 = Array.from(form.querySelectorAll(`input[name='question2']`));

  const typeNum = getTypeNum(initialGame.type);
  const screenNum = getScreenNum(initialGame.screen);

  const gameAnswers = [];


  form.onclick = () => {

    const answers1Checked = answers1.filter((ans) => ans.checked);
    const answers2Checked = answers2.filter((ans) => ans.checked);

    const answered = () => {
      return answers1Checked.length && answers2Checked.length;
    };

    if (answered()) {
      const answer1 = answers1Checked[0].value ? screen.Option1.question[answers1Checked[0].value] : null;
      const answer2 = answers2Checked[0].value ? screen.Option2.question[answers2Checked[0].value] : null;


    }


    // const assignAnswer1 = (ans) => {
    //
    //   switch (ans.isWin) {
    //     case true:
    //
    //       switchAnswers.push(`ans_1`);
    //
    //       if (switchAnswers.find((key) => key === `ans_2`)) {
    //
    //         ansPush(switchAnswers, ansSwitchAssign(ans, `ans_1`));
    //         const [Win1, Win2] = switchAnswers;
    //
    //         const win = getResult([Win1.isWin, Win2.isWin]);
    //
    //         const ansKeys = getAnsKeys(answers);
    //
    //         const mapAnsType = (tNum, sNum) => {
    //           return ansKeys.map((type) => ({type, [sNum]: answers[type][sNum]})).filter((key) => {
    //             return key.type === `${tNum}`;
    //           });
    //         };
    //
    //         const getAns = mapAnsType(typeNum, screenNum);
    //
    //         const [currentAnswer] = getAns;
    //
    //         ansPush(gameAnswers, ansCurrAssign(currentAnswer, screenNum, win));
    //
    //         switchAnswers = [];
    //
    //         break;
    //
    //       } else {
    //
    //         break;
    //       }
    //
    //     default:
    //
    //       throw new RangeError(`Unknown result`);
    //
    //   }
    //
    // };
    //
    // assignAnswer1(answer);

  };


  el.querySelector(`.header__back`).onclick = () => {
    showElement(introElement());
  };

  return el;
};

export default () => game1(initialGame);

