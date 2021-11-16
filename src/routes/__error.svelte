<script context="module">
	export const load = ({ error, status }) => {
		return {
			props: {
				error,
				status
			}
		};
	};
</script>

<script>
	export let error;
	export let status;
</script>

<div class="bg-blue-800">
	<div class="max-w-1260 text-white-100 mx-auto px-6 py-40">
		<div class="flex flex-col lg:flex-row md:items-center">
			<div class="text-container text-center lg:text-left">
				<h1 class="font-heading font-semibold text-5xl md:text-6xl">{error.name} {status}</h1>
				<p class="font-body my-10 md:text-lg">
					The link you followed may be broken, or the page may have been removed. <span
						class="font-semibold">{error.message}</span
					>
				</p>
				<a href="/" class="py-3 px-4 bg-blue-500 rounded-md md:text-lg">Go back to home</a>
			</div>
			<img class="mt-20 lg:mt-0 lg:hidden" src="/error/404image-mobile.svg" alt="404_error_image" />
			<img class="mt-20 lg:mt-0 hidden lg:block" src="/error/404image.svg" alt="404_error_image" />
		</div>
	</div>
</div>

<style>
	img {
		max-width: 30rem;
		margin-left: auto;
		margin-right: auto;
	}
	.text-container {
		max-width: 22rem;
		margin-left: auto;
		margin-right: auto;
	}
	@media (min-width: 640px) {
		.text-container {
			max-width: 30rem;
			margin-left: auto;
			margin-right: auto;
		}
	}
	@media (min-width: 768px) {
	}
	@media (min-width: 1024px) {
		.text-container {
			max-width: 26rem;
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>
