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

// sticky bar
const stickyBar = document.getElementById("stickyBar");
let stickyPinTop = document.getElementsByClassName("stickyPin-top")[0];
let positioning = stickyPinTop.offsetTop;
let endPin = document.getElementById("end-pin");
let endPositioning = endPin.offsetTop;
const aboutMe = document.getElementById("about-me");

function positionFixed() {
    let breakpoint = window.matchMedia("(min-width: 991px)");
	if (breakpoint.matches) {
		if (window.pageYOffset >= positioning) {
			stickyBar.classList.add("halt");
			// aboutMe.style.marginLeft = "auto";
		} else {
			stickyBar.classList.remove("halt");
			// aboutMe.style.marginLeft = "auto";
		}

		if (window.pageYOffset >= endPositioning) {
			stickyBar.classList.add("continue-aside");
		} else {
			stickyBar.classList.remove("continue-aside");
		}
	}
}

window.onscroll = function () {
	positionFixed();
	backTotop();
};

window.onresize = function () {
	positionFixed();
};
