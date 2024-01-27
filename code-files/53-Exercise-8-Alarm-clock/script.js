class Clock {
  static render() {
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
  static render() {
    return `<div class="time-elements">
              <div class="time-div hours">
                <span class="time">00</span>
              </div>
              <span class="time">:</span>
              <div class="time-div mins">
                <span class="time">11</span>
              </div>
              <span class="time">:</span>
              <div class="time-div seconds">
                <span class="time">12</span>
              </div>
            </div>
            <div class="options">
              <button type="button" class="btn btn-outline-success options-btn start">Start</button>
              <button type="button" class="btn btn-outline-warning options-btn pause" hidden>Pause</button>
              <button type="button" class="btn btn-outline-danger options-btn stop">Stop</button hidden>
            </div>`
  }
}

class Timer {
  static render() {
    return `<div class="time-elements">
              <div class="time-div hours">
                <button class="button increase">🔼</button>
                <span class="time">00</span>
                <button class="button decrease">🔽</button>
              </div>
              <span class="time">:</span>
              <div class="time-div mins">
                <button class="button increase">🔼</button>
                <span class="time">11</span>
                <button class="button decrease">🔽</button>
              </div>
              <span class="time">:</span>
              <div class="time-div seconds">
              <button class="button increase">🔼</button>
                <span class="time">12</span>
              <button class="button decrease">🔽</button>  
              </div>
            </div>
            <div class="options">
              <button type="button" class="btn btn-outline-success options-btn start">Start</button>
              <button type="button" class="btn btn-outline-warning options-btn pause" hidden>Pause</button>
              <button type="button" class="btn btn-outline-danger options-btn stop" hidden>Stop</button>
            </div>`
  }
}

class AlarmClock {
  static render() {
    return `<div class="time-elements">
              <div class="time-div hours">
                <button class="button increase">🔼</button>
                <span class="time">00</span>
                <button class="button decrease">🔽</button>
              </div>
              <span class="time">:</span>
              <div class="time-div mins">
                <button class="button increase">🔼</button>
                <span class="time">11</span>
                <button class="button decrease">🔽</button>
              </div>
              <span class="time">:</span>
              <div class="time-div seconds">
                <span class="time">12</span>
              </div>
            </div>
            <div class="options">
              <button type="button" class="btn btn-outline-primary options-btn set">Set</button>
              <button type="button" class="btn btn-outline-warning options-btn snooze" hidden>Snooze</button>
              <button type="button" class="btn btn-outline-danger options-btn stop" hidden>Stop</button>
            </div>`;
  }
}

class BaseInterface {

}