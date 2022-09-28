const destination = document.querySelector(".destination__pics");
let item1 = document.querySelector(".indicator__item1");
let item2 = document.querySelector(".indicator__item2");
let item3 = document.querySelector(".indicator__item3");
destination.scrollLeft = 600;
item1.style.opacity = 1.0;

destination.addEventListener("scroll", function () {
	if (destination.scrollLeft < 500) {
		item1.style.opacity = 1.0;
		item2.style.opacity = 0.5;
		item3.style.opacity = 0.5;
	}
	if (destination.scrollLeft < 1000 && destination.scrollLeft > 500) {
		item1.style.opacity = 0.5;
		item2.style.opacity = 1.0;
		item3.style.opacity = 0.5;
	}
	if (destination.scrollLeft > 1001) {
		item1.style.opacity = 0.5;
		item2.style.opacity = 0.5;
		item3.style.opacity = 1.0;
	}
});
const togle = document.getElementById("fucker");
const loger = document.getElementById("loger");
const button = document.querySelector(".header__login");
const popup = document.querySelector(".pop_up");

button.addEventListener("click", function () {
	if (confirm("Паляниця це полуниця?")) {
		togle.className = "fuck_you";
	} else {
		loger.className = "pop1";
	}
});
window.addEventListener("click", function (e) {
	if (e.target == togle || e.target == loger) {
		togle.className = "fuck";
		loger.className = "pop";
	}
});
