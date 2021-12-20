<template>
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
		</tbody>
	</table>
</template>

<script>
export default {};
</script>

<style>
table {
	width: 100%;
	max-width: 80rem;
	border-collapse: collapse;
	width: 100%;
	text-align: left;
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
}
td,
th {
	border: 1px solid #e2e4e8;
}
th,
td {
	padding: 1rem 0.5rem;
}
@media screen and (min-width: 50em) {
	th,
	td {
		padding: 1rem 1rem;
	}
}
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
}
table p {
	margin-top: 0;
	max-width: 30em;
	line-height: 1.5;
}
</style>
