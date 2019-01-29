$(document).ready(function () {
	var navbar = $("#navbar");
	if ($("#header").is('*')) {
		var elem = $('#header');
		var offset = elem.offset();
		var leftValue = offset.left;
		var topValue =  offset.top + elem.height();
		var width = elem.width();
	$(window).scroll(function (event) {
		var y = $(this).scrollTop();
		if (y >= topValue) {  
		 if ($('#header').hasClass('fixed')){    
		 }else{
		    $('#header').addClass('fixed');
		    $('#header').css({
		        top: '-60px',
		        width:width,
		    });
		     $('#header').animate({ 
		    top: '0',
		}, 500, function() {    
	        });
	}
	} else {    
	if ($('#header').hasClass('fixed')){        
	$('#header').removeClass('fixed');
	$('#header').fadeOut('fast', function(){ 
	 $('#header').fadeIn('fast');
	});
	    }
	    }
	  });
	}
})