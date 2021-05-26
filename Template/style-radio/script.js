$(document).ready(function(){
	
	$('.custom-control-input').click(function(){
		$('.custom-control').removeClass('active');
		
		if($(this).prop("checked")){
			$(this).parent('.custom-control').addClass('active');
		}
		
	});

});