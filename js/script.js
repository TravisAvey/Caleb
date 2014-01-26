(function() {
	$('#audio-player').mediaelementplayer({
		alwaysShowControls: true,
		features: ['playpause', 'progress', 'volume'],
		audioVolume: 'horizontal',
		iPadUseNativeControls : true,
		iPhoneUseNativeControls : true,
		AndriodUseNativeControls : true
	});
})();