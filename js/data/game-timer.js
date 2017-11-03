export default class Clock {
  constructor(state, screen, tick) {
    this.state = state;
    this.screen = screen;
    this.tick = tick;
  }

  start() {
    this.timer = () => {
      this.count = setTimeout(() => {
        // decreased by 1s, assigned into obj
        this.state = this.tick(this.state);

        // This method is for answer assignment
        this.currentTime(this.state);

        // This method updates markup
        this.screen.updateTime(this.state.time);
        this.timer();

        if (this.state.time === 0) {
          this.reset();
        }

      }, 1000);
    };
    // Recursive call for max precision
    this.timer();
  }

  currentTime() {

  }


  reset() {
    clearTimeout(this.count);
    return this.state.time;
  }
}
