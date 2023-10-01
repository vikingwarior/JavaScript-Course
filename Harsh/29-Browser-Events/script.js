let btn = document.getElementById("btn");
let btnDiv = document.getElementById("btn-container");

//Browser events -> Any change in the current context of the loaded web page(for example a mouse-click, a key input, cursor moving to a specific location) is called as an event, these events can be used to manipulate the behavior of the website or performing a desired operation after a certain set of actions.

btn.onclick = () => {
    alert("button clicked!");
}

btnDiv.onmousemove = () => {
    btn.disabled = !btn.disabled;
}

btn.onkeydown = () => {
    document.body.appendChild(btn);
}