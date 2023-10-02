const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let watchFace = document.getElementById("watchFace");
let watchButton = document.getElementById("watch");
let stopwatchButton = document.getElementById("stopwatch");
let timerButton = document.getElementById("timer");

// This functions creates parameters for a basic clock
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

const renderStopwatch = () => {
    stopwatchButton.hidden = true; 
    watchButton.hidden = false;    
    timerButton.hidden = false;
    clearInterval(intializeClock);
    watchFace.innerHTML = "";
}


let intializeClock = setInterval(() => renderClock(watchFace), 500);

stopwatchButton.addEventListener('click',() => renderStopwatch())