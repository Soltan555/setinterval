let body = document.getElementById("bod");
let btn = document.getElementById("btn")
let colors = ["blue", "red", "green", "black", "pink", "indigo", "aqua", "yellow"]






setInterval(color, 500);

color();

function color() {

    let rand = Math.floor(Math.random() * colors.length);
    let secilenreng = colors[rand];
    body.style.backgroundColor = secilenreng



}