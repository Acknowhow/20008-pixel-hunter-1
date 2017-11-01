export default class Clock {
  constructor(params) {
    this.state = params._state;
    this.screen = params._screen;
    this.tick = params._tick;
  }

  start() {
    this.interval = setTimeout(() => {
      this.state = this.tick(this.state); // decreased by 1s, assigned into obj
      this.screen.updateTime(this.state.time);
    }, 1000);
  }

  reset() {
    clearInterval(this.interval);
    return this.interval;
  }
}
