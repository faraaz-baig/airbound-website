<script>
	import Section_3 from '../components/Home-page/section_3.svelte';
	import HeroSection from '../components/Home-page/hero-section.svelte';
	import Section_2 from '../components/Home-page/section_2.svelte';
	import Section_4 from '../components/Home-page/section_4.svelte';
	import Section_5 from '../components/Home-page/section_5.svelte';
	import Section_6 from '../components/Home-page/section_6.svelte';
	import Section_7 from '../components/Home-page/section_7.svelte';
	import { onMount } from 'svelte';
	import SvelteSeo from 'svelte-seo';

	onMount(() => {
		window.scrollTo(0, 0);
	});
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
		url: 'https://airbound.co/',
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
		site: '@airbound_co',
		title: 'Airbound | Delivery made Simple',
		description:
			'Airbound is a convenient service that allows you to shop in your city and support local business and get your order delivered via our drone.',
		image: 'https://airbound.co/banner_image.png',
		imageAlt: 'Airbound Delivery Simplified Image'
	}}
/>

<main>
	<!-- hero section -->
	<HeroSection />

	<!-- section 2 -->
	<Section_2 />

	<!-- section 3 -->
	<Section_3 />

	<!-- section 4 -->
	<Section_4 />

	<!-- section 5 -->
	<Section_5 />

	<!-- section 6 -->
	<Section_6 />

	<!-- section 7 -->
	<Section_7 />
</main>
