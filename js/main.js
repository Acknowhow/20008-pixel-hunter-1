import {changeView} from "./utils";
import showIntro from './intro/intro';
import showRules from './rules/rules';
showRules().onReturn = () => {
  changeView(showIntro());
};
console.log(showRules());
console.log(showIntro());
showIntro().onProceed = () => {
  changeView(showRules());
};
changeView(showIntro());

