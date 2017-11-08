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


// /////////////////////////////////////// ИНФОРМАЦИЯ ДЛЯ ПРОВЕРЯЕЩЕГО ////////////////////////////////////////////////
// Текущая версия проекта не закончена. Я отдаю себе отчет в том, что в данном статусе мой проект не пройдет.
// Если по какой то машической причине срок сдачи можно будет немного сдвинуть, вероятно я успею к этому времени
// закончить его. Буду признателен за правки в текущей версии. //////////////////////////////////////////////////////

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

        switch (ans.isWin) {
          case true:

            switchAnswers.push(`ans_1`);

            if (switchAnswers.find((key) => key === `ans_2`)) {

              ansPush(switchAnswers, ansSwitchAssign(ans, `ans_1`));
              const [Win1, Win2] = switchAnswers;

              const win = getResult([Win1.isWin, Win2.isWin]);

              const ansKeys = getAnsKeys(answers);

              const mapAnsType = (tNum, sNum) => {
                return ansKeys.map((type) => ({type, [sNum]: answers[type][sNum]})).filter((key) => {
                  return key.type === `${tNum}`;
                });
              };

              const getAns = mapAnsType(typeNum, screenNum);

              const [currentAnswer] = getAns;

              ansPush(gameAnswers, ansCurrAssign(currentAnswer, screenNum, win));

              switchAnswers = [];

              break;

            } else {

              break;
            }

          default:

            throw new RangeError(`Unknown result`);

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

        switch (ans.isWin) {
          case true:

            switchAnswers.push(`ans_2`);

            if (switchAnswers.find((key) => key === `ans_1`)) {

              ansPush(switchAnswers, ansSwitchAssign(ans, `ans_2`));
              const [Win1, Win2] = switchAnswers;

              const win = getResult([Win1.isWin, Win2.isWin]);

              const ansKeys = getAnsKeys(answers);

              const mapAnsType = (tNum, sNum) => {
                return ansKeys.map((type) => ({type, [sNum]: answers[type][sNum]})).filter((key) => {
                  return key.type === `${tNum}`;
                });
              };

              const getAns = mapAnsType(typeNum, screenNum);

              const [currentAnswer] = getAns;

              const ansAssigned = ansCurrAssign(currentAnswer, screenNum, win);
              ansPush(gameAnswers, ansAssigned);


              switchAnswers = [];

              break;

            } else {

              break;
            }

          default:

            throw new RangeError(`Unknown result`);

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

