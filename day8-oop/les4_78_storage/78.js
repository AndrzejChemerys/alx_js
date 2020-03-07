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
	
	let dane = localStorage.getItem("Phonebook");
	console.log(dane);
	
	if (dane == null) {
		dane = [];
		
	} else {
		dane = JSON.parse(dane);
	}
	dane.push(contact);
	localStorage.setItem("Phonebook", JSON.stringify(dane));
	console.log(dane);
	
	showUsers();
}

function showUsers(){
	
	let daneJSON = localStorage.getItem('Phonebook');
	let dane = JSON.parse(daneJSON);
	let html = "<ul>";
	let counter = 0;
	if(dane!=null) { 
		for (let o of dane) {
			html += "<li>";
			html += o.name + " " + o.surname +" "+ o.phone;
			html += "<a href=# onclick='delUser("+counter+")'> usuń</a>";
			html += "</li>";
			counter++;
		}
	html += "</ul>";
	}
	document.querySelector("#showUser").innerHTML = html;
}

function delUser(userId) {
	let daneJSON = localStorage.getItem('Phonebook');
	let dane = JSON.parse(daneJSON);
	
	dane.splice(userId, 1);
	localStorage.setItem("Phonebook", JSON.stringify(dane));
	showUsers();
}

function delAll() {
	let daneJSON = localStorage.getItem('Phonebook');
	let dane = JSON.parse(daneJSON);
	localStorage.clear("Phonebook");
	showUsers();
}







