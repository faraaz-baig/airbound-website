<script>
	import Accordion from '../components/faq/accordion.svelte';
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
			<h1 class="text-4xl font-heading font-semibold col-span-3 w-64">FAQs</h1>
		</div>
	</div>
	<div class="bg-blue-800">
		<div
			class="max-w-1260 text-white-100 mx-auto px-6 md:px-8 lg:px-10 py-20 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12"
		>
			<div class="text-base sm:text-lg lg:text-xl col-span-4 md:col-span-8 lg:col-span-12">
				We are building a drone system that does not require any infrastructure, allowing us to
				implement this in remote areas, bringing down delivery times from hours to minutes. Drone
				delivery is something that has been worked on for a long time, but governments have only
				recently allowed drone systems to operate commercially. What sets us apart is that we're
				building a service for those who are not large enough to do business with the giants in the
				space. Instead of building warehouses and large centers, we're focused on only bringing what
				is necessary - the drone itself, so that anyone can use delivery, even those in the most
				remote areas. Created by Passionate teenagers, Airbound is disrupting last minute delivery
				in urban and rural areas. Our Drones is designed to be the fastest and safest system ever.
			</div>
			<div class="col-span-4 md:col-span-8 lg:col-span-12">
				<Accordion />
			</div>
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
