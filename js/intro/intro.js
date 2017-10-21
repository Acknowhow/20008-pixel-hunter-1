import {changeView} from '../utils';
import IntroView from './intro-view';
import showRules from './../rules/rules';

const intro = new IntroView();
intro.onProceed = () => {
  changeView(showRules());
}

export default () => intro;
