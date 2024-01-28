class Clock {
  static render(divRef) {
    divRef.innerHTML = `<div class="day">
                          <p class="day">MON</p>
                        </div>
                        <div class="time-elements">
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
    console.log(`success`); 
  }
}

class Stopwatch {
  static render(divRef) {
    divRef.innerHTML = `<div class="time-elements">
                          <div class="time-div hours">
                            <span class="time">00</span>
                          </div>
                          <span class="time">:</span>
                          <div class="time-div mins">
                            <span class="time">00</span>
                          </div>
                          <span class="time">:</span>
                          <div class="time-div seconds">
                            <span class="time">00</span>
                          </div>
                        </div>
                        <div class="options">
                          <button type="button" class="btn btn-outline-success options-btn start">Start</button>
                          <button type="button" class="btn btn-outline-warning options-btn pause" hidden>Pause</button>
                          <button type="button" class="btn btn-outline-danger options-btn stop">Stop</button hidden>
                        </div>`
    console.log(`Stopwatch`);
  }
}

class Timer {
  static render(divRef) {
    divRef.innerHTML =  `<div class="time-elements">
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
    console.log(`Timer`);
  }
}

class AlarmClock {
  static render(divRef) {
    divRef.innerHTML = `<div class="time-elements">
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
    console.log(`alarm`);
  }
}

class BaseInterface {
  #LAST_OPEN_MODE_ENTRY_NAME;

  constructor(divRef) {
    this.divRef = divRef;
    this.#LAST_OPEN_MODE_ENTRY_NAME = `lastOpenMode`;
    this.lastOpenMode = this.getLastOpenMode();
    console.log(this.getLastOpenMode());
    this.addEventListenerToBtns();
    this.initializeUI(this.divRef, this.lastOpenMode);
  }

  getLastOpenMode = () => {
    return localStorage.getItem(this.#LAST_OPEN_MODE_ENTRY_NAME) === null ?
      `clock` && localStorage.setItem(this.#LAST_OPEN_MODE_ENTRY_NAME, `clock`) :
      localStorage.getItem(this.#LAST_OPEN_MODE_ENTRY_NAME);
  }

  addEventListenerToBtns() {
    document.querySelector(`input.btn-check.clock`).addEventListener(`click`, () => {
      Clock.render(this.divRef);
      this.updateLastOpenMode(`clock`);
    });
    document.querySelector(`input.btn-check.stopwatch`).addEventListener(`click`, () => {
      Stopwatch.render(this.divRef);
      this.updateLastOpenMode(`stopwatch`)
    });
    document.querySelector(`input.btn-check.timer`).addEventListener(`click`, () => {
      Timer.render(this.divRef);
      this.updateLastOpenMode(`timer`);
    })
    document.querySelector(`input.btn-check.alarm`).addEventListener(`click`, () => {
      AlarmClock.render(this.divRef);
      this.updateLastOpenMode(`alarm`);
    });
  }

  updateLastOpenMode = (modeName) => localStorage.setItem(this.#LAST_OPEN_MODE_ENTRY_NAME, modeName);

  initializeUI(divRef, lastOpenMode) {
    switch (lastOpenMode) {
      case `clock`:
        Clock.render(divRef);
        break;

      case `stopwatch`:
        Stopwatch.render(divRef);
        break;

      case `timer`:
        Timer.render(divRef);
        break;

      case `alarm`:
        AlarmClock.render(divRef);
        break;
    }
  }

}

new BaseInterface(document.querySelector(`div.timebox`));