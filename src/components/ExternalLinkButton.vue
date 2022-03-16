<template>
	<a :href="href" :accent="accent" :style="style" :target="target" :rel="rel" :class="classes">
		<span><slot /></span>
	</a>
</template>

<script>
export default {
	props: {
		href: {
			type: String,
			required: true,
		},
		target: {
			type: String,
			default: "_blank",
		},
		rel: {
			type: String,
			default: "noopener noreferrer",
		},
		classes: {
			type: String,
			default: "",
		},
		accent: {
			type: String,
			default: "#000",
		},
	},
	computed: {
		style() {
			return {
				// borderBottomColor: this.accent,
				"--accent-color": this.accent,
			};
		},
	},
};
</script>

<style scoped>
a {
	position: relative;
	display: inline-block;
	text-decoration: none;
	color: rgb(104, 104, 104);
	/* border-bottom: 2px solid; */
	outline: 1px solid #fff;
	padding: 0.75em 1.5em;
	background: #fff;
	margin: 0 0.5em;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 0.1em;
	font-size: 0.7em;
	width: 7em;
	width: 16ch;
	text-align: center;
	transition: color 0.4s ease-in;
}
a span {
	position: relative;
	z-index: 10;
}
a::before {
	content: "";
	position: absolute;
	height: 100%;
	width: 100%;
	bottom: 0;
	left: 0;
	transform-origin: 50% 100%;
	background-color: var(--accent-color, #000);
	transform: scaleY(0.1);
	z-index: 0;
	transition: transform 0.4s ease-in-out;
}
a:hover::before {
	transform: scaleY(1);
}
a:hover {
	color: #fff;
	/* border-bottom-width: 4px; */
	transition: color 0.2s ease-in;
}
</style>
