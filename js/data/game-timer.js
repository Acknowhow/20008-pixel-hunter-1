export default class Clock {
  constructor(state, screen, tick) {
    this.state = state;
    this.screen = screen;
    this.tick = tick;
  }

  start() {
    this.timer = () => {
      this.count = setTimeout(() => {
        this.state = this.tick(this.state); // decreased by 1s, assigned into obj
        this.currentTime(this.state);

        this.screen.updateTime(this.state.time);
        this.timer();

        if (this.state.time === 0) {
          this.reset();
        }

      }, 1000);
    };

    this.timer();
  }

  currentTime() {

  }


  reset() {
    clearTimeout(this.count);
    return this.state.time;
  }
}
