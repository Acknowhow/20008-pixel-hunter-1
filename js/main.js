import {changeView} from "./utils";
import showIntro from './intro/intro';
import returnIntro from './rules/rules';
console.log(returnIntro().onReturn);
returnIntro().onReturn = () => {
  changeView(showIntro());
}
changeView(showIntro());

