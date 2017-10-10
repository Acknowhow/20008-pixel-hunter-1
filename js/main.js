(function () {
  const central = document.querySelector(`.central`);
  const intro = document.querySelector(`#intro`);
  const temps = document.querySelectorAll(`template`);
  let defaultIndex = 0;
  let tempsArr = [];
  let keysMap = [];
  Array.prototype.push.apply(tempsArr, temps);
  // Put intro at 0 index
  // tempsArr.unshift(intro);
  function show(slide) {
    let content = slide.content;
    // Clone template content
    let clone = document.importNode(content, true);
    while (central.firstChild) {
      central.removeChild(central.firstChild);
    }
    central.appendChild(clone);
  }
  function keyDownHandler(ev) {
    ev = ev || event; // to deal with IE
    keysMap[ev.key] = ev.type === `keydown`;
    if (ev.key === `Alt`) {
      return;
    }
    if (ev.altKey && keysMap[`ArrowRight`]) {
      defaultIndex++;
      if (defaultIndex % temps.length === 0) {
        defaultIndex--;
      }
      show(temps[defaultIndex % temps.length]);
      keysMap = {};
    }
    if (ev.altKey && keysMap[`ArrowLeft`]) {
      defaultIndex--;
      if (defaultIndex === -1) {
        defaultIndex++;
      }
      show(temps[defaultIndex]);
      keysMap = {};
    }
  }
  document.addEventListener(`keydown`, function (ev) {
    keyDownHandler(ev);
  });
  show(intro);
})();

