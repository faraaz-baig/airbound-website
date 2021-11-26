<script>
	import { onMount } from 'svelte';
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
		url: 'https://airbound.co/contact',
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
			<h1 class="text-4xl font-heading font-semibold col-span-3 w-80">Contact Us</h1>
		</div>
	</div>
	<div class="bg-blue-700 full-on-ipad">
		<div
			class="max-w-1260 font-body text-white-100 mx-auto px-6 py-20 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 text-base sm:text-lg"
		>
			<div class="col-span-4 md:col-span-8 lg:col-span-12 text-base sm:text-lg">
				Your feedback is important to us. If you have any comments, questions or concerns, please
				let us know by mailing us at <a href="mailto:info@airbound.co" class="underline"
					>info@airbound.co</a
				>. For job opportunities, please visit our
				<a href="/careers" class="underline">Careers page</a>. If you'd like us to keep you posted
				on what Airbound is up to, sign up for our waitlist <a href="/" class="underline">here</a>.
			</div>

			<div class="my-10 col-span-4 md:col-span-8 lg:col-span-12 text-base sm:text-lg">
				<h1 class="font-heading text-green-500 font-semibold text-xl">Media Enquires</h1>
				<p>
					For all media enquires, please contact <a
						class="underline"
						href="mailto:media@airbound.co">media@airbound.co</a
					>
				</p>
			</div>
			<div class="my-10 col-span-4 md:col-span-8 lg:col-span-12 text-base sm:text-lg">
				<h1 class="font-heading text-green-500 font-semibold text-xl">Business Patnerships</h1>
				<p>
					For all Business partnerships/collaborations, please contact <a
						href="mailto:biz@airbound.co"
						class="underline">biz@airbound.co</a
					>
				</p>
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

		.full-on-ipad {
			min-height: 50vh;
		}
	}
</style>
