<script>
	import { job_desc_1_open } from '../stores/sidebar';

	import { onMount } from 'svelte';

	onMount(() => {
		window.scrollTo(0, 0);
	});
</script>

<main>
	<div class="banner">
		<div
			class="grid grid-cols-4 px-6 pb-20 mx-auto max-w-1260 text-white-100 pt-36 md:grid-cols-8 lg:grid-cols-12"
		>
			<h1 class="col-span-3 text-4xl font-semibold font-heading w-80">Careers</h1>
		</div>
	</div>
	<div class="bg-blue-700 full-on-ipad">
		<div
			class="grid grid-cols-4 px-6 py-20 mx-auto text-base max-w-1260 font-body text-white-100 md:grid-cols-8 lg:grid-cols-12 sm:text-lg"
		>
			<div class="col-span-4 text-base md:col-span-8 lg:col-span-12 sm:text-lg">
				Airbound is a group of young individuals that share a passion to innovate within the
				logistics industry to dramatically improve drone delivery and drone infrastructure
				worldwide. We're looking for top talent ready to get their hands dirty to make a meaningful
				impact that will last for generations to come.
			</div>
			<div class="col-span-4 mt-16 md:col-span-8 lg:col-span-12">
				<div class="grid-cols-4 md:grid-cols-8 lg:grid-cols-12" />
				<div
					class={`job-container py-5 md:py-10 md:flex rounded-t-lg md:flex-row md:items-center md:justify-between ${
						!$job_desc_1_open ? 'rounded-b-none' : 'rounded-b-lg'
					}`}
				>
					<div class="px-6 md:px-14">
						<h1 class="text-2xl font-semibold tracking-wider text-green-500 font-heading">
							UI/UX Intern
						</h1>
						<div class="mt-1 text-base tracking-wide job-description font-body">
							Remote <span class="mx-1">|</span> <span>Part Time</span>
						</div>
					</div>
					<div
						class="flex flex-row items-center justify-between px-6 mt-6 text-base md:px-14 md:mt-0"
					>
						<a href="mailto:careers@airbound.co"
							><button class="py-2 rounded-lg apply-btn px-7 md:px-9 md:mr-6">Apply</button></a
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
					<h1 class="my-4 text-lg font-semibold font-heading lg:text-xl">About the internship</h1>

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

					<h1 class="my-4 text-lg font-semibold font-heading lg:text-xl">Other requirements</h1>
					<ul>
						<li>A portfolio of design projects</li>
						<li>Knowledge of wireframe tools (e.g. Wireframe.cc and InVision)</li>
						<li>
							Up-to-date knowledge of design software like Adobe Illustrator, Figma and Photoshop
						</li>
					</ul>
					<h1 class="my-4 text-lg font-semibold font-heading lg:text-xl">Perks</h1>
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
