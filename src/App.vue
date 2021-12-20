<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from "./components/HelloWorld.vue";
import ExternalLinkButton from "./components/ExternalLinkButton.vue";
import AllOptionsTable from "./components/AllOptionsTable.vue";
import HeartSlider from "./components/HeartSlider.vue";
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
			<pre>
				<code class="language-html">
					<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">defer</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/heartslider@latest/dist/heartslider.min.js"</span>&gt;&lt;/<span class="hljs-name">script</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/heartslider@latest/dist/heartslider.min.css"</span>&gt;</span>
				</code>
			</pre>
			<p>Then, add your markup.</p>
			<!-- <highlightjs language="html" code="var x = 5;" /> -->
			<pre>
				<code class="language-html">
					&lt;div class=&quot;heart-slideshow&quot;&gt;<br>
					&nbsp;&nbsp;&lt;div class=&quot;heart-slide&quot;&gt;<br>
					&nbsp;&nbsp;&nbsp;&nbsp;&lt;figure class=&quot;image-holder&quot;&gt;<br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img <br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data-sizes=&quot;(min-aspect-ratio: 1/1) 100vw, 140vw&quot; <br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data-srcset=&quot;img/image-01.jpg 1x, img/image-01@2x 2x&quot; <br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alt=&quot;&quot; /&gt;<br>
					&nbsp;&nbsp;&nbsp;&nbsp;&lt;/figure&gt;<br>
					&nbsp;&nbsp;&lt;/div&gt;<br>
					&nbsp;&nbsp;...<br>
					&lt;/div&gt;
				</code>
			</pre>
			<p>Finally, initiate the slideshow with a new HeartSlider class and set your options in your JS file.</p>
			<pre>
				<code class="language-js">
					new HeartSlider({<br>
					&nbsp;&nbsp;slideshow: ".heart-slideshow",<br>
					&nbsp;&nbsp;slides: ".heart-slide",<br>
					&nbsp;&nbsp;transition: 3000,<br>
					&nbsp;&nbsp;delay: 1000,<br>
					});
				</code>
			</pre>
		</div>
		<div class="text-block">
			<h3>Default Options</h3>
			<pre>
				<code class="language-js">
					new HeartSlider({<br>
					&nbsp;&nbsp;slideshow: ".heart-slideshow",<br>
					&nbsp;&nbsp;slides: ".heart-slide",<br>
					&nbsp;&nbsp;transition: 3000,<br>
					&nbsp;&nbsp;manualTransition: 200,<br>
					&nbsp;&nbsp;delay: 1000,<br>
					&nbsp;&nbsp;loop: true,<br>
					&nbsp;&nbsp;randomize: false,<br>
					&nbsp;&nbsp;paused: false,<br>
					&nbsp;&nbsp;effect: "fadeOut",<br>
					&nbsp;&nbsp;buttons: false,<br>
					&nbsp;&nbsp;swipe: true,<br>
					&nbsp;&nbsp;clickToAdvance: false,<br>
					&nbsp;&nbsp;pauseOnInactiveWindow: false,<br>
					});<br>
				</code>
			</pre>
		</div>
		<div class="text-block">
			<h3>Events</h3>
			<pre>
				<code class="language-js">
					const homepageSlider = new HeartSlider();<br>
					<br>
					// Events<br>
					homepageSlider.on("transitionStart", function (slideshow, slideshowElement, currentSlide) {<br>
					&nbsp;&nbsp;/* Code that runs on the START of each transition goes here */<br>
					&nbsp;&nbsp;console.log({ slideshow }, { slideshowElement }, { currentSlide });<br>
					});<br>
					homepageSlider.on("transitionEnd", function (slideshow, slideshowElement, currentSlide) {<br>
					&nbsp;&nbsp;/* Code that runs at the END of each transition goes here */<br>
					&nbsp;&nbsp;console.log({ slideshow }, { slideshowElement }, { currentSlide });<br>
					});
				</code>
			</pre>
		</div>
		<div class="text-block table-row">
			<h3>All Options</h3>
			<AllOptionsTable />
		</div>
	</section>
</template>

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
	padding: 8em 0 4em;
}
.text-block {
	margin: 2em auto 6em;
	max-width: 60em;
	width: 100%;
	padding: 0 2rem;
}
.text-block.table-row {
	max-width: 80em;
}
@media screen and (min-width: 70em) {
	.text-block.table-row {
		width: 90%;
	}
}
</style>
