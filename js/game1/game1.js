import {changeView} from "../utils";
import {initialGame} from './../data/hunt';
import showIntro from './../welcome/welcome';
import showGame2 from './../game2/game2';
import Game1View from './game1-view';

const changeLevel = (state) => {
  let answers = [];
  const game1 = new Game1View(state);

  game1.onAnswer1 = (answer) => {

    switch (answer.isWin) {
      case true:

        answers.push(`ans1`);
        if (answers.find((el) => el === `ans2`)) {
          changeView(showGame2());
        }
        break;

      case false:
        answers = [];
        break;
    }
  };

  game1.onAnswer2 = (answer) =>{

    switch (answer.isWin) {
      case true:

        answers.push(`ans2`);
        if (answers.find((el) => el === `ans1`)) {
          changeView(showGame2());
        }
        break;

      case false:
        answers = [];
        break;
    }
  };

  game1.onReturn = () => {
    changeView(showIntro());
  };

  return game1;

};


export default () => changeLevel(initialGame);
