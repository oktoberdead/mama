let mama = document.getElementById("mat");
mama.style.left = (window.innerWidth - 300) / 2 + "px";
mama.style.top = (window.innerHeight - 80) / 2 + "px";
mama.style.transition = "all 1s";

let rot = 5;
let plus = 5;

function e(){
mama.style.transform = "rotate("+ rot+ "deg)";
rot += plus;
if(plus < 100)
plus += 0.5;
setTimeout (e, 1);
}

setTimeout(e, 1000);