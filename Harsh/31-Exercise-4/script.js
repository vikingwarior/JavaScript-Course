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
let StopwatchMinutes = 0, StopwatchHours = 0, StopwatchSeconds = 0, StopwatchMilliseconds = 0;

let StopwatchCounterInterval;

// Functions to track and update stopwatch
let intiateStopwatchCounter = () => {
    pauseBtn.hidden = false;
    startBtn.hidden = true;

    StopwatchCounterInterval = setInterval(() =>{
            StopwatchMilliseconds += 1;
            if (StopwatchMinutes === 59 && StopwatchSeconds === 59) {StopwatchHours += 1; StopwatchMinutes = 0; StopwatchSeconds = 0;}    
            if (StopwatchSeconds === 59 ) {StopwatchMinutes += 1; StopwatchSeconds = 0;}    
            if (StopwatchMilliseconds === 99 ) {StopwatchSeconds += 1; StopwatchMilliseconds = 0;}    

            updateStopwatch();
        },10);
        
    let updateStopwatch = () =>{
        document.getElementById('stopwatchFace').firstChild.remove();
        document.getElementById('stopwatchFace').insertAdjacentText('afterbegin', `0${StopwatchHours} : 0${StopwatchMinutes} : ${StopwatchSeconds}.${StopwatchMilliseconds}`);
    }
}
let pauseStopwatchCounter = () => {
    clearInterval(StopwatchCounterInterval);
}

// Function to render stopwatch 

let renderCounterButtons = () => {
    let stopWatchBtnDiv = document.createElement("div");
    stopWatchBtnDiv.id = "stopWatchBtnDiv";
    stopWatchBtnDiv.innerHTML = `<button id="startBtn">Start</button>
                                 <button id="pauseBtn" hidden>Pause</button>
                                 <button id="resetBtn">Reset</button>`;

    document.getElementById("stopwatchFace").appendChild(stopWatchBtnDiv);

    startBtn = document.getElementById("startBtn");
    pauseBtn = document.getElementById("pauseBtn");
    resetBtn = document.getElementById("resetBtn");

    startBtn.addEventListener('click', () => intiateStopwatchCounter());
    pauseBtn.addEventListener('click', () => pauseStopwatchCounter());
    resetBtn.addEventListener('click', () => renderStopwatch());
}

const renderStopwatch = () => {
    stopwatchButton.hidden = true; 
    watchButton.hidden = false;    
    timerButton.hidden = false;

    clearInterval(intervalId); // Clear the interval using the stored ID
    watchFace.innerHTML = "<b>Stopwatch</b>"
    
    resetCounterwatchUI();
}

const resetCounterwatchUI = () => {

    pauseStopwatchCounter();

    StopwatchMinutes = 0;
    StopwatchHours = 0; 
    StopwatchSeconds = 0;
    StopwatchMilliseconds = 0;

    let stopwatchFace = document.createElement("div");
    stopwatchFace.id = "stopwatchFace";
    stopwatchFace.innerHTML = "00 : 00 : 00.000";
    
    watchFace.appendChild(stopwatchFace);
    renderCounterButtons();
}

// Adding event listeners to the buttons to manipulate states
watchButton.addEventListener('click', () => initializeClock());
stopwatchButton.addEventListener('click', () => renderStopwatch());
timerButton.addEventListener('click', () => renderTimer());

renderStopwatch();