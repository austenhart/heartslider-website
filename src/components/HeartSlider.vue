<template>
	<div id="homepage-slideshow" class="heart-slideshow">
		<div class="heart-slide">
			<figure class="image-holder"><img style="object-position: 35% 50%" data-src="/homepage/heart-slide-08.jpg" alt="" /></figure>
		</div>
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
		/* Floating major range: jsDelivr resolves this to the newest 3.x release, so
		   the demo follows releases automatically and can never point at a missing tag. */
		const heartsliderVersion = "3";
		const heartsliderBase = `https://cdn.jsdelivr.net/gh/austenhart/heartslider@${heartsliderVersion}/dist`;
		const heartslidercss = `${heartsliderBase}/heartslider.min.css`;
		const hsStyle = document.createElement("link");
		hsStyle.rel = "stylesheet";
		hsStyle.href = heartslidercss;
		const heartsliderjs = `${heartsliderBase}/heartslider.min.js`;
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
