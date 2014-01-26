<?php 
include 'inc/header.php';
 ?>

<section class="intro">
	<h2>Well, Something about Caleb here..</h2>
	<figure>
		<img src="http://lorempixel.com/g/1280/800/people" alt="Caleb Westbrook">
		<figcaption>Caleb Westbrook Playing Guitar at Such and Such Place</figcation>
	</figure>
	<article class="bio">
		<h3>Bio</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</article>
</section>

<section class="video">
	<video id="video" class="yendifplayer" controls preload>
  		<source src="media/minou.webm" type="video/webm"/>
  		<source src="media/minou.mp4" type="video/mp4" />
	</video>

</section>

<section class="audio">
	<h2>Song Title - Caleb Westbrook</h2>
	<audio src="media/test.mp3" class="audio-player" type="audio/mp3" controls preload="auto">
	<audio src="media/test.ogg" class="audio-player" type="audio/ogg" controls preload="auto">
		<p>Your browser doesn't support playing audio files</p>
	</audio>
</section>

<?php 
include 'inc/footer.php';
 ?>