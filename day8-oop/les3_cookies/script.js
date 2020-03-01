document.addEventListener('DOMContentLoaded', function(){
	document.querySelector("#setCookie").addEventListener('click', function(){
		setCookie('ALX3', 'JavaScript', 10);
	})
	
	document.querySelector("#delCookie").addEventListener('click', function(){
		delCookie('ALX3');
	})
	
	document.querySelector("#showCookie").addEventListener('click', function(){
		showCookie('ALX3');
	})
});

function setCookie(cName, cValue, cEx) {
	let d = new Date();
	d.setTime(d.getTime()+(cEx * 24 * 60 * 60 * 1000));
	document.cookie = cName+'='+cValue+'; expires='+d.toUTCString();
}

function delCookie(cName, cValue) {
	let d = new Date();
	d.setTime(d.getTime() - 1);
	document.cookie = cName+'=; expires='+d.toUTCString();
}

function showCookie(cName) {
	let cookies = document.cookie;
	let cookiesTab = cookies.split("; ");
	console.log(cookiesTab);

	for(let i of cookiesTab) {
		let cookieTab = i.split('=');
		if(cookieTab[0] == cName) {
			console.log(cookieTab[0], cookieTab[1]);
			break;
		}
	}
}
