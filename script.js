var bulb1 = document.querySelector("#bulb1");
var bulb2 = document.querySelector("#bulb2");
var bulb3 = document.querySelector("#bulb3");
var btn = document.querySelector("button");

var flag1 = 0;
var flag2 = 0;
var flag3 = 0;

btn.addEventListener("click", function () {
    if (flag1 == 0) {
        bulb1.style.backgroundColor = "yellow";
        flag1 = 1;
    } else {
        bulb1.style.backgroundColor = "transparent";
        flag1 = 0;
    }

    if (flag2 == 0) {
        bulb2.style.backgroundColor = "yellow";
        flag2 = 1;
    } else {
        bulb2.style.backgroundColor = "transparent";
        flag2 = 0;
    }

    if (flag3 == 0) {
        bulb3.style.backgroundColor = "yellow";
        flag3 = 1;
    } else {
        bulb3.style.backgroundColor = "transparent";
        flag3 = 0;
    }
});
