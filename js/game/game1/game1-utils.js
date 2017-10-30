export const ansSwitchAssign = (ans, name) => {
  ans = Object.assign({}, ans);
  ans.name = name;
  return ans;
};

export const getResult = (answers) => {
  // Later use for all question types
  switch (answers.length) {
    case 2:
      // Looks Ok
      return answers[0] && answers[1] ? true : false;


    case 1:
      return `Missing at least one argument`;
  }
  return getResult(answers);
};
