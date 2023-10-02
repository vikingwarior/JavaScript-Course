const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let watchFace = document.getElementById("watchFace");
let watchButton = document.getElementById("watch");
let stopwatchButton = document.getElementById("stopwatch");
let timerButton = document.getElementById("timer");

let intervalId; // Variable to store the interval ID

// This function creates parameters for a basic clock
const renderClock = (clockFace) => {
    clockFace.innerHTML = "";
    let DateObject = new Date();
    let date = document.createElement("div");
    let time = document.createElement("div");

    date.innerHTML = `${weekDays[DateObject.getDay()]}, ${months[DateObject.getMonth()]} ${DateObject.getDate()}   ${DateObject.getFullYear()}`;
    time.innerHTML = `${DateObject.getHours()} : ${DateObject.getMinutes()} : ${DateObject.getSeconds()}`;

    clockFace.appendChild(date);
    clockFace.appendChild(time);
}

// Function to initialize the clock and store the interval ID
const initializeClock = () => {
    watchButton.hidden = true;    
    stopwatchButton.hidden = false; 
    timerButton.hidden = false;
    intervalId = setInterval(() => renderClock(watchFace), 500);
}

// initializeClock();

// Logic For Stopwatch Begins here:
let startBtn, pauseBtn, resetBtn;

// Stopwatch Counter Variables
let StopwatchMinutes = 0, StopwatchHours = 0, StopwatchSeconds = 0;

let StopwatchMinutesInterval, StopwatchHoursInterval, StopwatchSecondsInterval;

// Functions to 
let intiateStopwatchCounter = () => {
    
    StopwatchHoursInterval = setInterval(() =>{
        StopwatchHours += 1
    },3600000);

    StopwatchMinutesInterval = setInterval(() =>{
        StopwatchMinutes += 1
    },60000);
  
    StopwatchSecondsInterval = setInterval(() =>{
        StopwatchSeconds += 1;
        updateStopwatch();
    },1000);
        
    let updateStopwatch = () =>{
        document.getElementById('stopwatchFace').firstChild.remove();
        document.getElementById('stopwatchFace').insertAdjacentText('afterbegin', `${StopwatchHours} : ${StopwatchMinutes} : ${StopwatchSeconds}`);
    }
}
let pauseStopwatchCounter = () => {
    clearInterval(StopwatchHoursInterval);
    clearInterval(StopwatchMinutesInterval);
    clearInterval(StopwatchSecondsInterval);
}

// Function to render stopwatch 
const renderStopwatch = () => {
    stopwatchButton.hidden = true; 
    watchButton.hidden = false;    
    timerButton.hidden = false;

    clearInterval(intervalId); // Clear the interval using the stored ID
    watchFace.innerHTML = "<b>Stopwatch</b>"
    
    resetStopwatchUI();

    let stopWatchBtnDiv = document.createElement("div");
    stopWatchBtnDiv.id = "stopWatchBtnDiv";
    stopWatchBtnDiv.innerHTML = `<button id="startBtn">Start</button>
                                 <button id="pauseBtn">Pause</button>
                                 <button id="resetBtn">Reset</button>`;

    document.getElementById("stopwatchFace").appendChild(stopWatchBtnDiv);

    startBtn = document.getElementById("startBtn");
    pauseBtn = document.getElementById("pauseBtn");
    resetBtn = document.getElementById("resetBtn");

    startBtn.addEventListener('click', () => intiateStopwatchCounter());
    pauseBtn.addEventListener('click', () => pauseStopwatchCounter());
    resetBtn.addEventListener('click', () => renderStopwatch());
}

const resetStopwatchUI = () => {

    pauseStopwatchCounter();

    StopwatchMinutes = 0;
    StopwatchHours = 0; 
    StopwatchSeconds = 0;

    let stopwatchFace = document.createElement("div");
    stopwatchFace.id = "stopwatchFace";
    stopwatchFace.innerHTML = "0 : 0 : 0";
    
    watchFace.appendChild(stopwatchFace);
}

// Adding event listeners to the buttons to manipulate states
watchButton.addEventListener('click', () => initializeClock());
stopwatchButton.addEventListener('click', () => renderStopwatch());
timerButton.addEventListener('click', () => renderTimer());

renderStopwatch();