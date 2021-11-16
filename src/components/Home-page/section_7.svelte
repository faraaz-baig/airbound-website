<script>
	import supabase from '$lib/db';
	let email;
	let submit = false;
	async function sendData() {
		const { error } = await supabase
			.from('email_entries')
			.insert([{ email: email }], { returning: 'minimal' });
		if (error) throw new Error(console.log(error.message));
		return;
	}
</script>

<div class="bg-blue-800 text-white-100 section_7 buildings-bg">
	<div class="max-w-1260 mx-auto grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 ">
		<div
			class="form-div mt-10 md:mt-0 shadow-4xl bg-blue-500 col-span-4 md:col-span-8 lg:col-span-12 p-4 rounded-lg md:rounded-b-lg md:rounded-t-none"
		>
			<h1
				class="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl my-6 font-semibold lg:mt-16 mx-auto w-72 sm:w-80 md:w-96 w-100 text-center tracking-wider"
			>
				We aren’t just another Drone Delivery
			</h1>
			<p class="body-form font-body text-sm md:text-base font-normal text-center mx-auto">
				Current drone delivery models are slow, expensive, and limited in terms of coverage. By
				decentralising drone deliveries we are changing it all! Join the waitlist to be a part of
				the future of easy & seamless deliveries!
			</p>
			<form
				on:submit|preventDefault={() => (submit = true)}
				class="mt-10 mb-5 bg-white-100 bg-opacity-20 w-full rounded-lg lg:mb-8 lg:pt-1 font-heading flex relative placeholder-white-200 placeholder-opacity-50"
			>
				<input
					placeholder="Enter Your Email"
					class="p-4 bg-transparent text-sm md:text-base placeholder-white-200 placeholder-opacity-50"
					required="true"
					bind:value={email}
					type="email"
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
	.form-div {
		min-width: 100px;
		max-width: 370px;
		margin-right: auto;
		margin-left: auto;
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
		top: 0.35rem;
	}
	.buildings-bg {
		background-image: url('/Home-page/section_7/building.png');
		background-repeat: repeat-x;
		background-size: 750px 200px;
		background-position-y: bottom;
		background-position-x: right;
	}

	/* Small Tablet Styles */

	@media (min-width: 640px) {
		.form-div {
			min-width: 100px;
			max-width: 450px;
			padding: 1rem 2rem;
			margin-right: auto;
			margin-left: auto;
		}
	}

	/* Tablet Styles */

	@media (min-width: 768px) {
		form button {
			top: 0.65rem;
		}
		.body-form {
			width: 30rem;
		}
		form {
			width: 80%;
			margin-left: auto;
			margin-right: auto;
		}

		.form-div {
			min-width: 600px;
			max-width: 600px;
			margin-right: auto;
			margin-left: auto;
		}
	}
	/* laptop Styles */

	@media (min-width: 1024px) {
		form button {
			top: 0.75rem;
		}
		.buildings-bg {
			background-image: url('/Home-page/section_7/building.png');
			background-repeat: repeat-x;
			background-size: 1100px 300px;
			background-position-y: bottom;
			background-position-x: right;
		}
		.w-100 {
			width: 28rem;
		}
		.body-form {
			width: 30rem;
		}
		form {
			width: 55%;
			margin-left: auto;
			margin-right: auto;
		}
		.form-div {
			min-width: 750px;
			max-width: 750px;
			margin-right: auto;
			margin-left: auto;
		}
	}
</style>
