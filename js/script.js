(function() {
	var top = $('.top'),
	      htmlBody = $('html body'),
	      mainNav = $('#menu'),
	      nav = $('#nav-menu'),
	      win = $(window),
	      button = $('#menu-button'),
	      webmSource = $('#webmSource'),
	      mp4Source = $('#mp4Source'),
	      oggSource = $('#oggSource'),
	      noFlexVid = $('.no-flexbox video'),
	      videoTitle = document.getElementById('video-title'),
	      noScript = $('#noscript'),
	      countryLink = document.getElementById('country'),
	      jazzLink = document.getElementById('jazzy'),
	      nervousLink = document.getElementById('nervous'),
	      video = document.getElementById('html5-video'),
	      videoControls = $('#video-controls'),
	      playButton = document.getElementById('video-play'),
	      pauseButton = document.getElementById('video-pause'),
	      muteButton = $('#mute'),
	      fullScreenButton = document.getElementById('full-screen'),
	      videoListImg = $('.video-details'),
	      seekBar = document.getElementById('seek-bar'),
	      volumeBar = document.getElementById('volume-bar');
	// remove .no-js from body..
	$('body').removeClass('no-js');

	noScript.hide();
	


	if (win.width() < 600) {
	      nav.addClass('hidden-menu').find('li').css('text-align', 'left');
	      mainNav.css('padding', '1em');
	      	button.on('click', function() {
		mainNav.animate({
			height: '+=73'
		}, 'slow');
		button.hide();
		nav.show('slow');		
	});
	nav.find('a').on('click', function() {
		mainNav.animate({
			height: '-=73'
		}, 200);
		button.show();
		nav.hide();
	});
	      
	} else {
		button.hide();
		nav.removeClass('hidden-menu');
	}


	/**
	*  Animation for links
	*
	*/
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

	/**
	*  Video Player controls
	*/
	//event listener for play/pause

	// if no flexbox support, use browser video controls
	if (noFlexVid.length) {
		$('video').attr('controls', 'true');
		videoControls.hide();
	}
	playButton.addEventListener('click', function() {
		video.play();
		
	});
	pauseButton.addEventListener('click', function() {
		video.pause();
	});
	muteButton.on('click', function() {
		if (video.muted == false) {
			video.muted = true;
			muteButton.removeClass('fa-volume-up');
			muteButton.addClass('fa-volume-off');
		} else if (video.muted == true) {
			video.muted = false;
			muteButton.removeClass("fa-volume-off");
			muteButton.addClass("fa-volume-up");

		}
	});
	fullScreenButton.addEventListener('click', function() {
		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen();
		} else if (video.webkitRequestFullScreen) {
			video.webkitRequestFullScreen();
		}
	});
	seekBar.addEventListener('change', function() {
		var time = video.duration * (seekBar.value / 100);

		video.currentTime = time;
	});
	video.addEventListener('timeupdate', function() {
		var value = (100 / video.duration) * video.currentTime;

		seekBar.value = value;
	});
	seekBar.addEventListener('mousedown', function() {
		video.pause();
	});
	seekBar.addEventListener('mouseup', function() {
		video.play();
	});
	volumeBar.addEventListener('change', function() {
		video.volume = volumeBar.value;
	});
	countryLink.addEventListener('click', function() {
		video.pause();

		mp4Source.attr('src', 'videos/country.mp4');
		webmSource.attr('src', 'videos/country.webm');
		oggSource.attr('src', 'videos/country.ogv');

		videoTitle.innerHTML = 'Funky Country Riff';

		video.load();
		setTimeout(function(){ video.play(); },1000);
	});
	jazzLink.addEventListener('click', function() {
		video.pause();

		mp4Source.attr('src', 'videos/jazzy.mp4');
		webmSource.attr('src', 'videos/jazzy.webm');
		oggSource.attr('src', 'videos/jazzy.ogv');

		videoTitle.innerHTML = 'Geting Jazzy';

		video.load();
		//have video delay 1 sec to wait for slide 
		setTimeout(function(){ video.play(); },1000);
	});
	nervousLink.addEventListener('click', function() {
		video.pause();

		mp4Source.attr('src', 'videos/nervous.mp4');
		webmSource.attr('src', 'videos/nervous.webm');
		oggSource.attr('src', 'videos/nervous.ogv');

		videoTitle.innerHTML = 'Nervous Breakdown (Brad Paisely)';

		video.load();
		setTimeout(function(){ video.play(); },1000);
	});
	videoListImg.on('click', function() {
		htmlBody.animate({
			scrollTop: $('#video').offset().top
		}, 1000);
	});

})();