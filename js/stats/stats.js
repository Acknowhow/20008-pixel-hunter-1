import {changeView} from "../utils";
import {initialGame} from "../data/hunt";
import StatsView from './stats-view';
import showIntro from './../welcome/welcome';

const changeLevel = (state) => {
  const stats = new StatsView(state);

  stats.onReturn = () => {
    changeView(showIntro());
  };

  return stats;
};

export default () => changeLevel(initialGame);
