(function() {
	var top = $('.top'),
	      htmlBody = $('html body'),
	      mainNav = $('#menu'),
	      nav = $('#nav-menu'),
	      win = $(window);
	// remove .no-js from body..
	$('body').removeClass('no-js');

	if (win.width() < 600) {
	      nav.addClass('hidden-menu');
	      mainNav.css('padding', '1em');
	      // call a function that causes the button to display the menu
	}

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);
	    htmlBody.stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	// this checks if the window is at the top, if it isn't then fade in the to top button
	win.scroll(function() {
		if ($(this).scrollTop()) {
			top.fadeIn(300);
		} else {
			top.fadeOut(300);
		}
	});

	//this takes the window to the top on click of to top button
	top.on('click', function() {
		htmlBody.animate({
			scrollTop: 0
		}, 1000);
		return false;
	});

})();