document.addEventListener("DOMContentLoaded", function () {

	document.querySelector("input[type='button']").addEventListener('click', function () {
		wyslij();
	});

});

checkInput = (el, validate) => {

	if (validate == true) {

		if (el == "") {
			alert("Wszystkie pola muszą być wypełnione!");
			return false;
		} else {
			return true
		}
	}
}

function wyslij() {

	let validate = true;

	let name = document.querySelector("input[name='imie']").value;
	document.querySelector("#imie").innerHTML = name;
	validate = checkInput(name, validate);

	let surName = document.querySelector("input[name='nazwisko']").value;
	document.querySelector("#nazwisko").innerHTML = surName;
	validate = checkInput(surName, validate);

	let workPlace = document.querySelector("select[name='miasto']").value;
	document.querySelector("#miasto").innerHTML = workPlace;
	//console.log(name, surName, workPlace);
	validate = checkInput(workPlace, validate);

	let techStuk = [];
	let techStukAdd = [];
	techStuk = document.querySelectorAll("input[type='checkbox']");
	for (let elem of techStuk) {
		if (elem.checked) {
			//console.log(elem.value);	
			techStukAdd.push(elem.value);
		}
	}
	//console.log(techStukAdd);
	document.querySelector("#technologie").innerHTML = techStukAdd;

	let titleJob = document.querySelector("input[name='stanowisko']").value;
	//console.log(titleJob);		
	document.querySelector("#stanowisko").innerHTML = titleJob;

	let noteField = document.querySelector("textarea[name='uwagi']").value;
	//console.log(noteField);
	document.querySelector("#uwagi").innerHTML = noteField;
}