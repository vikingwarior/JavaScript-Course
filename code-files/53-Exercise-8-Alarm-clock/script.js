class AlarmClock {
  constructor() {
    increaseButtons = document.getElementsByClassName(`button`);
  }

  render() {
    return `<div class="timebox">
              <div class="hours">
                <button class="button increase">🔼</button>
                <p class="time">11</p>
                <button class="button decrease">🔽</button>
              </div>
              <span class="time">:</span>
              <div class="inc">
                <button class="button increase">🔼</button>
                <p class="time">11</p>
                <button class="button decrease">🔽</button>
              </div>
            </div>
            <div class="alarm-options">
              <button class="set-alarm btn btn-outline-primary">Set alarm</button>
              <button class="snooze btn btn-outline-warning" hidden>Snooze</button>
              <button class="stop btn btn-outline-danger" hidden>Stop</button>
            </div>`;
  }
}

class Clock {
  constructor() { }

  render() {
    return `<div>
              <p class="day">MON</p>
            </div>
            <div>
              <span class="time hours">00</span>
              <span class="time">:</span>
              <span class="time minutes">00</span>
              <span class="time">:</span>
              <span class="time seconds">00</span>
            </div>
            <div class="abbrevation">
              <p class="format selected">AM</p>
              <p class="format">PM</p>
            </div>`;
  }
}

class Stopwatch {
  render() {
    return `<div>
              <span class="time hours">00</span>
              <span class="time">:</span>
              <span class="time minutes">00</span>
              <span class="time">:</span>
              <span class="time seconds">00</span>
            </div>
            <div class="stopwatch-options">
              <button type="button" class="btn btn-outline-success stopwatch-btn start" hidden>Start</button>
              <button type="button" class="btn btn-outline-warning stopwatch-btn pause" >Pause</button>
              <button type="button" class="btn btn-outline-danger stopwatch-btn stop" >Stop</button>
            </div>`
  }
}
