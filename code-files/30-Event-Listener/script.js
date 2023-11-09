let btn = document.getElementById("btn");
let btnDiv = document.getElementsByClassName("btn-div")[0];

let clickCounter = 1;

const buttonClickAction = (num) => {
    switch (num) {

        case 1:
            btnDiv.classList.add("greenBackground");
            btn.innerHTML = "Click Again For a Surprise";
            break;
        
        case 2:
            document.body.classList.add("redBackground");
            btn.innerHTML = "Click Again to disable this button";
            break;
    
        case 3:
            btn.disabled = true;
        
        default:
            if (confirm("Do you want to restart?")) {location.reload();}
            break;
    }

    clickCounter += 1;
}

// Note -> btn.addEventListener('click', buttonClickAction(clickCounter)); 

//This declaration will not work because  we are invoking function immediately and passing its result to the addEventListener instead of passing a reference to the function. By wrapping it in an anonymous function or using bind, we ensure that the function is only executed when the button is clicked, adhering to the intended behavior of an event listener.

btn.addEventListener('click', () => buttonClickAction(clickCounter));