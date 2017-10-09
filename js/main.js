(function () {
  const central = document.querySelector(`.central`);
  const intro = document.querySelector(`#intro`);
  const temps = document.querySelectorAll(`template`);
  let defaultIndex = 0;
  let tempsArr = [];
  let keysMap = [];
  Array.prototype.push.apply(tempsArr, temps);
  // Put intro at 0 index
  tempsArr.unshift(intro);
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
    keysMap[ev.keyCode] = ev.type === `keydown`;
    if (keysMap[18] && keysMap[39]) {
      show(temps[defaultIndex++ % temps.length]); // Measure default index
      keysMap = {};
    }
    if (keysMap[18] && keysMap[37]) {
      show(temps[defaultIndex-- % temps.length]);
      keysMap = {};
    }
  }
  document.addEventListener(`keydown`, function (ev) {
    keyDownHandler(ev);
  });
  // Greeting
  console.log(tempsArr);
})();

