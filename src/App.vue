<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from "./components/HelloWorld.vue";
import ExternalLinkButton from "./components/ExternalLinkButton.vue";
import AllOptionsTable from "./components/AllOptionsTable.vue";
import HeartSlider from "./components/HeartSlider.vue";
import hljs from "highlight.js/lib/core";
import Footer from "./components/Footer.vue";
</script>

<template>
	<section id="intro">
		<HeartSlider />
		<div id="button-holder">
			<ExternalLinkButton accent="#000" href="https://www.github.com/austenhart/heartslider">Github</ExternalLinkButton>
			<ExternalLinkButton accent="#EB9642" href="https://www.jsdelivr.com/package/gh/austenhart/heartslider">JsDelivr</ExternalLinkButton>
		</div>
		<div class="scroll-instruct"><a href="#docs">Documentation</a></div>
	</section>
	<section id="docs">
		<div class="text-block">
			<h3>Purpose</h3>
			<blockquote>
				<p><em>Built for image-forward websites, HeartSlider is a simple and elegant slideshow that is designed for developers. It is adaptable, and customizable — with just enough styling to blend into any design system.</em></p>
			</blockquote>
		</div>
		<div class="text-block">
			<h3>Getting Started</h3>
			<p>Make sure to include <code>heartslider.min.js</code> and <code>heartslider.min.css</code> files to your project. You can either download and add to them to your project’s directory, or use a CDN like jsDelivr.</p>
			<highlightjs
				language="xml"
				code='<script defer src="https://cdn.jsdelivr.net/npm/heartslider@latest/dist/heartslider.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/heartslider@latest/dist/heartslider.min.css">'
			/>
			<p>Then, add your markup.</p>
			<highlightjs
				language="xml"
				code='<div class="heart-slideshow">
	<div class="heart-slide">
		<figure class="image-holder">
			<img 
				data-sizes="(min-aspect-ratio: 1/1) 100vw, 140vw" 
				data-src="img/image-01.jpg" 
				data-srcset="img/image-01.jpg 1x, img/image-01@2x 2x" 
				alt="" />
		</figure>
	</div>
	...
</div>'
			/>
			<p>Finally, initiate the slideshow with a new HeartSlider class and set your options in your javascript file.</p>
			<highlightjs
				language="javascript"
				code='new HeartSlider({
	slideshow: ".heart-slideshow",
	slides: ".heart-slide",
	transition: 3000,
	delay: 1000,
});'
			/>
		</div>
		<div class="text-block">
			<h3>Default Options</h3>
			<highlightjs
				language="javascript"
				code='new HeartSlider({
	slideshow: ".heart-slideshow",
	slides: ".heart-slide",
	transition: 3000,
	manualTransition: 200,
	delay: 1000,
	loop: true,
	randomize: false,
	paused: false,
	effect: "fadeOut",
	buttons: false,
	swipe: true,
	clickToAdvance: false,
	pauseOnInactiveWindow: false,
});'
			/>
		</div>
		<div class="text-block">
			<h3>Actions</h3>
			<p>Declare the slideshow as a constant, then you can use the <code>next()</code> and <code>prev()</code> methods to manually advance the slideshow. Use <code>pause()</code> and <code>resume()</code> to stop or start autoplay.</p>
			<highlightjs
				language="javascript"
				code="const myHomepageSlideshow = new HeartSlider();
					
// Pause
myHomepageSlideshow.pause();
// Resume
myHomepageSlideshow.resume();

// Next Slide
myHomepageSlideshow.next();
// Previous Slide
myHomepageSlideshow.prev();"
			/>
		</div>
		<div class="text-block">
			<h3>Events</h3>
			<highlightjs
				language="javascript"
				code='const myHomepageSlideshow = new HeartSlider();
					
// Events
myHomepageSlideshow.on("transitionStart", function (slideshow, slideshowElement, currentSlide) {
	/* Code that runs on the START of each transition goes here */
	console.log({ slideshow }, { slideshowElement }, { currentSlide });
});
myHomepageSlideshow.on("transitionEnd", function (slideshow, slideshowElement, currentSlide) {
	/* Code that runs at the END of each transition goes here */
	console.log({ slideshow }, { slideshowElement }, { currentSlide });
});'
			/>
		</div>
		<div class="text-block table-row">
			<h3>All Options</h3>
			<AllOptionsTable />
		</div>
	</section>
	<Footer />
</template>

<script>
export default {
	mounted() {
		// const codeSnippets = document.querySelectorAll("pre code");
		document.querySelectorAll("pre code").forEach((el) => {
			hljs.highlightElement(el);
		});
	},
};
</script>

<style>
html {
	box-sizing: border-box;
}
*,
*::before,
*::after {
	box-sizing: inherit;
}
#app {
	/* font-family: Avenir, Helvetica, Arial, sans-serif; */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}
#intro {
	position: relative;
	height: 100vh;
	background: #242424;
}
.scroll-instruct,
#button-holder {
	position: absolute;
	top: calc(100vh - 120px);
	right: 0;
	bottom: auto;
	left: 0;
	z-index: 30;
}
.scroll-instruct {
	position: absolute;
	top: calc(100vh - 50px);
	right: 0;
	bottom: auto;
	left: 0;
	z-index: 30;
	text-align: center;
	font-size: 0.6rem;
	color: #fff;
	text-shadow: 0 0 10px #000;
	text-transform: uppercase;
	letter-spacing: 0.2em;
}
.scroll-instruct::after {
	content: "";
	width: 0.4rem;
	height: 0.4rem;
	border-bottom: 1px solid #fff;
	border-right: 1px solid #fff;
	transform: scaleX(1.75) rotate(45deg);
	position: absolute;
	bottom: -1rem;
	left: 0;
	right: 0;
	margin: 0 auto;
}
.scroll-instruct a {
	color: inherit;
	text-decoration: none;
}
#docs {
	padding: 4em 0;
}
.text-block {
	margin: 2em auto 6em;
	max-width: 60em;
	width: 100%;
	padding: 0 2rem;
}
.text-block.table-row {
	max-width: 80em;
	padding: 0;
	box-sizing: border-box;
}
@media screen and (min-width: 70em) {
	.text-block.table-row {
		width: 90%;
	}
}
</style>
