import {changeView} from './../utils';
import Intro from './intro-view';
import showRules from '../rules/rules';

const intro = new Intro();

intro.onProceed = () => {
  changeView(showRules());

};
export default () => intro;
