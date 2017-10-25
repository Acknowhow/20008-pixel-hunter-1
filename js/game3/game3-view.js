import {getGame3Screen} from '../data/hunt';
import {drawHeader} from "../utils";
import ModuleView from './../view';

export default class Game3View extends ModuleView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    const screen = getGame3Screen(this.state.screen);
    const title = screen.Option1.title.text;

    const question1Obj = screen.Option1.question;
    const question1Keys = Object.keys(screen.Option1.question);

    const question1Params = question1Keys.map((key) => ({img: question1Obj[key]}));

    return `${drawHeader(this.state)}
    <div class="game">
    <p class="game__task">${title}</p>
    <form class="game__content  game__content--triple">
      ${question1Params.map(({img}) => `<div class="game__option">
      <img src="${img.src}" alt="${img.alt}" width="${img.width}" height="${img.height}"></div>`).join(``)}
    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>`;

  }

  bind() {

    const linkBack = this.element.querySelector(`img[alt='Back']`);

    linkBack.onclick = () => {
      this.onReturn();
    };

  }

  onReturn() {

  }

}
