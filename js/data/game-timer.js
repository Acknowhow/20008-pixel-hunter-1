export default class Clock {
  constructor(params) {
    this.state = params._state;
    this.screen = params._screen;
    this.tick = params._tick;
  }

  start() {
    this.timer = () => {
      setTimeout(() => {
        this.state = this.tick(this.state); // decreased by 1s, assigned into obj
        this.screen.updateTime(this.state.time);
        this.timer();
      }, 1000);
    };
    this.timer();
  }


  reset() {
    clearInterval(this.timer);
    return this.timer;
  }
}
