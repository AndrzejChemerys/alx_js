document.addEventListener("DOMContentLoaded", function () {

	document.querySelector("button").addEventListener('click', function () {

		let zawartosc = document.querySelector("input[type='text']").value;
		let selectV = document.querySelector("select").value;
		let textareaV = document.querySelector("textarea").value;

		plec = document.querySelectorAll("input[name='plec']");
		for (let elem of plec) {
			if (elem.checked) {
				alert(elem.value);
			}
		}

		drink = document.querySelectorAll("input[name='drink']");
		for (let elem of drink) {
			if (elem.checked) {
				alert(elem.value);
			}
		}
		console.log(zawartosc, selectV, textareaV);
	});
});