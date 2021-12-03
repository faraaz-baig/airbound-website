<script>
	import TypedJs from '@loscrackitos/svelte-typed-js';
	import supabase from '$lib/db';
	let email;
	let submit = false;
	async function sendData() {
		let formated_email = email.toLowerCase();
		const { error } = await supabase
			.from('email_entries')
			.insert([{ email: formated_email }], { returning: 'minimal' });
		if (error) throw new Error(console.log(error.message));
		return;
	}
</script>

<div
	class="
    text-white-100
	hero-img
	"
>
	<div class="buildings relative ">
		<div class="max-w-1260 mx-auto grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
			<div
				class="text-container pt-10 pb-96 px-4 mt-36 md:mt-40 xl:52 col-span-4 md:col-span-8 lg:col-span-12 mx-auto text-center"
			>
				<TypedJs
					strings={['Simple', 'Accessible', 'Faster']}
					typeSpeed={100}
					backSpeed={50}
					loop={true}
				>
					<h1 class="font-heading text-4xl sm:text-5xl xl:text-6xl font-semibold">
						Delivery Made <br /> <span class="text-green-500 typing" />
					</h1>
				</TypedJs>
				<p class="font-body font-medium lg:text-lg mt-8">
					Rapid air-based delivery to get you what you need, when you need it, no matter where you
					are. Its that simple.
				</p>
				<form
					on:submit|preventDefault={() => (submit = true)}
					class="mt-10 mb-5 bg-white-100 bg-opacity-20 w-full rounded-lg lg:mb-6 lg:pt-1 font-heading flex relative placeholder-white-200 placeholder-opacity-50"
				>
					<input
						placeholder="Enter Your Email"
						class="p-4 bg-transparent text-sm md:text-base placeholder-white-200 placeholder-opacity-50"
						bind:value={email}
						type="email"
						required="true"
					/>
					<button
						on:click={() => (submit = false)}
						class="py-2 text-sm flex-grow-0 px-3 absolute z-10 rounded-md right-2"
						>Join our waitlist</button
					>
				</form>
				{#if submit}
					{#await sendData()}
						<p class="text-center opacity-60 text-xs">Sending data...</p>
					{:then data}
						<p class="text-center opacity-60 text-xs">Succesfully registered your email!</p>
					{:catch error}
						<p class="text-center opacity-60 text-xs">Some thing went wrong :(</p>
					{/await}
				{/if}
			</div>
		</div>
		<img
			class="absolute bottom-0 right-0 moblie_image pointer-events-none"
			src="/Home-page/hero-section/building_right_mobile.svg"
			alt=""
		/>
		<img
			class="absolute bottom-0 right-0 laptop_image pointer-events-none"
			src="/Home-page/hero-section/laptop_right.svg"
			alt=""
		/>
		<img
			class="absolute bottom-0 left-0 laptop_image pointer-events-none"
			src="/Home-page/hero-section/laptop_left.svg"
			alt=""
		/>
	</div>
</div>

<style>
	*::placeholder {
		color: #ffffff !important;
		opacity: 0.5;
		font-size: 14px;
	}
	*::-webkit-input-placeholder {
		color: #ffffff !important;
		opacity: 0.5;
		font-size: 14px;
	}
	.laptop_image {
		display: none;
	}
	.moblie_image {
		max-width: 340px;
		margin-bottom: -1rem;
	}
	form button {
		background: #1d3dae;
		backdrop-filter: blur(12.0437px);
	}
	form input {
		width: calc(100% - 140px);
	}

	input:focus {
		outline: none;
	}
	form button {
		top: 0.45rem;
	}
	.text-container {
		max-width: 330px;
	}
	.hero-img {
		background-image: linear-gradient(357.94deg, #4b72ff 39.48%, #3860ef 127.04%);
	}
	.buildings {
		background: url('/Home-page/hero-section/building.png');
		background-repeat: repeat-x;
		background-position-y: bottom;
		background-size: 700px;
	}
	/* Small Tablet Styles */

	@media (min-width: 640px) {
		.moblie_image {
			max-width: 450px;
		}
		.text-container {
			max-width: 480px;
		}
		form {
			width: 80%;
			margin-left: auto;
			margin-right: auto;
		}
	}

	/* Tablet Styles */

	@media (min-width: 768px) {
		.text-container {
			max-width: 500px;
		}
		.moblie_image {
			min-width: 350px;
			max-width: 470px;
		}
		form button {
			top: 0.65rem;
		}
		form {
			width: 80%;
			margin-left: auto;
			margin-right: auto;
		}
		*::placeholder {
			color: #ffffff !important;
			opacity: 0.5;
			font-size: 16px;
		}
		*::-webkit-input-placeholder {
			color: #ffffff !important;
			opacity: 0.5;
			font-size: 16px;
		}
	}

	/* laptop Styles */

	@media (min-width: 1024px) {
		.text-container {
			max-width: 530px;
		}
		.laptop_image {
			display: block;
			width: 280px;
			margin-bottom: -1rem;
		}
		.moblie_image {
			display: none;
		}
		form button {
			top: 0.75rem;
		}
		form {
			width: 80%;
			margin-left: auto;
			margin-right: auto;
		}
	}

	@media (min-width: 1280px) {
		.text-container {
			max-width: 600px;
		}
		.laptop_image {
			display: block;
			width: 390px;
			margin-bottom: -1rem;
		}

		.moblie_image {
			display: none;
		}
		form button {
			top: 0.75rem;
		}
		form {
			width: 80%;
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>
