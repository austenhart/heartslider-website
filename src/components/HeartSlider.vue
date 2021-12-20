<template>
	<div class="heart-slideshow">
		<div class="heart-slide">
			<figure class="image-holder"><img data-src="../src/assets/homepage/heart-slide-03.jpg" alt="" /></figure>
		</div>
		<div class="heart-slide">
			<figure class="image-holder"><img data-src="../src/assets/homepage/heart-slide-01.jpg" alt="" /></figure>
		</div>
		<div class="heart-slide">
			<figure class="image-holder"><img data-src="../src/assets/homepage/heart-slide-02.jpg" alt="" /></figure>
		</div>
		<div class="heart-slide">
			<figure class="image-holder"><img data-src="../src/assets/homepage/heart-slide-04.jpg" alt="" /></figure>
		</div>
		<div class="heart-slide">
			<figure class="image-holder"><img data-src="../src/assets/homepage/heart-slide-05.jpg" alt="" /></figure>
		</div>
		<div class="heart-slide">
			<figure class="image-holder"><img data-src="../src/assets/homepage/heart-slide-06.jpg" alt="" /></figure>
		</div>
		<div class="heart-slide">
			<figure class="image-holder"><img data-src="../src/assets/homepage/heart-slide-07.jpg" alt="" /></figure>
		</div>
	</div>
</template>

<script>
// import * as heartsliderjs from "../assets/scripts/heartslider.min.js";
export default {
	mounted() {
		new HeartSlider();
	},
};
</script>

<style>
@import "../assets/styles/heartslider.min.css";
</style>
