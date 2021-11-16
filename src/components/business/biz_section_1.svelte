<script>
	import TypedJs from '@loscrackitos/svelte-typed-js';
</script>

<div
	class="
    text-white-100
	hero-img
	"
>
	<div>
		<div class="max-w-1260 mx-auto grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 px-10 md:pt-32">
			<div
				class=" text-container mb-14 mt-36 md:mt-28 xl:mt-40 col-span-4 md:col-span-4 lg:col-span-6 mx-auto text-left md:text-left"
			>
				<TypedJs
					strings={['Medicines', 'Essentials', 'Pharmaceuticals', 'Groceries']}
					typeSpeed={100}
					backSpeed={50}
					loop={true}
				>
					<h1
						class="font-heading text-4xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold"
					>
						Deliver
						<span class="text-green-500 typing" /> <br /> Better
					</h1>
				</TypedJs>
				<p class="font-body lg:text-lg mt-8">
					Faster, cheaper, and more accessible than anything else. What are you waiting for?
				</p>
			</div>
			<img
				class="laptop_image md:col-start-5 md:col-end-9 pointer-events-none lg:col-start-7 lg:col-end-13"
				src="/business/hero_section/hero_image.svg"
				alt=""
			/>
			<img
				class="col-span-4 moblie_image pointer-events-none"
				src="/business/hero_section/hero_image_mobile.svg"
				alt=""
			/>
		</div>
	</div>
</div>

<style>
	.laptop_image {
		display: none;
	}
	.moblie_image {
		width: 350px;
		margin-right: auto;
		margin-left: auto;
	}
	.text-container {
		max-width: 350px;
	}
	.hero-img {
		background-color: #172f63;
	}
	/* Small Tablet Styles */

	@media (min-width: 640px) {
		.text-container {
			max-width: 380px;
		}
	}

	/* Tablet Styles */

	@media (min-width: 768px) {
		.text-container {
			max-width: 350px;
		}
		.laptop_image {
			display: block;
			width: 100%;
			margin-bottom: -1rem;
		}
		.moblie_image {
			display: none;
		}
	}

	/* laptop Styles */

	@media (min-width: 1024px) {
		.text-container {
			max-width: 400px;
		}
		.laptop_image {
			display: block;
			width: 100%;
			margin-bottom: -1rem;
		}
		.moblie_image {
			display: none;
		}
	}

	@media (min-width: 1280px) {
		.text-container {
			max-width: 450px;
		}

		.moblie_image {
			display: none;
		}
	}
</style>
