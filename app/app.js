// control menu bar
const menuBtn = document.getElementById("menuBar");
const sideBar = document.getElementById("sideBar");

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("open");
    sideBar.classList.toggle("open");
});

// calculations
var display = document.getElementById("display");

function compute() {
    //replacing symbols
    value = display.value.replaceAll('÷', "/");
    value = value.replaceAll('x', "*");
    //calculate and  display the answer
    display.value=eval(value);
}