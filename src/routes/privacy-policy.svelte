<script>
	import PrivacyContent from '../components/privacy-policy-page/privacy-content.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		window.scrollTo(0, 0);
	});
</script>

<main>
	<div class="banner">
		<div
			class="max-w-1260 text-white-100 mx-auto px-6 pb-20 pt-36 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12"
		>
			<h1 class="text-2xl font-heading font-semibold col-span-3 w-64">Privacy & Terms</h1>
		</div>
	</div>
	<div class="bg-blue-700">
		<div
			class="max-w-1260 text-white-100 mx-auto px-6 py-20 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12"
		>
			<PrivacyContent />
		</div>
	</div>
</main>

<style>
	.banner {
		background: url('/privacy-policy/pattern.svg');
		background-color: rgba(75, 114, 255);
		background-repeat: no-repeat;
		background-size: cover;
		background-position-x: 7rem;
		background-position-y: 0rem;
		background-blend-mode: overlay;
	}

	/* Small Tablet Styles */

	@media (min-width: 640px) {
	}

	/* Tablet Styles */

	@media (min-width: 768px) {
		.banner {
			background-size: 700px;
			background-position-x: right;
			background-position-y: 0rem;
		}
	}

	/* laptop Styles */

	@media (min-width: 1024px) {
		.banner {
			background-size: 800px;
			background-position-x: right;
			background-position-y: 0rem;
		}
	}
</style>
