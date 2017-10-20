import {changeView} from './../utils';
import Rules from './rules-view';
import Return from './../intro/intro-view';

const rules = new Rules();
const showReturn = () => new Return();
rules.onReturn = () => {
  changeView(showReturn());
}


export default () => rules;

