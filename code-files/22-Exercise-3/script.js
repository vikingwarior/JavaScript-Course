let jokeList = ["I'm afraid for the calendar. Its days are numbered.",
"My wife said I should do lunges to stay in shape. That would be a big step forward.",
"Q:Why do fathers take an extra pair of socks when they go golfing? A: In case they get a hole in one!",
"Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera.",
"Q:What do a tick and the Eiffel Tower have in common? A:They're both Paris sites.",
"Q:What do you call a fish wearing a bowtie? A:Sofishticated.",
"Q:How do you follow Will Smith in the snow? A:You follow the fresh prints.",
"Q:If April showers bring May flowers, what do May flowers bring? A:Pilgrims.",
"I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along.",
"Q:How does dry skin affect you at work? A:You dont have any elbow grease to put into it."];

let jokePlaceHolder = document.getElementsByClassName("joke")[0];
console.log(jokePlaceHolder)

let jokeTeller = (num) => {
    jokePlaceHolder.innerHTML = jokeList[num];
}

jokeTeller(Math.floor(Math.random()*10));