const icon = document.getElementById("about-icon");
const windowEl = document.getElementById("about-window");

icon.addEventListener("click", () => {//makes whatever visible
    windowEl.style.display = "block";
});

document.querySelector(".close-button").addEventListener("click", () => {
    windowEl.style.display="none";
});

let activeWindow = null;
let offsetX = 0;
let offsetY = 0;

document.querySelectorAll(".title-bar").forEach(bar => {
    bar.addEventListener("mousedown", (e) => {
        activeWindow = bar.parentElement;
        offsetX = e.clientX - activeWindow.offsetLeft;
        offsetY = e.clientY - activeWindow.offsetTop;
    });
});

document.addEventListener("mousemove", (e) => {
    if(activeWindow){
        activeWindow.style.left = (e.clientX - offsetX) + "px";
        activeWindow.style.top = (e.clientY - offsetY) + "px";
    }
});

document.addEventListener("mouseup", () => {
    activeWindow = null;
});