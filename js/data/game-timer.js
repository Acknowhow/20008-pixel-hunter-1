export default class Clock {
  constructor(state, time, screen, tick) {

    this.state = state;
    this._time = time;
    this.screen = screen;
    this.tick = tick;
  }

  start() {
    this.timer = () => {

      this.count = setTimeout(() => {
        // decreased by 1s, assigned into obj
        this.state = this.tick(this.state);

        this.currentTime(this.state);

        // This method updates markup
        this.screen.updateTime(this.state.time);
        this.timer();

        if (this.state.time === 0) {
          this.reset();
        }

        return this.state.time;
      }, 1000);
    };

    // Recursive call for max precision
    this.timer();
  }

  currentTime() {

  }

  reset() {
    this.state.time = this._time;
    clearTimeout(this.count);
    this.currentTime(this.state);
  }
}
