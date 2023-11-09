const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let watchFace = document.getElementById("watchFace");
let watchButton = document.getElementById("watch");
let stopwatchButton = document.getElementById("stopwatch");
let timerButton = document.getElementById("timer");

let clockInterval; // Variable to store the interval ID

// This function creates parameters for a basic clock
const renderClock = (clockFace) => {
  clockFace.innerHTML = "";
  let DateObject = new Date();
  let date = document.createElement("div");
  let time = document.createElement("div");

  date.innerHTML = `${weekDays[DateObject.getDay()]}, ${
    months[DateObject.getMonth()]
  } ${DateObject.getDate()}   ${DateObject.getFullYear()}`;
  time.innerHTML = `${DateObject.getHours()} : ${DateObject.getMinutes()} : ${DateObject.getSeconds()}`;

  clockFace.innerHTML = "Clock";
  clockFace.appendChild(date);
  clockFace.appendChild(time);
};

// Function to initialize the clock and store the interval ID
const initializeClock = () => {
  watchButton.hidden = true;
  stopwatchButton.hidden = false;
  timerButton.hidden = false;
  clockInterval = setInterval(() => renderClock(watchFace), 500);
};

////////////////////////////////////
//Logic For Stopwatch Begins here://
////////////////////////////////////
let startBtn, pauseBtn, resetBtn;

// Stopwatch Counter Variables
let StopwatchMinutes = 0;
let StopwatchHours = 0;
let StopwatchSeconds = 0;
let StopwatchMilliseconds = 0;

let StopwatchCounterInterval;

// Function to render stopwatch
const renderStopwatch = () => {
  stopwatchButton.hidden = true;
  watchButton.hidden = false;
  timerButton.hidden = false;

  clearInterval(clockInterval); // Clear the interval using the stored ID
  clearInterval(StopwatchCounterInterval);

  watchFace.innerHTML = "Stopwatch";

  resetStopwatchUI();
};

const resetStopwatchUI = () => {
  StopwatchMinutes = 0;
  StopwatchHours = 0;
  StopwatchSeconds = 0;
  StopwatchMilliseconds = 0;

  let stopwatchFace = document.createElement("div");
  stopwatchFace.id = "stopwatchFace";
  stopwatchFace.innerHTML = "00 : 00 : 00.00";

  watchFace.appendChild(stopwatchFace);
  renderStopwatchButtons();
};

let renderStopwatchButtons = () => {
  let stopWatchBtnDiv = document.createElement("div");
  stopWatchBtnDiv.id = "stopWatchBtnDiv";
  stopWatchBtnDiv.innerHTML = `<button id="startBtn">Start</button>
                            <button id="pauseBtn" hidden>Pause</button>
                            <button id="resetBtn">Reset</button>`;

  document.getElementById("watchFace").appendChild(stopWatchBtnDiv);

  startBtn = document.getElementById("startBtn");
  pauseBtn = document.getElementById("pauseBtn");
  resetBtn = document.getElementById("resetBtn");

  startBtn.classList.add("btn");
  pauseBtn.classList.add("btn");
  resetBtn.classList.add("btn");

  startBtn.classList.add("btn-outline-success");
  pauseBtn.classList.add("btn-outline-warning");
  resetBtn.classList.add("btn-outline-info");

  startBtn.addEventListener("click", () => intiateStopwatchCounter());
  pauseBtn.addEventListener("click", () => pauseStopwatchCounter());
  resetBtn.addEventListener("click", () => renderStopwatch());
};

// Functions to track and update stopwatch
let intiateStopwatchCounter = () => {
  pauseBtn.hidden = false;
  startBtn.hidden = true;

  StopwatchCounterInterval = setInterval(() => {
    StopwatchMilliseconds += 1;
    if (StopwatchMinutes === 59 && StopwatchSeconds === 59) {
      StopwatchHours += 1;
      StopwatchMinutes = 0;
      StopwatchSeconds = 0;
    }
    if (StopwatchSeconds === 59) {
      StopwatchMinutes += 1;
      StopwatchSeconds = 0;
    }
    if (StopwatchMilliseconds === 99) {
      StopwatchSeconds += 1;
      StopwatchMilliseconds = 0;
    }

    updateStopwatch();
  }, 10);

  let updateStopwatch = () => {
    document.getElementById(
      "stopwatchFace"
    ).innerHTML = `${StopwatchHours} : ${StopwatchMinutes} : ${StopwatchSeconds}.${StopwatchMilliseconds}`;
  };
};
let pauseStopwatchCounter = () => {
  pauseBtn.hidden = true;
  startBtn.hidden = false;

  clearInterval(StopwatchCounterInterval);
};

/////////////////////////////////
// Logic For Timer Begins here://
/////////////////////////////////

let TimerFace = document.createElement("div");

let timerMinutes;
let timerHours;
let timerSeconds;
let timerMilliseconds = 100;

let timerCounterInterval;

const renderTimer = () => {
  timerButton.hidden = true;
  stopwatchButton.hidden = false;
  watchButton.hidden = false;

  clearInterval(clockInterval); // Clear the interval using the stored ID

  watchFace.innerHTML = "Timer";

  resetTimerUI();
};

const resetTimerUI = () => {
  clearInterval(timerCounterInterval);

  timerHours = 0;
  timerMinutes = 0;
  timerSeconds = 0;
  timerMilliseconds = 0;

  TimerFace.id = "TimerFace";
  TimerFace.innerHTML = `
    <input type='number' value='0' min='0' id='timerHoursBox' class='timerBox'> : <input type='number' value='0' min='0' id='timerMinutesBox' class='timerBox'> : <input type='number' value='0' min='0' id='timerSecondsBox' class='timerBox'>.00`;

  watchFace.appendChild(TimerFace);

  renderTimerButtons();
};

let renderTimerButtons = () => {
  let stopWatchBtnDiv = document.createElement("div");
  stopWatchBtnDiv.id = "stopWatchBtnDiv";
  stopWatchBtnDiv.innerHTML = `<button id="startBtn">Start</button>
                               <button id="pauseBtn" hidden>Pause</button>
                               <button id="resetBtn">Reset</button>`;

  document.getElementById("watchFace").appendChild(stopWatchBtnDiv);

  startBtn = document.getElementById("startBtn");
  pauseBtn = document.getElementById("pauseBtn");
  resetBtn = document.getElementById("resetBtn");

  startBtn.classList.add("btn");
  pauseBtn.classList.add("btn");
  resetBtn.classList.add("btn");

  startBtn.classList.add("btn-outline-success");
  pauseBtn.classList.add("btn-outline-warning");
  resetBtn.classList.add("btn-outline-info");

  startBtn.addEventListener("click", () => intiateTimerCounter());
  pauseBtn.addEventListener("click", () => pauseTimerCounter());
  resetBtn.addEventListener("click", () => renderTimer());
};

let intiateTimerCounter = () => {
  timerHours = document.getElementById("timerHoursBox").value;
  timerMinutes = document.getElementById("timerMinutesBox").value;
  timerSeconds = document.getElementById("timerSecondsBox").value;

  pauseBtn.hidden = false;
  startBtn.hidden = true;

  timerCounterInterval = setInterval(() => {
    updateTimer();
    if (
      timerHours == 0 &&
      timerMilliseconds == 0 &&
      timerSeconds == 0 &&
      timerMinutes == 0
    ) {
      clearInterval(timerCounterInterval);
      return;
    }

    if (timerMilliseconds == 0 && timerSeconds == 0 && timerMinutes == 0) {
      timerHours -= 1;
      timerMinutes = 59;
      timerSeconds = 59;
      timerMilliseconds = 100;
      updateTimer();
    }

    if (timerMilliseconds == 0 && timerSeconds == 0) {
      timerMinutes -= 1;
      timerSeconds = 59;
      timerMilliseconds = 100;
      updateTimer();
    }

    if (timerMilliseconds == 0) {
      timerSeconds -= 1;
      timerMilliseconds = 100;
      updateTimer();
    }

    timerMilliseconds -= 1;
  }, 10);

  let updateTimer = () => {
    document.getElementById(
      "TimerFace"
    ).innerHTML = `${timerHours} : ${timerMinutes} : ${timerSeconds}.${timerMilliseconds}`;
  };
};

let pauseTimerCounter = () => {
  clearInterval(timerCounterInterval);
  pauseBtn.hidden = true;
  startBtn.hidden = false;
  document.getElementById("TimerFace").innerHTML = `
  <input type='number' value='${timerHours}' min='0' id='timerHoursBox' class='timerBox'> : <input type='number' value='${timerMinutes}' min='0' id='timerMinutesBox' class='timerBox'> : <input type='number' value='${timerSeconds}' min='0' id='timerSecondsBox' class='timerBox'>.${timerMilliseconds}`;
};

// Adding event listeners to the buttons to manipulate states
watchButton.addEventListener("click", () => initializeClock());
stopwatchButton.addEventListener("click", () => renderStopwatch());
timerButton.addEventListener("click", () => renderTimer());

initializeClock();
