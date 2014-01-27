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

	$("#jquery_jplayer_1").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "media/test.mp3",
            ogg: "media/test.ogg"
          });
        },
        swfPath: "/js",
        supplied: "mp3, ogg"
      });

})();