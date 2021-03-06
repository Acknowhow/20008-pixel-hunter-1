export default class Clock {
  constructor(params) {
    this.count = params.count;
    this.secondsElem = params.el;
  }
  start() {
    this.interval = setInterval(() => this.render(), 1000);
  }
  render() {
    this.secondsElem.innerHTML = (() => {
      if (this.count === 0) {
        clearInterval(this.interval);
      }
      return this.count--;
    })();
  }
  reset() {
    clearInterval(this.interval);
    this.count = 0;
    this.secondsElem.innerHTML = `0` + this.count;
  }
}
