const weekDays = ["Sunday", "Mon", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let date = document.getElementById("date"); 
let time = document.getElementById("time");

const renderDefaultClock = () => {
    let DateObject = new Date();
    date.innerHTML = `${weekDays[DateObject.getDay()]}, ${months[DateObject.getMonth()]} ${DateObject.getDate()}   ${DateObject.getFullYear()}`;
    time.innerHTML = `${DateObject.getHours()} : ${DateObject.getMinutes()} : ${DateObject.getSeconds()}`;
}

let clockFace = setInterval(() => renderDefaultClock(), 500);