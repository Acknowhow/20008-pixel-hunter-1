import {getGame3Screen} from '../../data/hunt';
import {drawHeader} from "../../utils";
import ModuleView from '../../view';

export default class Game3View extends ModuleView {
  constructor(state) {
    super();
    this.state = state;
    this.screen = getGame3Screen(this.state.screen);

    this.title = this.screen.Option1.title.text;
    this.question1Obj = this.screen.Option1.question;

    this.question1Keys = Object.keys(this.screen.Option1.question);
    this.question1Params = this.question1Keys.map((key) => ({img: this.question1Obj[key]}));

    this.question1Result = this.question1Keys.map((key) => ({src: this.screen.Option1.question[key].src,
      isWin: this.screen.Option1.question[key].isWin}));

    this.questionResultFilter = this.question1Result.filter((key) => (key.isWin === true));
    this.link = this.questionResultFilter.map((key) => key.src);

  }

  get template() {

    return `${drawHeader(this.state)}
    <div class="game">
    <p class="game__task">${this.title}</p>
    
    <form class="game__content  game__content--triple">
      ${this.question1Params.map(({img}) => `<div class="game__option">
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

    const [winLink] = this.link;
    const formContent = this.element.querySelector(`.game__content`);
    const formOptions = Array.from(formContent.querySelectorAll(`.game__option`));

    const linkBack = this.element.querySelector(`img[alt='Back']`);

    formContent.onclick = (evt) => {
      const target = evt.target;

      for (const option of formOptions) {
        option.classList.remove(`game__option--selected`);
      }

      target.classList.add(`game__option--selected`);

      const answer = target.querySelector(`img`).src;
      this.onAnswer(answer, winLink);


    };

    linkBack.onclick = () => {
      this.onReturn();
    };

  }

  onReturn() {

  }

  onAnswer(answer, winLink) {
    return answer === winLink;
  }


}
