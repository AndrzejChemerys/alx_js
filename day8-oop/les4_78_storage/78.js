class Contact {
	
	constructor(name, surname, phone) {
		this.name = name;
		this.surname = surname;
		this.phone = phone;
	}
}

function addUser() {
	let name = document.querySelector("#imie").value;
	let surname = document.querySelector("#nazwisko").value;
	let phone = document.querySelector("#telefon").value;
	
	let contact = new Contact(name, surname, phone);
	
	let date = localStorage.getItem("Phonebook");
	console.log(date);
	
	if (dane == null) {
		dane = [];
		
	} else {
		dane = JSON.parse(dane);
	}
	dane.push(contact);
	localStorage.setItem("Phonebook", JSON.stringify(contact));
	console.log(dane);
}

