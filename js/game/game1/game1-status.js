import game1View from '../../game/game1/game1-view';






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
}

