const icon = document.getElementById("about-icon");
const windowEl = document.getElementById("about-window");

icon.addEventListener("click", () => {//makes whatever visible
    windowEl.style.display = "block";
});

document.querySelector(".close-button").addEventListener("click", () => {
    windowEl.style.display="none";
});