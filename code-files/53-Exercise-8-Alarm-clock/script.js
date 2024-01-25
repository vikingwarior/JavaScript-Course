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
  constructor() {}

  render() {
    return `<p class="day">MON</p>
        <p class="time">00:00:00</p>
        <div class="abbrevation">
          <p class="format selected">AM</p>
          <p class="format">PM</p>
        </div>`;
  }
}
