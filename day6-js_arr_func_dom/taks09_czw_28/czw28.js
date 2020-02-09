document.addEventListener("DOMContentLoaded", function () {
	let li = document.querySelectorAll("li");
	for (let elem in li) {
		if (elem % 2 == 0) {
			li[elem].style.backgroundColor = "red";
		}
	}
	alert(li.length);
});