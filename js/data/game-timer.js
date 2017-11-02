export default class Clock {
  constructor(params) {
    this.state = params._state;
    this.screen = params._screen;
    this.tick = params._tick;
  }

  start() {
    this.timer = () => {
      this.count = setTimeout(() => {

        this.state = this.tick(this.state); // decreased by 1s, assigned into obj
        this.screen.updateTime(this.state.time);
        this.timer();

        if (this.state.time === 0) {
          this.reset();
        }

      }, 1000);
    };

    this.timer();
  }

  reset() {
    clearTimeout(this.count);
    return this.state.time;
  }
}
