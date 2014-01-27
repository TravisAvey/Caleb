(function() {
	var top = $('.top'),
		htmlBody = $('html body');

	$(window).scroll(function() {
		if ($(this).scrollTop()) {
			top.fadeIn(300);
		} else {
			top.fadeOut(300);
		}
	});
	top.on('click', function() {
		htmlBody.animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
	htmlBody.addCSS('background', 'red');
	console.log('umm.. hello');

})();