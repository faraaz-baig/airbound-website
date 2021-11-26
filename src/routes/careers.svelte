<script>
	import { job_desc_1_open } from '../stores/sidebar';

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
		url: 'https://airbound.co/careers',
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
			<h1 class="text-4xl font-heading font-semibold col-span-3 w-80">Careers</h1>
		</div>
	</div>
	<div class="bg-blue-700 full-on-ipad">
		<div
			class="max-w-1260 font-body text-white-100 mx-auto px-6 py-20 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 text-base sm:text-lg"
		>
			<div class="col-span-4 md:col-span-8 lg:col-span-12 text-base sm:text-lg">
				Airbound is a group of young individuals that share a passion to innovate within the
				logistics industry to dramatically improve drone delivery and drone infrastructure
				worldwide. We're looking for top talent ready to get their hands dirty to make a meaningful
				impact that will last for generations to come.
			</div>
			<div class="col-span-4 md:col-span-8 lg:col-span-12 mt-16">
				<div class="grid-cols-4 md:grid-cols-8 lg:grid-cols-12" />
				<div
					class={`job-container py-5 md:py-10 md:flex rounded-t-lg md:flex-row md:items-center md:justify-between ${
						!$job_desc_1_open ? 'rounded-b-none' : 'rounded-b-lg'
					}`}
				>
					<div class="px-6 md:px-14">
						<h1 class="font-heading tracking-wider font-semibold text-green-500 text-2xl">
							UI/UX Intern
						</h1>
						<div class="job-description font-body mt-1 tracking-wide text-base">
							Remote <span class="mx-1">|</span> <span>Part Time</span>
						</div>
					</div>
					<div
						class=" px-6 md:px-14 mt-6 md:mt-0 flex flex-row justify-between items-center text-base"
					>
						<a href="mailto:careers@airbound.co"
							><button class="apply-btn py-2 px-7 md:px-9 rounded-lg md:mr-6">Apply</button></a
						>
						<button
							class="p-2"
							on:click={() => {
								$job_desc_1_open = !$job_desc_1_open;
							}}
							><i class={`fas fa-angle-down text-xl ${!$job_desc_1_open ? 'hidden' : ''}`} />
							<i class={`fas fa-angle-up text-xl ${$job_desc_1_open ? 'hidden' : ''}`} />
						</button>
					</div>
				</div>
				<div
					class={`job_desc px-8 md:px-20 pt-2 pb-14 font-body ${$job_desc_1_open ? 'hidden' : ''}`}
				>
					<h1 class="font-heading text-lg lg:text-xl font-semibold my-4">About the internship</h1>

					Selected intern's day-to-day responsibilities include:
					<ul>
						<li>
							Gather and evaluate user requirements in collaboration with product managers and
							engineers
						</li>
						<li>Illustrate design ideas using storyboards, process flows and sitemaps</li>
						<li>Design graphics user interfaces elements, like menus, tabs, and widgets</li>
						<li>Design the mobile app using best practices in the industry</li>
						<li>Create original graphic designs (e.g. images, sketches, and tables)</li>
						<li>
							Develop UI mockups and prototypes that clearly illustrate how app function and look
							like
						</li>
						<li>Prepare and present rough drafts to internal teams and key stakeholders</li>
						<li>Identify and troubleshoot UX problems (e.g. responsiveness)</li>
						<li>Conduct layout adjustments based on user feedback</li>
						<li>Adhere to style standards on fonts, colours, and images</li>
					</ul>

					<h1 class="font-heading text-lg lg:text-xl font-semibold my-4">Other requirements</h1>
					<ul>
						<li>A portfolio of design projects</li>
						<li>Knowledge of wireframe tools (e.g. Wireframe.cc and InVision)</li>
						<li>
							Up-to-date knowledge of design software like Adobe Illustrator, Figma and Photoshop
						</li>
					</ul>
					<h1 class="font-heading text-lg lg:text-xl font-semibold my-4">Perks</h1>
					<ul>
						<li>Certificate</li>
						<li>Letter of recommendation</li>
						<li>Flexible work hours</li>
						<li>5 days a week</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.job_desc {
		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(23px);
		/* Note: backdrop-filter has minimal browser support */

		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
	}
	ul {
		list-style-type: disc;
		list-style-position: outside;
	}
	.apply-btn {
		background: #4b72ff;
		backdrop-filter: blur(16.2998px);
		/* Note: backdrop-filter has minimal browser support */

		border-radius: 4px;
	}
	.job-container {
		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(23px);
		/* Note: backdrop-filter has minimal browser support */
	}
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
