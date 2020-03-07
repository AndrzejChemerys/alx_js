$(document).ready(function(){

	$('span').click(function(){
		
		let id = $(this).parent().attr('id');
		let class_ = $(this).attr('class');
		
		if(class_ == "dodaj"){
			$('#napisTestowy').addClass(id);
		}
		else {
			$('#napisTestowy').removeClass(id);
		}
	});
});