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
export default {
	mounted() {
		const heartsliderjs = "../src/assets/scripts/heartslider.min.js";
		const tag = document.createElement("script");
		tag.setAttribute("type", "text/javascript");
		tag.setAttribute("src", heartsliderjs);
		tag.setAttribute("async", "");
		tag.onload = () => {
			new HeartSlider();
		};
		document.head.appendChild(tag);
	},
};
</script>

<style>
@import "../assets/styles/heartslider.min.css";
</style>
