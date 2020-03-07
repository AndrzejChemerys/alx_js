$(document).ready(function(){
	
	$('p').click(function(){
		let id = $(this).attr('id');
		$('div').css("background", id);
	});
	
//	let x = "";
//	$('div').mouseover(function(){
//		x += ' <img src="https://picsum.photos/200"> '
//		$('#img').html(x);
//	});
	
});