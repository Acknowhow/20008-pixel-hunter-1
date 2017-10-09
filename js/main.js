(function () {
  let central = document.querySelector(`.central`);
  let main = document.querySelector(`#main`);
  let footer = document.querySelector(`.central .footer`);
  let greeting = document.querySelector(`#greeting`);
  let temps = document.querySelectorAll(`template`);
  let defaultIndex = 0;
  let tempsArr = [];
  let keysMap = [];
  Array.prototype.push.apply(tempsArr, temps);
  tempsArr = tempsArr.map(function (temp) {
  // Pushing all links Next and Back to temps array
    return temp.content.querySelectorAll(`img[alt='Next'], img[alt='Back']`);
  });
  function show(slide) {
    let mainArr = [main, footer];
    let content = slide.content;
    // Clone template content
    let clone = document.importNode(content, true);
    mainArr.forEach(function (selector) {
      selector.style.display = `none`;
    });
    central.appendChild(clone);
  }
  function keyDownHandler(ev) {
    ev = ev || event; // to deal with IE
    keysMap[ev.keyCode] = ev.type === `keydown`;
    if (keysMap[18] && keysMap[39]) {
      show(temps[defaultIndex++]);
      keysMap = {};
    }
  }
  console.log(temps);
  document.addEventListener(`keydown`, keyDownHandler, false);
  // Greeting
})();

