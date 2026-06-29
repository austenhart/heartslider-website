<template>
	<div id="options-container" ref="optionsContainer">
		<table>
			<thead>
				<tr class="heading-row">
					<th><code>option</code></th>
					<th><code>description</code></th>
					<th><code>value type</code></th>
					<th><code>default value</code></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><code>allowFullVideoPlayback</code></td>
					<td><p>If true, video slides can hold long enough for the full video to play before the slideshow advances.</p></td>
					<td>
						<p>Boolean</p>
					</td>
					<td><code>false</code></td>
				</tr>
				<tr>
					<td><code>slideshow</code></td>
					<td><p>The parent element that contains your slides. By default, this will automatically init on the first element on the page with a class of "heart-slideshow".</p></td>
					<td>
						<p>
							String or querySelector<br />
							(querySelectorAll is not supported)
						</p>
					</td>
					<td><code>".heart-slideshow"</code></td>
				</tr>
				<tr>
					<td><code>slides</code></td>
					<td><p>The classname of the elements that contain your content. If left blank, it will look for elements with the "heart-slide" class.</p></td>
					<td>
						<p>String</p>
					</td>
					<td><code>".heart-slide"</code></td>
				</tr>
				<tr>
					<td><code>transition</code></td>
					<td><p>The duration of the fade effect.</p></td>
					<td>
						<p>Number, in milliseconds.</p>
					</td>
					<td><code>3000</code></td>
				</tr>
				<tr>
					<td><code>manualTransition</code></td>
					<td><p>The duration of the fade effect during a swipe or click.</p></td>
					<td>
						<p>Number, in milliseconds.</p>
					</td>
					<td><code>400</code></td>
				</tr>
				<tr>
					<td><code>delayStart</code></td>
					<td><p>The startup delay before auto-play begins. Useful for intro timing or hero sections that should hold briefly.</p></td>
					<td>
						<p>Number, in milliseconds.</p>
					</td>
					<td><code>0</code></td>
				</tr>
				<tr>
					<td><code>delay</code></td>
					<td><p>The amount of time to wait before starting the transition to the next slide.</p></td>
					<td>
						<p>Number, in milliseconds.</p>
					</td>
					<td><code>1000</code></td>
				</tr>
				<tr>
					<td><code>loop</code></td>
					<td><p>Tells the slideshow to restart at the beginning once reaching the final slide.</p></td>
					<td>
						<p>Boolean</p>
					</td>
					<td><code>true</code></td>
				</tr>
				<tr>
					<td><code>randomize</code></td>
					<td><p>Selects a random slide to start from. Does not shuffle the order of slides.</p></td>
					<td>
						<p>Boolean</p>
					</td>
					<td><code>false</code></td>
				</tr>
				<tr>
					<td><code>paused</code></td>
					<td><p>If set to true, the slideshow will not auto-play.</p></td>
					<td>
						<p>Boolean</p>
					</td>
					<td><code>false</code></td>
				</tr>
				<tr>
					<td><code>effect</code></td>
					<td>
						<p>Two options for the easing applied to the fade. Using <code>fadeOut</code> will smoothly crossfade from one slide to the next. Using <code>fadeInOut</code> will make the current slide completely fade out before fading in the new one.</p>
					</td>
					<td>
						<p>
							String;<br />
							<code>fadeOut</code> or <code>fadeInOut</code>
						</p>
					</td>
					<td><code>"fadeOut"</code></td>
				</tr>
				<tr>
					<td><code>buttons</code></td>
					<td>
						<p>If true, will create previous / next buttons using the <code>heart-prev</code> and <code>heart-next</code> classes. Buttons can be customized with CSS.</p>
					</td>
					<td>
						<p>Boolean</p>
					</td>
					<td><code>false</code></td>
				</tr>
				<tr>
					<td><code>swipe</code></td>
					<td>
						<p>Allows the slideshow to be manually controlled with swipe gestures on touch devices.</p>
					</td>
					<td>
						<p>Boolean</p>
					</td>
					<td><code>true</code></td>
				</tr>
				<tr>
					<td><code>clickToAdvance</code></td>
					<td>
						<p>Allows the slideshow to be manually advanced with a click or tap.</p>
					</td>
					<td>
						<p>Boolean</p>
					</td>
					<td><code>false</code></td>
				</tr>
				<tr>
					<td><code>pauseOnInactiveWindow</code></td>
					<td>
						<p>Will pause the slideshow while the website is not in the active window.</p>
					</td>
					<td>
						<p>Boolean</p>
					</td>
					<td><code>false</code></td>
				</tr>
				<tr>
					<td><code>progressIndicators</code></td>
					<td>
						<p>Adds markers at the bottom of the page to show the slideshow progress.</p>
					</td>
					<td>
						<p>Object</p>
					</td>
					<td>
						<code>{ <br />enable: false, <br />type: "dash", <br />clickable: true, <br />color: "#fff", <br />}</code>
					</td>
				</tr>
				<tr>
					<td><code>progressive</code></td>
					<td>
						<p>Loads content ahead of the active slide. Set to <code>0</code> to disable, or any positive number to preload that many upcoming slides.</p>
					</td>
					<td>
						<p>Number</p>
					</td>
					<td><code>1</code></td>
				</tr>
				<tr>
					<td><code>stackOnMobile</code></td>
					<td>
						<p>Stacks all slides vertically below a breakpoint and pauses slideshow transitions while stacked.</p>
					</td>
					<td>
						<p>Object</p>
					</td>
					<td>
						<code>{ <br />enable: false, <br />threshold: 768, <br />}</code>
					</td>
				</tr>
				<tr>
					<td><code>debug</code></td>
					<td>
						<p>Enables verbose console logs and warnings to help troubleshoot slideshow behavior.</p>
					</td>
					<td>
						<p>Boolean</p>
					</td>
					<td><code>false</code></td>
				</tr>
			</tbody>
		</table>
	</div>
	<!-- <blockquote>
		<p><small>More coming soon...</small></p>
	</blockquote> -->
</template>

<script>
export default {
	methods: {
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
		getOptionCopyText(optionName) {
			const snippets = {
				allowFullVideoPlayback: "allowFullVideoPlayback: false,",
				slideshow: 'slideshow: ".heart-slideshow",',
				slides: 'slides: ".heart-slide",',
				transition: "transition: 3000,",
				manualTransition: "manualTransition: 400,",
				delayStart: "delayStart: 0,",
				delay: "delay: 1000,",
				loop: "loop: true,",
				randomize: "randomize: false,",
				paused: "paused: false,",
				effect: 'effect: "fadeOut",',
				buttons: "buttons: false,",
				swipe: "swipe: true,",
				clickToAdvance: "clickToAdvance: false,",
				pauseOnInactiveWindow: "pauseOnInactiveWindow: false,",
				progressIndicators: 'progressIndicators: { enable: false, type: "dash", clickable: true, color: "#fff" },',
				progressive: "progressive: 1,",
				stackOnMobile: "stackOnMobile: { enable: false, threshold: 768 },",
				debug: "debug: false,",
			};

			return snippets[optionName] || null;
		},
		attachOptionCopyButtons() {
			const container = this.$refs.optionsContainer;
			if (!container || typeof container.querySelectorAll !== "function") return;

			const rows = container.querySelectorAll("tbody tr");

			rows.forEach((row) => {
				if (row.querySelector(".option-copy-button")) return;

				const optionCellCode = row.querySelector("td:first-child code");
				if (!optionCellCode) return;

				const optionName = optionCellCode.textContent.trim();
				const snippet = this.getOptionCopyText(optionName);
				if (!snippet) return;

				const defaultValueCell = row.querySelector("td:last-child");
				if (!defaultValueCell) return;

				const button = document.createElement("button");
				button.type = "button";
				button.className = "option-copy-button";
				button.setAttribute("aria-label", `Copy ${optionName} default value`);
				button.innerHTML = `
					<span class="option-copy-icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
							<path d="M16 1H6a2 2 0 0 0-2 2v12h2V3h10z" />
							<path d="M18 5H10a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16h-8V7h8z" />
						</svg>
					</span>
					<span class="option-copy-confirmation" aria-hidden="true">Copied</span>
				`;

				button.addEventListener("click", async () => {
					try {
						await this.copyTextToClipboard(snippet);
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

				defaultValueCell.appendChild(button);
			});
		},
	},
	mounted() {
		this.attachOptionCopyButtons();
	},
	updated() {
		this.attachOptionCopyButtons();
	},
};
</script>

<style scoped>
#options-container {
	width: 100%;
	overflow-x: scroll;
	padding: 0 2rem;
	white-space: nowrap;
}
table {
	white-space: normal;
	width: 100%;
	min-width: 60rem;
	max-width: 80rem;
	border-collapse: collapse;
	width: 100%;
	text-align: left;
	margin: 0;
}
thead {
	background: #f5f5f5;
}
tbody {
	background: #f5f5f54b;
}
table code {
	white-space: nowrap;
	white-space: pre-line;
	background: transparent;
	padding: 0;
}
table th > code,
table td > code {
	font-size: 0.8rem;
}
td,
th {
	border: 1px solid #e2e4e8;
}
th,
td {
	padding: 1rem;
}
td:last-child {
	position: relative;
	padding-right: 3.75rem;
}
/* @media screen and (min-width: 50em) {
	th,
	td {
		padding: 1rem 1rem;
	}
} */
@media screen and (min-width: 60em) {
	th {
		padding: 1rem 1.5rem;
	}
	td {
		padding: 2rem 1.5rem;
	}
}
tr {
	vertical-align: top;
	transition: background-color 0.45s ease-in-out;
}
tr:hover {
	background: #f1f1f1;
	transition: background-color 0.15s ease-in-out;
}
table p {
	margin-top: 0;
	max-width: 30em;
	line-height: 1.5;
}
:deep(.option-copy-button) {
	position: absolute;
	top: 2px;
	right: 8px;
	width: 1.5rem;
	height: 2rem;
	padding: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	border: 0;
	border-radius: 0.2rem;
	cursor: pointer;
	color: #bfc2c6;
	opacity: 0;
	pointer-events: none;
	transition: color 0.15s ease, transform 0.15s ease, opacity 0.15s ease;
	z-index: 5;
}
:deep(tbody tr:hover .option-copy-button),
:deep(.option-copy-button:focus-visible),
:deep(.option-copy-button.copy-confirmed) {
	opacity: 1;
	pointer-events: auto;
}
:deep(.option-copy-button:hover) {
	color: #a5a7ac;
}
:deep(.option-copy-icon) {
	width: 1.25rem;
	height: 1.25rem;
	display: inline-flex;
}
:deep(.option-copy-icon svg) {
	will-change: opacity;
	width: 100%;
	height: 100%;
	fill: currentColor;
}
:deep(.option-copy-confirmation) {
	position: absolute;
	top: 50%;
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
:deep(.option-copy-button.copy-confirmed .option-copy-icon) {
	opacity: 0;
}
:deep(.option-copy-button.copy-confirmed .option-copy-confirmation) {
	opacity: 1;
}
:deep(.option-copy-button.copy-failed) {
	color: #ff7b7b;
}

@media screen and (prefers-color-scheme: dark) {
	thead,
	thead tr:hover {
		background: rgb(19, 23, 34);
	}
	tbody {
		background: rgb(10, 12, 17);
	}
	tr:hover {
		background: rgb(19, 23, 34);
	}
	td,
	th {
		border: 1px solid rgb(10, 12, 17);
	}
}
</style>
