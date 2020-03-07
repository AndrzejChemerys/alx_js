$(document).ready(function(){
	$("#oblicz").click(function(){
		dodaj();
	});
});

function dodaj(){
	$.ajax ({
		type: "POST",
		url: "01.php",
		data: { 
			"liczba1":$("#liczba1").val(),
			"znak":$("#znak").val(),
			"liczba2":$("#liczba2").val()
		},
		dataType: "json",
		success: function(dane){
			console.log(dane+" - działa!");
		},
		beforeSend: function(){
			//$("#preloader").css("display", "block");
		},
		complete: function(){
			//$("#preloader").css("display", "none");
		},
		error: function(xhr){
			console.log(xhr.responseText);
		}
	})
}