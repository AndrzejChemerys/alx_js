document.addEventListener("DOMContentLoaded", function () {

	document.querySelector("button#set").addEventListener('click', function () {

		let elem = document.querySelector("#test");
		elem.setAttribute("class", "cos");
	});

	document.querySelector("button#rem").addEventListener('click', function () {

		let elem = document.querySelector("#test");
		elem.removeAttribute("class", "cos");

	});
});