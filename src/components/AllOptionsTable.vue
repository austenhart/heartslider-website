<template>
	<div id="options-container">
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
					<td><code>slide</code></td>
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
					<td><code>200</code></td>
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
					<td><code>true</code></td>
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
						<p>Two options for the easing applied to the fade. Using <code>FadeOut</code> will smoothly crossfade from one slide to the next. Using <code>FadeInOut</code> will make the current slide completely fade out before fading in the new one.</p>
					</td>
					<td>
						<p>
							String;<br />
							<code>FadeOut</code> or <code>FadeInOut</code>
						</p>
					</td>
					<td><code>FadeOut</code></td>
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
			</tbody>
		</table>
	</div>
	<!-- <blockquote>
		<p><small>More coming soon...</small></p>
	</blockquote> -->
</template>

<script>
export default {};
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
	background: #f5f5f5;
	transition: background-color 0.15s ease-in-out;
}
table p {
	margin-top: 0;
	max-width: 30em;
	line-height: 1.5;
}
</style>
