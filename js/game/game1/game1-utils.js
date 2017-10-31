export const ansSwitchAssign = (ans, name) => {
  ans = Object.assign({}, ans);
  ans.name = name;
  return ans;
};

export const getResult = (answers) => {

  switch (answers.length) {
    case 2:
      // Looks Ok
      return answers[0] && answers[1] ? true : false;

    case 1:
      throw new RangeError(`Missing at least one argument`);
  }

  throw new RangeError(`No arguments - no answers`);

};
