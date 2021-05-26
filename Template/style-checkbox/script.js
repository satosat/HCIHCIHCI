$(document).ready(function(){
	
	$('.custom-control-input').click(function(){
		if($(this).prop("checked")){
			$(this).parent('.custom-control').addClass('active');
		}else{
			$(this).parent('.custom-control').removeClass('active');
		}
		
	});

});