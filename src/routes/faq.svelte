<script>
	import Accordion_1 from '../components/faq/accordion_1.svelte';
	import { onMount } from 'svelte';
	import Accordion_2 from '../components/faq/accordion_2.svelte';
	import Accordion_3 from '../components/faq/accordion_3.svelte';
	import Accordion_4 from '../components/faq/accordion_4.svelte';

	onMount(() => {
		window.scrollTo(0, 0);
	});
	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
	title="Airbound | Delivery made Simple"
	description="Airbound is a convenient service that allows you to shop in your city and support local business and get your order delivered via our drone."
/>

<SvelteSeo
	openGraph={{
		title: 'Airbound | Delivery made Simple',
		description:
			'Airbound is a convenient service that allows you to shop in your city and support local business and get your order delivered via our drone.',
		url: 'https://airbound.co/faq',
		type: 'website',
		images: [
			{
				url: 'https://airbound.co/banner_image.png',
				width: 1200,
				height: 630,
				alt: 'Og Image Alt'
			}
		]
	}}
/>

<SvelteSeo
	twitter={{
		site: 'https://twitter.com/airbound_co',
		title: 'Airbound | Delivery made Simple',
		description:
			'Airbound is a convenient service that allows you to shop in your city and support local business and get your order delivered via our drone.',
		image: 'https://airbound.co/banner_image.png',
		imageAlt: 'Airbound Delivery Simplified Image'
	}}
/>

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
			class="max-w-1260 font-body text-white-100 mx-auto px-6 md:px-8 lg:px-10 py-20 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12"
		>
			<div class="text-base sm:text-lg col-span-4 md:col-span-8 lg:col-span-12 mb-10">
				We are building a drone system that does not require any infrastructure, allowing us to
				implement this in remote areas, bringing down delivery times from hours to minutes. Drone
				delivery is something that has been worked on for a long time, but governments have only
				recently allowed drone systems to operate commercially.
			</div>
			<div class="text-base sm:text-lg col-span-4 md:col-span-8 lg:col-span-12 mb-10">
				What sets us apart is that we're building a service for those who are not large enough to do
				business with the giants in the space. Instead of building warehouses and large centers,
				we're focused on only bringing what is necessary - the drone itself, so that anyone can use
				delivery, even those in the most remote areas.
			</div>
			<div class="text-base sm:text-lg col-span-4 md:col-span-8 lg:col-span-12 mb-10">
				Created by Passionate teenagers, Airbound is disrupting last minute delivery in urban and
				rural areas. Our Drones is designed to be the fastest and safest system ever.
			</div>
			<div class="col-span-4 md:col-span-8 lg:col-span-12">
				<Accordion_1 />
				<Accordion_2 />
				<Accordion_3 />
				<Accordion_4 />
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
