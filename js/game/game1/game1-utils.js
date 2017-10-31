export const ansSwitchAssign = (ans, name) => {
  ans = Object.assign({}, ans);
  ans.name = name;
  return ans;
};

export const getResult = (...answers) => {

  return answers[0] && answers[1];

};
