$(document).ready(function () {
	$(window).scroll(function() {
	  if ($(document).scrollTop() > 100) {
	    $('#navbar').addClass('color-change');
	    $('.nav-item').addClass('height-change');
	  } else {
	    $('#navbar').removeClass('color-change');
	    $('.nav-item').removeClass('height-change');
	  }
	});
})