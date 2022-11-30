//Get the variables
const btn = document.getElementById("btn");
const eleBody = document.getElementById("body");

function colorChanger() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}

btn.addEventListener("click", colorChanger);
colorChanger();





