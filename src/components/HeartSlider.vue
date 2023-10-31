<template>
	<div id="homepage-slideshow" class="heart-slideshow">
		<div class="heart-slide">
			<figure class="image-holder"><img data-src="/homepage/heart-slide-03.jpg" alt="" /></figure>
		</div>
		<div class="heart-slide">
			<figure class="image-holder"><img data-src="/homepage/heart-slide-01.jpg" alt="" /></figure>
		</div>
		<div class="heart-slide">
			<figure class="image-holder"><img data-src="/homepage/heart-slide-02.jpg" alt="" /></figure>
		</div>
		<div class="heart-slide">
			<figure class="image-holder"><img data-src="/homepage/heart-slide-04.jpg" alt="" /></figure>
		</div>
		<div class="heart-slide">
			<figure class="image-holder"><img data-src="/homepage/heart-slide-05.jpg" alt="" /></figure>
		</div>
		<div class="heart-slide">
			<figure class="image-holder"><img data-src="/homepage/heart-slide-06.jpg" alt="" /></figure>
		</div>
		<div class="heart-slide">
			<figure class="image-holder"><img data-src="/homepage/heart-slide-07.jpg" alt="" /></figure>
		</div>
	</div>
</template>

<script>
/* In main.js (?) */
// import "../../node_modules/heartslider/dist/heartslider.min.js";
// import { HeartSlider } from "../../node_modules/heartslider/dist/heartslider.min.js";
export default {
	// data: function () {
	// 	return {
	// 		HeartSlider,
	// 	};
	// },
	mounted() {
		// console.log(HeartSlider);
		const heartslidercss = "https://cdn.jsdelivr.net/gh/austenhart/heartslider@3.4.9/dist/heartslider.min.css";
		const hsStyle = document.createElement("link");
		hsStyle.rel = "stylesheet";
		hsStyle.href = heartslidercss;
		const heartsliderjs = "https://cdn.jsdelivr.net/gh/austenhart/heartslider@3.4.9/dist/heartslider.min.js";
		const tag = document.createElement("script");
		tag.setAttribute("type", "text/javascript");
		tag.setAttribute("src", heartsliderjs);
		tag.setAttribute("async", "");
		tag.onload = () => {
			new HeartSlider();
		};
		document.head.appendChild(tag);
		document.head.appendChild(hsStyle);
		// new HeartSlider();
		// if (typeof HeartSlider === "function") {
		// 	new HeartSlider();
		// } else {
		// 	console.warn("HeartSlider not loaded");
		// }
	},
};
</script>

<style>
/* @import "../assets/styles/heartslider.min.css"; */
/* @import "/node_modules/heartslider/dist/heartslider.min.css"; */
.heart-slideshow {
	max-height: 100svh;
}
</style>
