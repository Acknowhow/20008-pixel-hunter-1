
export const getWin = (a1Wins, a2Wins) => {
  if (a1Wins === `none` && a2Wins === `none`) {
    return `none`;

  } else if (a1Wins === true && a2Wins === true) {
    return `win`;

  } return `lose`;
};
