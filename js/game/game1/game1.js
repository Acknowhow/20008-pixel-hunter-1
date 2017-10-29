import

let answers = [];


game1.onAnswer1 = (answer) => {

  switch (answer.isWin) {
    case true:

      answers.push(`ans1`);
      if (answers.find((el) => el === `ans2`)) {

        // Add method for assigning answers
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
}

