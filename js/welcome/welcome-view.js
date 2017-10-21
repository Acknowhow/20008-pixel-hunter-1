import IntroView from './intro-view';
import GreetingView from './greeting-view';
import RulesView from './rules-view';
import getScreen from './../data/hunt';

const intro = new IntroView(screen);
const greeting = new GreetingView(screen);
const rules = new RulesView(screen);

export default class WelcomeView extends ModuleView {
  constructor(state) {
    super();
    this.screen = state;
  }

  get template() {
    const screen = getScreen(this.state.screen);

  }
}

