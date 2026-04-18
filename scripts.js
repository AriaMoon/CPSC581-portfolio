//clock  logic
console.log("clock element:", document.getElementById("clock"));

function updateClock() {
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  document.getElementById("clock").textContent = hours + ":" + minutes;/**/
  /*document.getElementById("clock").textContent = "working";*/
}

setInterval(updateClock, 1000);
updateClock();

//close window logic
const icon = document.getElementById("about-icon");
const windowEl = document.getElementById("about-window");

icon.addEventListener("click", () => {//makes whatever visible
    windowEl.style.display = "block";
});

document.querySelector(".close-button").addEventListener("click", () => {
    windowEl.style.display="none";
});


//draggin logic
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