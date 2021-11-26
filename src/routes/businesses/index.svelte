<script>
	import BizSection_2 from '../../components/business/biz_section_2.svelte';
	import BizSection_7 from '../../components/Home-page/section_7.svelte';
	import { onMount } from 'svelte';
	import BizSection_4 from '../../components/business/biz_section_4.svelte';
	import BizSection_3 from '../../components/business/biz_section_3.svelte';
	import BizSection_1 from '../../components/business/biz_section_1.svelte';

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
		url: 'https://airbound.co/businesses',
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
	<BizSection_1 />
	<BizSection_2 />
	<BizSection_3 />
	<BizSection_4 />
	<BizSection_7 />
</main>
