<script>
	import { onMount } from 'svelte';

	onMount(() => {
		window.scrollTo(0, 0);
	});
</script>

<main>
	<div class="banner">
		<div class="max-w-1260 text-white-100 mx-auto px-6 pb-20 pt-36">
			<div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
				<div
					class="font-body text-base sm:text-lg text-max-560 mx-auto col-span-4 lg:col-span-6 md:mt-12"
				>
					<h1 class="text-4xl font-heading font-semibold">About Us</h1>
					<p class="col-span-4 lg:col-span-6 lg:mx-auto my-5 md:mt-5">
						Currently, all forms of delivery require infrastructure, from roads to drivers, and
						every drone delivery company operates on a warehouse model. We're changing that.
					</p>
					<p class="col-span-4 lg:col-span-6 lg:mx-auto my-5">
						Created by passionate young founders, we’re looking to disrupt the drone delivery
						industry by building the world’s first blended wing body tailsitter, allowing us to
						leverage small businesses for takeoff/landing and scale faster than anyone else
					</p>
					<div class="hidden md:block lg:col-span-6 lg:mx-auto text-xl mt-10">
						<a
							target="_blank"
							rel="noopener noreferrer"
							class="icon p-2 mx-1 hover:opacity-60"
							href="https://linkedin.com/company/airbound-co"><i class="fab fa-linkedin-in" /></a
						>
						<a
							target="_blank"
							rel="noopener noreferrer"
							class="icon p-2 mx-1 hover:opacity-60"
							href="https://instagram.com/airbound.co"><i class="fab fa-instagram" /></a
						>
						<a
							target="_blank"
							rel="noopener noreferrer"
							class="icon p-2 mx-1 hover:opacity-60"
							href="https://twitter.com/airbound_co"><i class="fab fa-twitter" /></a
						>
						<a
							target="_blank"
							rel="noopener noreferrer"
							class="icon p-2 mx-1 hover:opacity-60"
							href="mailto:info@airbound.co"><i class="far fa-envelope" /></a
						>
					</div>
				</div>
				<a
					class="col-span-4 lg:col-start-8 lg:col-end-13 mx-auto map"
					rel="noopener noreferrer"
					href="https://goo.gl/maps/1gRqnYyTBbe88Rsx5"
					target="_blank"><img src="/about/sample_map.png" alt="" /></a
				>
			</div>
		</div>
	</div>
	<div class="bg-blue-700">
		<div
			class="max-w-1260 relative text-white-100 mx-auto px-6 pb-20 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 pt-36 z-20"
		>
			<h1
				class="font-heading text-center mx-auto col-span-4 md:col-span-8 lg:col-span-12 w-40 font-semibold text-3xl"
			>
				Our Team
			</h1>
			<div
				class="my-16 col-span-4 md:col-span-8 lg:col-span-12 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12"
			>
				<div
					class="person-card py-14 px-10 mx-auto col-span-4 lg:grid-span-6 flex my-10 flex-col justify-center items-center"
				>
					<img class="rounded-full mb-6 pointer-events-none" src="/about/naman.png" alt="" />
					<h1 class="font-heading text-green-500 font-semibold text-xl">Naman Pushp</h1>
					<p class="font-heading font-medium tracking-wider mt-4">Co Founder</p>
				</div>
				<div
					class="person-card py-14 px-10 mx-auto col-span-4 flex my-10 flex-col justify-center items-center"
				>
					<img class="rounded-full mb-6 pointer-events-none" src="/about/faraaz.png" alt="" />
					<h1 class="font-heading text-green-500 font-semibold text-xl">Faraaz Baig</h1>
					<p class="font-heading font-medium tracking-wider mt-4">Co Founder</p>
				</div>
				<div
					class="person-card py-14 px-10 mx-auto col-span-4 flex my-10 flex-col justify-center items-center"
				>
					<img class="rounded-full mb-6 pointer-events-none" src="/about/denin.png" alt="" />
					<h1 class="font-heading text-green-500 font-semibold text-xl">Denin Paul</h1>
					<p class="font-heading font-medium tracking-wider mt-4">Design Intern</p>
				</div>
				<div
					class="person-card py-14 px-10 mx-auto col-span-4  flex my-10 flex-col justify-center items-center"
				>
					<img class="rounded-full mb-6 pointer-events-none" src="/about/aarna.png" alt="" />
					<h1 class="font-heading text-green-500 font-semibold text-xl">Aarna Dalal</h1>
					<p class="font-heading font-medium tracking-wider mt-4">Marketing Intern</p>
				</div>
				<div
					class="person-card py-14 px-10 mx-auto col-span-4 flex my-10 flex-col justify-center items-center"
				>
					<img class="rounded-full mb-6 pointer-events-none" src="/about/ninad.png" alt="" />
					<h1 class="font-heading text-green-500 font-semibold text-xl">Ninad Atale</h1>
					<p class="font-heading font-medium tracking-wider mt-4">Engineering Intern</p>
				</div>
				<div
					class="person-card py-14 px-10 mx-auto col-span-4 flex my-10 flex-col justify-center items-center"
				>
					<img class="rounded-full mb-6 pointer-events-none" src="/about/ayush.png" alt="" />
					<h1 class="font-heading text-green-500 font-semibold text-xl">Ayush Gupta</h1>
					<p class="font-heading font-medium tracking-wider mt-4">Engineering Intern</p>
				</div>
				<div
					class="person-card py-14 px-10 mx-auto col-span-4 flex my-10 flex-col justify-center items-center"
				>
					<img class="rounded-full mb-6 pointer-events-none" src="/about/nimay.png" alt="" />
					<h1 class="font-heading text-green-500 font-semibold text-xl">Nimaye Garodia</h1>
					<p class="font-heading font-medium tracking-wider mt-4">Engineering Intern</p>
				</div>
			</div>
			<img
				style="margin-right: -370px; z-index: -20;"
				class="absolute top-8 right-0"
				src="/about/right_pattern.svg"
				alt=""
			/>
			<img
				style="margin-left: -370px; z-index: -20;"
				class="absolute bottom-0 left-0"
				src="/about/left_pattern.svg"
				alt=""
			/>
		</div>
	</div>
	<div class="bg-blue-700">
		<div
			class="max-w-1260 relative text-white-100 mx-auto px-6 pb-20 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 pt-10 z-20"
		>
			<h1
				class="font-heading text-center mx-auto col-span-4 md:col-span-8 lg:col-span-12 w-56 font-semibold text-3xl"
			>
				Our Believers
			</h1>
			<div
				class="my-16 col-span-4 md:col-span-8 lg:col-span-12 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12"
			>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://1517fund.com/"
					class="investor-card py-14 px-10 mx-auto col-span-4 lg:grid-span-6 flex my-10 flex-col justify-center items-center"
				>
					<img class="rounded-3xl mb-6 pointer-events-none" src="/about/1517.png" alt="" />
					<h1 class="font-heading text-green-500 font-semibold text-xl">1517 Fund</h1>
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://helpfulengineering.org/"
					class="investor-card py-14 px-10 mx-auto col-span-4 flex my-10 flex-col justify-center items-center"
				>
					<img class="rounded-3xl mb-6 pointer-events-none" src="/about/helpful.png" alt="" />
					<h1 class="font-heading text-green-500 font-semibold text-xl">Helpful Engineering</h1>
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://mercatus.org/emergent-ventures"
					class="investor-card py-14 px-10 mx-auto col-span-4 flex my-10 flex-col justify-center items-center"
				>
					<img class="rounded-3xl mb-6 pointer-events-none" src="/about/EV.png" alt="" />
					<h1 class="font-heading text-green-500 font-semibold text-xl">Emergent Ventures</h1>
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://gradcapital.in"
					class="investor-card py-14 px-10 mx-auto col-span-4  flex my-10 flex-col justify-center items-center"
				>
					<img class="rounded-3xl mb-6 pointer-events-none" src="/about/gc.png" alt="" />
					<h1 class="font-heading text-green-500 font-semibold text-xl">Grad Capital</h1>
				</a>
			</div>
			<img
				style="margin-right: -370px; z-index: -20;"
				class="absolute top-8 right-0"
				src="/about/right_pattern.svg"
				alt=""
			/>
			<img
				style="margin-left: -370px; z-index: -20;"
				class="absolute bottom-0 left-0"
				src="/about/left_pattern.svg"
				alt=""
			/>
		</div>
	</div>
</main>

<style>
	.text-max-560 {
		max-width: 530px;
	}
	.person-card {
		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(23px);
		border-radius: 8px;
		max-width: 370px;
		max-height: 395px;
		margin-left: auto;
		margin-right: auto;
	}
	.investor-card {
		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(23px);
		border-radius: 8px;
		width: 300px;
		max-height: 395px;
		margin-left: auto;
		margin-right: auto;
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
	.map {
		max-width: 350px;
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
		.text-max-560 {
			max-width: 450px;
		}
	}

	/* laptop Styles */

	@media (min-width: 1024px) {
		.banner {
			background-size: 800px;
			background-position-x: right;
			background-position-y: 0rem;
		}
		.text-max-560 {
			max-width: 560px;
		}
		.map {
			max-width: 390px;
		}
	}
</style>
