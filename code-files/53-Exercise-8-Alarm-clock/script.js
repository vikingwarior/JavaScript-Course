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
            <div class="options">
              <button type="button" class="btn btn-outline-success options-btn start">Start</button>
              <button type="button" class="btn btn-outline-warning options-btn pause" hidden>Pause</button>
              <button type="button" class="btn btn-outline-danger options-btn stop">Stop</button hidden>
            </div>`
  }
}

class Timer{
  render(){
    return `<div class="time-div hours">
    <button class="button increase">🔼</button>
    <span class="time">00</span>
    <button class="button decrease">🔽</button>
  </div>
  <span class="time">:</span>
  <div class="time-div mins">
    <button class="button increase">🔼</button>
    <span class="time">00</span>
    <button class="button decrease">🔽</button>
  </div>
  <span class="time">:</span>
  <div class="time-div seconds">
    <button class="button increase">🔼</button>
    <span class="time">00</span>
    <button class="button decrease">🔽</button>
  </div>
  <div class="options">
    <button type="button" class="btn btn-outline-success options-btn start">Start</button>
    <button type="button" class="btn btn-outline-warning options-btn pause" hidden>Pause</button>
    <button type="button" class="btn btn-outline-danger options-btn stop" hidden>Stop</button>
  </div>`
  }
}

class AlarmClock {
  constructor() {
    increaseButtons = document.getElementsByClassName(`button`);
  }

  render() {
    return `<div class="hours time-div">
              <button class="button increase">🔼</button>
              <span class="time">00</span>
              <button class="button decrease">🔽</button>
            </div>
            <span class="time">:</span>
            <div class="mins time-div">
              <button class="button increase">🔼</button>
              <span class="time">00</span>
              <button class="button decrease">🔽</button>
            </div>
            <div class="options">
              <button type="button" class="btn btn-outline-primary options-btn set">Set Alarm</button>
              <button type="button" class="btn btn-outline-warning options-btn snooze" hidden>Snooze</button>
              <button type="button" class="btn btn-outline-danger options-btn stop" hidden>Stop</button>
            </div>`;
  }
}