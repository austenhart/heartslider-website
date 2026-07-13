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
			<div class="version-picker" role="tablist" aria-label="HeartSlider version source">
				<button type="button" class="version-pill" :class="{ active: selectedVersionSource === 'github' }" @click="selectVersionSource('github')">
					<span class="label">GitHub</span>
					<span class="version-link"><span class="version-prefix">v</span>{{ versions.github }}</span>
				</button>
				<button type="button" class="version-pill" :class="{ active: selectedVersionSource === 'npm' }" @click="selectVersionSource('npm')">
					<span class="label">npm</span>
					<span class="version-link"><span class="version-prefix">v</span>{{ versions.npm }}</span>
				</button>
			</div>
			<highlightjs class="install-snippet" language="xml" :code="installSnippet" />
			<div class="version-info">
				<p class="version-note"><em>Selected source:</em> {{ selectedVersionLabel }}</p>
				<p class="version-links">
					<a :href="githubReleaseUrl" target="_blank" rel="noopener">View GitHub release</a>
					<span aria-hidden="true"> · </span>
					<a :href="npmPackageUrl" target="_blank" rel="noopener">View npm version</a>
				</p>
			</div>
			<template v-if="selectedVersionSource === 'npm'">
				<p>Prefer npm? Install HeartSlider with:</p>
				<highlightjs language="bash" code="npm install heartslider" />
				<p>Then import the bundled files in your entry script:</p>
				<highlightjs
					language="javascript"
					code='import "heartslider/dist/heartslider.min.css";
import "heartslider/dist/heartslider.min.js";'
				/>
			</template>
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
	allowFullVideoPlayback: false,
	buttons: false,
	clickToAdvance: false,
	debug: false,
	delayStart: 0,
	slideshow: ".heart-slideshow",
	slides: ".heart-slide",
	transition: 3000,
	manualTransition: 400,
	delay: 1000,
	loop: true,
	randomize: false,
	paused: false,
	effect: "fadeOut",
	pauseOnInactiveWindow: false,
	progressive: 1,
	swipe: true,
	stackOnMobile: {
		enable: false,
		threshold: 768,
	},
	progressIndicators: {
		enable: false,
		type: "dash", // or "dot"
		clickable: true,
		color: "#fff",
	},
});'
			/>
		</div>
		<div class="text-block">
			<h3>Actions</h3>
			<p>
				Declare the slideshow as a constant, then run <code>pause()</code> or <code>resume()</code> to stop or start autoplay. Use the <code>next()</code>, <code>previous()</code>, and <code>goTo(&#119909;)</code> methods to manually advance the slideshow. Use
				<code>loadSlideContent(&#119909;)</code> or <code>loadAll()</code> to preload content on demand, and <code>destroy()</code> to remove everything and reset the <small>DOM</small>.
			</p>
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
myHomepageSlideshow.previous();
// Jump To Certain Slide
myHomepageSlideshow.goTo(&#119909;);

// Preload one slide or all slides
myHomepageSlideshow.loadSlideContent(&#119909;);
myHomepageSlideshow.loadAll();

// DESTROY
myHomepageSlideshow.destroy();"
			/>
		</div>
		<div class="text-block">
			<h3>Events</h3>
			<p>
				Currently, there are three callback events that you can use to hook into the slideshows. The <code>transitionStart</code> event will happen immediately as a new slide begins to transition in, the <code>transitionEnd</code> will happen at the end of that transition, and the
				<code>firstImageLoad</code> event will trigger when the image in the first slide finishes loading.
			</p>
			<highlightjs
				language="javascript"
				code='const myHomepageSlideshow = new HeartSlider();
					
// Events
myHomepageSlideshow.on("transitionStart", function (slideshow, slideshowElement, currentSlide) {
	/* Code that runs on the START of each new slide goes here */
	console.log({ slideshow }, { slideshowElement }, { currentSlide });
});
myHomepageSlideshow.on("transitionEnd", function (slideshow, slideshowElement, currentSlide) {
	/* Code that runs at the END of each transition goes here */
});
myHomepageSlideshow.on("firstImageLoad", function (slideshow, slideshowElement, currentSlide) {
	document.body.classList.add("remove-intro");
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
	data() {
		return {
			selectedVersionSource: "github",
			versions: {
				github: "3.5.3",
				npm: "3.5.3",
			},
		};
	},
	computed: {
		activeVersion() {
			return this.selectedVersionSource === "npm" ? this.versions.npm : this.versions.github;
		},
		installSnippet() {
			const isNpm = this.selectedVersionSource === "npm";
			const baseUrl = isNpm ? `https://cdn.jsdelivr.net/npm/heartslider@${this.activeVersion}/dist` : `https://cdn.jsdelivr.net/gh/austenhart/heartslider@${this.activeVersion}/dist`;

			const scriptOpen = `<script defer src="${baseUrl}/heartslider.min.js">`;
			const scriptClose = "</" + "script>";
			const stylesheetLink = `<link rel="stylesheet" href="${baseUrl}/heartslider.min.css">`;

			return `${scriptOpen}${scriptClose}\n${stylesheetLink}`;
		},
		selectedVersionLabel() {
			return this.selectedVersionSource === "npm" ? "npm" : "GitHub";
		},
		githubReleaseUrl() {
			return `https://github.com/austenhart/heartslider/releases/tag/${this.versions.github}`;
		},
		npmPackageUrl() {
			return `https://www.npmjs.com/package/heartslider/v/${this.versions.npm}`;
		},
	},
	methods: {
		selectVersionSource(source) {
			this.selectedVersionSource = source;
		},
		copyTextToClipboard(text) {
			if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
				return navigator.clipboard.writeText(text);
			}

			return new Promise((resolve, reject) => {
				const textarea = document.createElement("textarea");
				textarea.value = text;
				textarea.setAttribute("readonly", "");
				textarea.style.position = "fixed";
				textarea.style.top = "-1000px";
				textarea.style.left = "-1000px";
				document.body.appendChild(textarea);
				textarea.focus();
				textarea.select();

				try {
					const success = document.execCommand("copy");
					document.body.removeChild(textarea);
					if (!success) {
						reject(new Error("Copy command failed"));
						return;
					}
					resolve();
				} catch (error) {
					document.body.removeChild(textarea);
					reject(error);
				}
			});
		},
		attachCopyButtons() {
			const codeBlocks = document.querySelectorAll("pre");

			codeBlocks.forEach((block) => {
				if (block.querySelector(".copy-code-button")) return;

				const codeElement = block.querySelector("code");
				if (!codeElement) return;

				const button = document.createElement("button");
				button.type = "button";
				button.className = "copy-code-button";
				button.setAttribute("aria-label", "Copy code snippet");
				button.innerHTML = `
					<span class="copy-code-icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
							<path d="M16 1H6a2 2 0 0 0-2 2v12h2V3h10z" />
							<path d="M18 5H10a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16h-8V7h8z" />
						</svg>
					</span>
					<span class="copy-code-confirmation" aria-hidden="true">Copied</span>
				`;

				button.addEventListener("click", async () => {
					const copyText = codeElement.innerText;

					try {
						await this.copyTextToClipboard(copyText);
						button.classList.remove("copy-failed");
						button.classList.add("copy-confirmed");

						if (button.copyResetTimer) {
							clearTimeout(button.copyResetTimer);
						}
						button.copyResetTimer = setTimeout(() => {
							button.classList.remove("copy-confirmed");
						}, 1400);
					} catch (error) {
						button.classList.add("copy-failed");
						if (button.copyResetTimer) {
							clearTimeout(button.copyResetTimer);
						}
						button.copyResetTimer = setTimeout(() => {
							button.classList.remove("copy-failed");
						}, 1400);
					}
				});

				block.appendChild(button);
			});
		},
		async fetchLatestVersions() {
			const githubRequest = fetch("https://api.github.com/repos/austenhart/heartslider/releases/latest")
				.then((res) => {
					if (!res.ok) throw new Error("Unable to fetch GitHub release");
					return res.json();
				})
				.then((data) => {
					const tag = String(data.tag_name || "")
						.replace(/^v/i, "")
						.trim();
					if (tag) this.versions.github = tag;
				})
				.catch(() => {});

			const npmRequest = fetch("https://registry.npmjs.org/heartslider/latest")
				.then((res) => {
					if (!res.ok) throw new Error("Unable to fetch npm release");
					return res.json();
				})
				.then((data) => {
					const version = String(data.version || "").trim();
					if (version) this.versions.npm = version;
				})
				.catch(() => {});

			await Promise.all([githubRequest, npmRequest]);
		},
		highlightCodeBlocks() {
			document.querySelectorAll("pre code:not(.hljs)").forEach((el) => {
				hljs.highlightElement(el);
			});

			this.attachCopyButtons();
		},
	},
	async mounted() {
		await this.fetchLatestVersions();
		this.highlightCodeBlocks();
	},
	updated() {
		this.highlightCodeBlocks();
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
	max-height: 100svh;
	background: #242424;
}
.scroll-instruct,
#button-holder {
	position: absolute;
	top: calc(100vh - 120px);
	top: calc(100svh - 120px);
	right: 0;
	bottom: auto;
	left: 0;
	z-index: 30;
}
.scroll-instruct {
	position: absolute;
	top: calc(100vh - 50px);
	top: calc(100svh - 50px);
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
.version-picker {
	display: flex;
	gap: 0.75rem;
	justify-content: center;
	flex-wrap: wrap;
	margin: 3rem auto 1rem;
}
pre.install-snippet {
	margin-bottom: 0.5em;
}
.version-info {
	margin: 1em auto;
}
.version-pill {
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	border: 0;
	outline: 0;
	background: rgba(255, 255, 255, 0.25);
	color: rgba(127, 128, 132, 0.583);
	border-radius: 0;
	padding: 0.75em 1.2em;
	cursor: pointer;
	font: inherit;
	text-transform: uppercase;
	font-weight: 700;
	letter-spacing: 0.1em;
	font-size: 0.7em;
	transition: color 0.2s ease-in, background-color 0.2s ease-in, border-color 0.2s ease-in;
}
.version-pill:hover {
	background: rgba(255, 255, 255, 0.85);
}
.version-pill.active {
	background: rgba(255, 255, 255, 1);
	color: rgba(127, 128, 132, 1);
}
.version-pill .label {
	font-size: 1em;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.08em;
}
.version-link {
	font-family: "Courier New", Courier, monospace;
	font-size: 1.05em;
	color: inherit;
	text-decoration: none;
	border-bottom: 1px solid currentColor;
}
.version-prefix {
	text-transform: lowercase;
	display: inline-block;
	margin-right: 0.1em;
}
.version-note {
	margin-top: 0;
	font-size: 0.9rem;
	color: #555;
}
.version-links {
	margin-top: 0;
	margin-bottom: 3em;
	font-size: 0.85rem;
	color: #555;
}
.version-links a {
	color: inherit;
	text-decoration-style: dotted;
	text-decoration-color: #5e5e5e9a;
	text-underline-offset: 0.2em;
}
.version-links a:hover {
	color: #000;
	text-decoration-color: #2f2f2f;
}

@media screen and (prefers-color-scheme: dark) {
	.version-pill {
		color: rgb(114, 115, 119);
		background-color: rgb(24, 25, 31);
	}
	.version-pill:hover {
		color: rgb(138, 142, 151);
		background-color: rgba(72, 76, 90, 0.5);
	}
	.version-pill.active {
		color: rgb(195, 198, 206);
		background-color: rgb(72, 76, 90);
	}
	.version-links,
	.version-note {
		color: rgb(138, 140, 145);
	}
	.version-links a {
		text-decoration-color: #5e5e5e9a;
	}
	.version-links a:hover {
		color: #fff;
		text-decoration-color: #a9a9a9;
	}
}

.copy-code-button {
	position: absolute;
	top: 2px;
	right: 8px;
	width: 1.5rem;
	height: 2rem;
	padding: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	/* background: #000; */
	background: transparent;
	/* outline: 2px solid currentColor; */
	border: 0;
	border-radius: 0.2rem;
	cursor: pointer;
	color: #bfc2c6;
	transition: transform 0.15s ease, color 0.15s ease;
	z-index: 5;
}
.copy-code-button:hover {
	color: #a5a7ac;
}
.copy-code-icon {
	width: 1.25rem;
	height: 1.25rem;
	display: inline-flex;
}
.copy-code-icon svg {
	will-change: opacity;
	width: 100%;
	height: 100%;
	fill: currentColor;
}
.copy-code-confirmation {
	position: absolute;
	top: 50%;
	/* left: 50%; */
	right: 0;
	transform: translate(0%, -50%);
	font-size: 0.58rem;
	font-family: Menlo, SFMono-Regular, ui-monospace, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
	font-weight: 700;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	opacity: 0;
	pointer-events: none;
	color: #a5a7ac;
	transition: opacity 0.15s ease;
}
.copy-code-button.copy-confirmed .copy-code-icon {
	opacity: 0;
}
.copy-code-button.copy-confirmed .copy-code-confirmation {
	opacity: 1;
}
.copy-code-button.copy-failed {
	color: #ff7b7b;
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
