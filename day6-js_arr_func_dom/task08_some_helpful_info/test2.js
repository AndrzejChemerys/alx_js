document.addEventListener("DOMContentLoaded", function () {

	/*
	document.querySelector("p#test1").onclick = function(){
		test();
	}
	*/

	document.querySelector("p#test1").addEventListener('click', function () {
		test();
	});

	document.querySelector("p#test2").onclick = function () {
		alert("22222");
	}

	document.querySelector("p.test3").onclick = function () {
		alert("33333");
	}
});

function test() {
	alert("88888888888888888");
}