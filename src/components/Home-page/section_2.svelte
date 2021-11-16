<div class="bg-blue-700">
	<div class="max-w-1260 mx-auto py-28 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
		<!-- First Container -->
		<div
			class="content-container col-span-4 md:col-span-8  lg:col-span-12 p-6 md:py-6 md:px-12 flex flex-col md:flex-row items-center justify-between"
		>
			<div class="image-container">
				<img class="mx-auto md:mx-0 " src="/Home-page/section_2/range.png" alt="women" />
			</div>
			<div class="text-contianer md:col-start-6 md:col-end-9 mx-auto mt-6 md:mx-0 md:ml-24">
				<h1
					class="font-heading text-3xl
                sm:text-5xl md:text-4xl md:text-left lg:text-5xl text-white-100 font-semibold text-center"
				>
					Get local orders delivered in less <span class="text-green-500">than 5 minutes</span>
				</h1>
				<p
					class="font-body font-normal text-white-100 mt-4 sm:text-xl md:text-lg lg:text-xl text-center md:text-left"
				>
					We’ve simplified the delivery process from the ground up, so that you don’t have to wait
					for your package.
				</p>
			</div>
		</div>
		<!-- Second Container -->
		<div
			class="content-container col-span-4 md:col-span-8  lg:col-span-12 p-6 md:py-6 md:px-12 flex flex-col mt-24 md:flex-row-reverse items-center justify-between"
		>
			<div class="image-container">
				<img class="mx-auto md:mx-0 " src="/Home-page/section_2/medicals.png" alt="women" />
			</div>
			<div class="text-contianer md:col-start-6 md:col-end-9 mx-auto mt-6 md:mx-0 md:mr-24">
				<h1
					class="font-heading text-3xl
                sm:text-5xl md:text-4xl lg:text-5xl md:text-left text-white-100 font-semibold text-center"
				>
					<span class="text-green-500">From your</span> local pharmacies to coffee shops
				</h1>
				<p
					class="font-body font-normal text-white-100 mt-4 sm:text-xl md:text-lg lg:text-xl text-center md:text-left"
				>
					We partner with local businesses, so that you can get your favorite coffee just the way
					your local barista makes it.
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.image-container {
		width: 30rem;
	}
	img {
		pointer-events: none;
	}
	.text-contianer {
		max-width: 26rem;
	}

	/* Small Tablet Styles */

	@media (min-width: 640px) {
		.text-contianer {
			max-width: 29rem;
		}
	}

	/* Tablet Styles */

	@media (min-width: 768px) {
		.image-container {
			width: 40rem;
		}

		.text-contianer {
			max-width: 25rem;
		}
	}

	/* laptop Styles */

	@media (min-width: 1024px) {
		.image-container {
			width: 40rem;
		}

		.text-contianer {
			max-width: 30rem;
		}
	}
</style>
