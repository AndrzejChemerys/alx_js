$(document).ready(function(){
	let counter=0;
	let x = "";
	$('img').mouseover(function(){
		counter++;
		$('span').text(counter);
		
		
		x += ' <img src="https://picsum.photos/200"> '
		$('div').html(x);
	});
});