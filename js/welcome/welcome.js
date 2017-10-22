import IntroView from './intro-view';

const introTemp = `<div id="main" class="central__content">
    <div class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>`;

const intro = new IntroView(introTemp);

intro.bind = () => {
  const element = intro.element.querySelector(`.intro__asterisk`);
  element.onclick = () => {
    alert('Yes');
  };
}

export default () => intro;


