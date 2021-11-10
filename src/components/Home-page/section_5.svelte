<div class="bg-blue-500 section_5">
	<div class="max-w-1260 mx-auto pb-28 lg:pt-28">
		<div class="mobile__bg__container laptop-hidden">
			<img class="pt-20 w-11/12 mx-auto" src="/Home-page/section_5/drone_top_view.svg" alt="" />
		</div>
		<h1
			class="section_5_heading font-heading font-semibold text-2xl sm:text-3xl md:text-4xl text-white-100 text-center mx-auto mt-10 lg:mt-0 lg:pt-10"
		>
			Not just faster but a <span class="text-green-500"> safer mode of delivery</span>
		</h1>
		<div class="mt-16 laptop-hidden">
			<img
				class="w-7/12 sm:w-6/12 md:w-5/12 mx-auto my-8"
				src="/Home-page/section_5/privacy.svg"
				alt=""
			/>
			<img
				class="w-7/12 sm:w-6/12 md:w-5/12 mx-auto my-8"
				src="/Home-page/section_5/ai_powered.svg"
				alt=""
			/>
			<img
				class="w-7/12 sm:w-6/12 md:w-5/12 mx-auto my-8"
				src="/Home-page/section_5/innovative.svg"
				alt=""
			/>
			<img
				class="w-7/12 sm:w-6/12 md:w-5/12 mx-auto my-8"
				src="/Home-page/section_5/eco_friendly.svg"
				alt=""
			/>
		</div>
		<img
			class="laptop_only_container w-11/12 mx-auto lg:mt-24"
			src="/Home-page/section_5/drone_section.svg"
			alt=""
		/>
	</div>
</div>

<style>
	img {
		pointer-events: none;
	}
	.laptop_only_container {
		display: none;
	}
	.mobile__bg__container {
		background-image: url('/Home-page/section_5/pattern.png');
		background-repeat: repeat;
	}
	.section_5_heading {
		max-width: 18rem;
	}
	/* Small Tablet Styles */

	@media (min-width: 640px) {
		.section_5_heading {
			max-width: 23rem;
		}
	}

	/* Tablet Styles */

	@media (min-width: 768px) {
		.section_5_heading {
			max-width: 26rem;
		}
	}
	/* laptop Styles */

	@media (min-width: 1024px) {
		.laptop_only_container {
			display: block;
		}
		.laptop-hidden {
			display: none;
		}
	}
</style>
