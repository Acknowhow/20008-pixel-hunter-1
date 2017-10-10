(function () {
  const centralContainer = document.querySelector(`.central`);
  const templates = Array.from(document.querySelectorAll(`template`));
  let defaultIndex = 0;
  let keysMap = [];
  function show(slide) {
    let content = slide.content;
    let clone = content.cloneNode(true);
    centralContainer.innerHTML = ``;
    centralContainer.appendChild(clone);
  }
  function keyDownHandler(ev) {
    ev = ev || event; // to deal with IE
    keysMap[ev.keyCode] = ev.type;
    if (ev.altKey && keysMap[39]) {
      defaultIndex++;
      if (defaultIndex % templates.length === 0) {
        defaultIndex--;
      }
    }
    if (ev.altKey && keysMap[37]) {
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

