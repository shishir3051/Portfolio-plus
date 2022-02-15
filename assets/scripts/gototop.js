// go to top button
let toTopbtn = document.getElementsByClassName("goTop")[0];
let pin = document.getElementById("pin");
let startingPoint = pin.offsetTop;

function backTotop() {
    if (window.pageYOffset <= startingPoint) {
        toTopbtn.classList.add("goTop-hidden");
        toTopbtn.classList.remove("goTop");
    } else {
        toTopbtn.classList.add("goTop");
        toTopbtn.classList.remove("goTop-hidden");
    }
}

window.onscroll = function () {
    backTotop();
};