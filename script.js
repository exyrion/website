function main(){
	$('.nav li').on('click', function() {
    	$(this).parent().find('.active').removeClass('active');
    	$(this).addClass('active');
	});
}

$(document).ready(main)