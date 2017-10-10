(function () {
  const centralContainer = document.querySelector(`.central`);
  const templates = Array.from(document.querySelectorAll(`template`));
  let defaultIndex = 0;
  let keysMap = [];
  function show(slide) {
    const content = slide.content;
    const clone = content.cloneNode(true);
    centralContainer.innerHTML = ``;
    centralContainer.appendChild(clone);
  }
  function keyDownHandler(ev) {
    keysMap[ev.keyCode] = ev.type;
    const KEY_CODE_RIGHT = 39;
    const KEY_CODE_LEFT = 37;
    if (ev.altKey && keysMap[KEY_CODE_RIGHT]) {
      defaultIndex++;
      if (defaultIndex % templates.length === 0) {
        defaultIndex--;
      }
    }
    if (ev.altKey && keysMap[KEY_CODE_LEFT]) {
      defaultIndex--;
      if (defaultIndex === -1) {
        defaultIndex++;
      }
    }
    show(templates[defaultIndex]);
    keysMap = [];
  }
  document.addEventListener(`keydown`, keyDownHandler);
  show(templates[defaultIndex]);
})();

