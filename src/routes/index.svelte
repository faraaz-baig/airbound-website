<svelte:head>
	<title>Airbound | Delivery made simple</title>
</svelte:head>

<main>
	<!-- hero section -->
	<div
		class=" bg-gradient-to-b
    from-blue-600
    to-blue-500
    min-h-screen
    w-full
    text-white-100"
	/>

	<!-- section 2 -->
	<div class="bg-blue-700">
		<div class="max-w-1260 mx-auto py-28 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
			<!-- First Container -->
			<div
				class="content-container col-span-4 md:col-span-8  lg:col-span-12 p-6 md:py-6 md:px-12 flex flex-col md:flex-row items-center justify-between"
			>
				<div class="image-container relative z-10">
					<img class="mx-auto md:mx-0 " src="section_2/range.png" alt="women" />
					<img
						style="z-index: -9;"
						class="absolute range_bg top-0 left-0"
						src="section_2/range-bg.svg"
						alt=""
					/>
				</div>
				<div class="text-contianer md:col-start-6 md:col-end-9 mx-auto mt-6 md:mx-0 md:ml-24">
					<h1
						class="font-heading text-3xl
					sm:text-5xl md:text-4xl md:text-left lg:text-5xl text-white-100 font-semibold text-center"
					>
						Get local orders delivered in less <span class="text-green-500">than 5 minutes</span>
					</h1>
					<p
						class="text-body font-normal text-white-100 mt-4 sm:text-xl md:text-lg lg:text-xl text-center md:text-left"
					>
						Get your essential orders delivered to you in less than 5 minutes using our fast
						delivery service, so that you aren’t kept waited for long.
					</p>
				</div>
			</div>
			<!-- Second Container -->
			<div
				class="content-container col-span-4 md:col-span-8  lg:col-span-12 p-6 md:py-6 md:px-12 flex flex-col mt-24 md:flex-row-reverse items-center justify-between"
			>
				<div class="image-container relative z-10">
					<img class="mx-auto md:mx-0 " src="section_2/medicals.png" alt="women" />
					<img
						style="z-index: -9;"
						class="absolute medicals_bg top-0 right-0"
						src="section_2/medicals-bg.svg"
						alt=""
					/>
				</div>
				<div class="text-contianer md:col-start-6 md:col-end-9 mx-auto mt-6 md:mx-0 md:mr-24">
					<h1
						class="font-heading text-3xl
					sm:text-5xl md:text-4xl lg:text-5xl md:text-left text-white-100 font-semibold text-center"
					>
						<span class="text-green-500">From your</span> local pharmacies to coffee shops
					</h1>
					<p
						class="text-body font-normal text-white-100 mt-4 sm:text-xl md:text-lg lg:text-xl text-center md:text-left"
					>
						We deliver from a vast variety of locations, so it’s most likely that your selected
						pickup place is already listed by us.
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- section 3 -->
	<div class="section_3 bg-blue-600">
		<div class="max-w-1260 mx-auto py-28">
			<img
				class="mx-auto w-7/12 sm:w-6/12 md:w-5/12 lg:w-5/12"
				src="/section_3/heading.svg"
				alt="heading"
			/>
			<div class="mt-16 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
				<img
					class="col-span-4 shadow-2xl w-6/12  md:w-8/12 lg:w-10/12 mx-auto   my-5 md:my-10"
					src="/section_3/med.png"
					alt=""
				/>
				<img
					class="col-span-4 shadow-2xl w-6/12  md:w-8/12 lg:w-10/12 mx-auto   my-5 md:my-10"
					src="/section_3/grocery.png"
					alt=""
				/>
				<img
					class="col-span-4 shadow-2xl w-6/12  md:w-8/12 lg:w-10/12 mx-auto  my-5 md:my-10"
					src="/section_3/food.png"
					alt=""
				/>
				<img
					class="col-span-4 shadow-2xl w-6/12 lg:col-span-6 md:w-8/12 lg:w-7/12 mx-auto lg:mx-0 lg:justify-self-end lg:mr-10 my-5 md:my-10"
					src="/section_3/stationary.png"
					alt=""
				/>
				<img
					class="col-span-4 shadow-2xl md:col-span-8 lg:col-span-6 w-6/12 md:w-4/12 lg:w-7/12 mx-auto lg:ml-10 lg:mx-0 my-5 md:my-10"
					src="/section_3/equipment.png"
					alt=""
				/>
			</div>
		</div>
	</div>

	<!-- section 4 -->
	<div class="bg-blue-700">
		<div class="max-w-1260 mx-auto py-16">
			<h1
				class="text-green-500 font-heading font-medium text-4xl lg:text-5xl mx-auto w-44 lg:w-56 text-center"
			>
				All in just 3 Steps
			</h1>
			<!-- mobile and tablet timeline -->
			<div class="timeline font-heading text-lg sm:text-2xl md:text-3xl">
				<div class="timeline__middle">
					<div class="timeline__point" />
				</div>
				<div class="timeline__component">
					<img src="/section_4/img_1.png" alt="" />
					<div class="timeline__text text-white-100">
						<h1 class="text-green-500 font-medium text-sm tracking-widest">STEP 1</h1>
						<h2 class="font-medium">Order from local shops through our app</h2>
					</div>
				</div>
				<div class="timeline__middle">
					<div class="timeline__middle_point" />
				</div>
				<div class="timeline__component my-5">
					<img src="/section_4/img_2.png" alt="" />
					<div class="timeline__text text-white-100">
						<h1 class="text-green-500 font-medium text-sm tracking-widest">STEP 2</h1>
						<h2 class="font-medium">Wait for 5 minutes while our drones do their thing</h2>
					</div>
				</div>
				<div class="timeline__middle">
					<div class="timeline__last_point" />
				</div>
				<div class="timeline__component">
					<img src="/section_4/img_3.png" alt="" />
					<div class="timeline__text text-white-100">
						<h1 class="text-green-500 font-medium text-sm tracking-widest">STEP 3</h1>
						<h2 class="font-medium">Order Deliverd! Now wave a ‘ta-ta’ to the drone</h2>
					</div>
				</div>
			</div>
			<!-- laptop timeline -->
			<div class="laptop_timeline font-heading text-4xl">
				<div class="laptop_timeline__img">
					<img src="/section_4/img_1.png" alt="" />
				</div>
				<div class="laptop_timeline__middle">
					<div class="laptop_timeline__point" />
				</div>
				<div class="laptop_timeline__text text-white-100">
					<h1 class="text-green-500 text-sm font-medium tracking-widest">STEP 1</h1>
					<h2 class="font-medium">Order from local shops through our app</h2>
				</div>
				<div class="laptop_timeline__middle__text text-white-100 text-right">
					<h1 class="text-green-500 font-medium text-sm tracking-widest">STEP 2</h1>
					<h2 class="font-medium">Wait for 5 minutes while our drones do their thing</h2>
				</div>
				<div class="laptop_timeline__middle">
					<div class="laptop_timeline__middle__point" />
				</div>
				<div class="laptop_timeline__middle__img my-16">
					<img src="/section_4/img_2.png" alt="" />
				</div>
				<div class="laptop_timeline__img">
					<img src="/section_4/img_3.png" alt="" />
				</div>
				<div class="laptop_timeline__middle">
					<div class="laptop_timeline__last__point" />
				</div>
				<div class="laptop_timeline__text text-white-100">
					<h1 class="text-green-500 text-sm font-medium tracking-widest">STEP 3</h1>
					<h2 class="font-medium">Order Deliverd! Now wave a ‘ta-ta’ to the drone</h2>
				</div>
			</div>
		</div>
	</div>

	<!-- section 5 -->
	<div class="bg-blue-500 section_5">
		<div class="max-w-1260 mx-auto pb-28 lg:pt-28">
			<div class="mobile__bg__container laptop-hidden">
				<img class="pt-20 w-11/12 mx-auto" src="/section_5/specs.png" alt="" />
			</div>
			<h1
				class="section_5_heading font-heading font-semibold text-2xl sm:text-3xl md:text-4xl text-white-100 text-center mx-auto mt-10 lg:mt-0 lg:pt-10"
			>
				Not just faster but a <span class="text-green-500"> safer mode of delivery</span>
			</h1>
			<div class="mt-16 laptop-hidden">
				<img class="w-7/12 sm:w-6/12 md:w-5/12 mx-auto my-8" src="/section_5/privacy.png" alt="" />
				<img class="w-7/12 sm:w-6/12 md:w-5/12 mx-auto my-8" src="/section_5/ai.png" alt="" />
				<img
					class="w-7/12 sm:w-6/12 md:w-5/12 mx-auto my-8"
					src="/section_5/tailsitter.png"
					alt=""
				/>
				<img class="w-7/12 sm:w-6/12 md:w-5/12 mx-auto my-8" src="/section_5/eco.png" alt="" />
			</div>
			<img
				class="laptop_only_container w-11/12 mx-auto lg:mt-24"
				src="/section_5/laptop-img.png"
				alt=""
			/>
		</div>
	</div>

	<!-- section 6 -->
	<div class="bg-blue-700 section_6">
		<div class="max-w-1260 mx-auto py-28  grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
			<div
				class="col-span-4 md:col-span-8 lg:col-span-12 md:grid md:grid-cols-8 lg:grid-cols-12 rounded-2xl bg-blue-500 w-11/12 lg:w-9/12 mx-auto"
			>
				<div class="section_6_img md:col-span-4 lg:col-span-6">
					<img src="/section_6/ppl.png" alt="" />
				</div>
				<div
					class="p-7 md:col-span-4 lg:col-span-6 text-white-100 w-11/12 md:w-full lg:ml-2 text-center md:text-left md:flex md:flex-col md:justify-around mx-auto"
				>
					<h1 class="font-heading text-3xl sm:text-4xl md:text-4xl font-semibold">
						<span class="text-green-500">Empowering</span> Small & Big Businesses
					</h1>
					<p class="font-body mt-4 text-base lg:text-lg">
						We not only help our customers by delivering their orders, but we also empower and
						support small and big businesses!
					</p>
					<a href="/businesses">
						<button
							class="bg-blue-800 mt-6 text-xs sm:text-base lg:text-base py-4 px-6 md:px-5 lg:px-7 rounded-lg font-semibold mx-auto md:mx-0 flex flex-row items-center justify-center"
							>Explore Airbound for Businesses <i class="fa fa-angle-right ml-2" />
						</button></a
					>
				</div>
			</div>
		</div>
	</div>

	<!-- section 7 -->
	<div class="bg-blue-800 text-white-100 section_7 buildings-bg">
		<div class="max-w-1260 mx-auto grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 ">
			<div
				class="form-div mt-10 md:mt-0 shadow-4xl bg-blue-500 col-span-4 md:col-span-8 lg:col-span-12 p-4 rounded-2xl md:rounded-b-3xl md:rounded-t-none"
			>
				<h1
					class="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl my-6 font-semibold lg:mt-16 mx-auto w-72 sm:w-80 md:w-96 w-100 text-center tracking-wider"
				>
					We aren’t just another Drone Delivery
				</h1>
				<p
					class="body-form font-body text-sm sm:text-base font-normal lg:text-lg text-center mx-auto"
				>
					Current drone delivery models are slow, expensive, and limited in terms of coverage. By
					decentralising drone deliveries we are changing it all! Join the waitlist to be a part of
					the future of easy & seamless deliveries!
				</p>
				<form
					class="mt-10 mb-5 bg-white-100 bg-opacity-20 w-full rounded-2xl lg:mb-16 lg:pt-1 font-heading flex relative"
				>
					<input
						placeholder="Enter Your Email"
						class="p-4 bg-transparent z-0 text-xs md:text-base"
						type="text"
					/>
					<button class="py-2 text-sm flex-grow-0 px-3 absolute z-10 rounded-xl right-2"
						>Join our waitlist</button
					>
				</form>
			</div>
		</div>
	</div>

	<!-- footer -->
	<footer class="bg-blue-900 pb-12 font-heading">
		<div class="max-w-1260 mx-auto text-white-100">
			<div class="lg:flex lg:flex-row-reverse lg:justify-evenly lg:pt-8">
				<div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 grid-div">
					<img
						class="col-span-4 lg:self-end md:col-span-8  lg:col-span-12 mx-auto mb-5 lg:mb-8"
						src="/footer/footer_logo.svg"
						alt=""
					/>
					<div class="col-span-4 md:col-span-8  lg:col-span-12 mx-auto mt-10 lg:mt-0">
						<a class="icon p-2 mx-2" href="https://linkedin.com/company/airbound-co"
							><i class="fab fa-linkedin-in" /></a
						>
						<a class="icon p-2 mx-2" href="https://instagram.com/airbound.co"
							><i class="fab fa-instagram" /></a
						>
						<a class="icon p-2 mx-2" href="https://twitter.com/airbound_co"
							><i class="fab fa-twitter" /></a
						>
						<a class="icon p-2 mx-2" href="mailto:finfo@airbound.co"
							><i class="far fa-envelope" /></a
						>
					</div>
				</div>
				<div
					class="grid w-10/12 lg:w-6/12 lg:mx-0 grid-cols-4 md:grid-cols-8 lg:grid-cols-12 my-14 lg:border-r lg:pr-20 mx-auto border-t border-b border-opacity-20 lg:border-t-0 lg:border-b-0 py-6 border-white-300"
				>
					<a class="col-span-2 md:col-span-4 lg:col-span-6 text-center my-4" href="/businesses"
						>For Businesses</a
					>
					<a class="col-span-2 md:col-span-4 lg:col-span-6 text-center my-4" href="/careers"
						>Careers</a
					>
					<a class="col-span-2 md:col-span-4 lg:col-span-6 text-center my-4" href="/faq">FAQs</a>
					<a class="col-span-2 md:col-span-4 lg:col-span-6 text-center my-4" href="/about"
						>About Us</a
					>
				</div>
			</div>
			<h1 class="text-sm my-3 opacity-50 text-center">&copy; Airbound Aerosapce 2021.</h1>
			<a class="block text-sm opacity-50 text-center" href="/privacy-policy">Privacy & Terms</a>
		</div>
	</footer>
</main>

<style>
	form button {
		top: 0.35rem;
	}
	.buildings-bg {
		background-image: url('/section_7/building.png');
		background-repeat: repeat-x;
		background-size: 750px 200px;
		background-position-y: bottom;
		background-position-x: right;
	}
	.grid-div {
		padding-top: 5rem;
	}
	.icon {
		background: #172f63;
		width: 28px;
		height: 28px;
		border-radius: 500px;
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
	::placeholder {
		color: white;
		opacity: 1;
	}
	input:focus {
		outline: none;
	}
	.section_6_img img {
		width: 20rem;
		margin-left: auto;
		margin-right: auto;
	}
	.section_6_img {
		background-image: url('/section_6/biz.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position-y: 50%;
		height: 450px;
		border-radius: 1rem 1rem 0 0;
	}
	.section_6 {
		background-image: url('/section_3/pattern.png');
		background-blend-mode: overlay;
		background-size: cover;
	}
	.laptop_only_container {
		display: none;
	}
	.mobile__bg__container {
		background-image: url('/section_5/pattern.png');
		background-repeat: repeat;
	}
	.section_5_heading {
		max-width: 18rem;
	}
	.laptop_timeline {
		display: none;
	}
	.timeline {
		max-width: 350px;
		padding: 1.5rem;
		margin-top: 3rem;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 0;
		display: grid;
		grid-template-columns: 6px 1fr;
	}

	.timeline__middle {
		position: relative;
		background-color: #18edf1;
	}

	.timeline__point {
		position: absolute;
		top: 50%;
		left: 0;
		margin-left: 2px;
		transform: translateX(-50%);
		width: 39px;
		height: 50px;
		background-color: #1d3dae;
		background-image: url('/section_4/point.svg');
		background-repeat: no-repeat;
		margin-top: 4.5rem;
	}

	.timeline__last_point {
		position: absolute;
		top: 50%;
		left: 0;
		margin-left: 2px;
		transform: translateX(-50%);
		width: 39px;
		height: 110px;
		background-color: #1d3dae;
		background-image: url('/section_4/point.svg');
		background-repeat: no-repeat;
		margin-top: 5rem;
	}

	.timeline__middle_point {
		position: absolute;
		top: 50%;
		left: 0;
		margin-left: 2px;
		transform: translateX(-50%);
		width: 39px;
		height: 60px;
		background-color: #1d3dae;
		background-image: url('/section_4/point.svg');
		background-repeat: no-repeat;
		margin-top: 6rem;
	}

	.timeline__component {
		padding: 20px;
	}

	.timeline__component img {
		max-width: 250px;
	}

	.timeline__text {
		margin-left: 1rem;
		margin-top: 1rem;
		max-width: 250px;
	}

	.section_3 {
		background-image: url('/section_3/pattern.png');
		background-repeat: repeat;
		background-size: contain;
		background-blend-mode: overlay;
	}

	.range_bg {
		margin-left: -100px;
		margin-top: -10px;
	}

	.medicals_bg {
		margin-right: -100px;
	}
	.text-contianer {
		max-width: 26rem;
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
		.section_5_heading {
			max-width: 23rem;
		}
		.text-contianer {
			max-width: 29rem;
		}

		.range_bg {
			margin-left: -175px;
			margin-top: -10px;
		}
		.medicals_bg {
			margin-right: -150px;
			margin-top: -20px;
		}

		/* timeline styles */
		.timeline__component img {
			max-width: 400px;
			margin-left: auto;
			margin-right: auto;
		}
		.timeline__text {
			margin-left: 3rem;
			max-width: 300px;
		}

		.timeline {
			max-width: 500px;
		}

		.timeline__middle_point {
			margin-top: 11rem;
		}

		.timeline__last_point {
			margin-top: 9rem;
			height: 120px;
		}

		.timeline__point {
			margin-top: 8rem;
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

		.section_5_heading {
			max-width: 26rem;
		}
		.image-container {
			width: 40rem;
		}

		.text-contianer {
			max-width: 25rem;
		}

		.range_bg {
			margin-left: -75px;
			margin-top: -10px;
		}
		.medicals_bg {
			margin-right: -50px;
			margin-top: -15px;
		}

		/* timeline styles */
		.timeline__component img {
			max-width: 500px;
			margin-left: auto;
			margin-right: auto;
		}
		.timeline__text {
			margin-left: 4rem;
			max-width: 400px;
		}

		.timeline {
			max-width: 600px;
		}

		.timeline__middle_point {
			margin-top: 14rem;
		}

		.timeline__last_point {
			margin-top: 11.5rem;
			height: 130px;
		}

		.timeline__point {
			margin-top: 10.5rem;
		}
	}

	/* laptop Styles */

	@media (min-width: 1024px) {
		form button {
			top: 0.75rem;
		}
		.buildings-bg {
			background-image: url('/section_7/building.png');
			background-repeat: repeat-x;
			background-size: 1100px 300px;
			background-position-y: bottom;
			background-position-x: right;
		}
		.grid-div {
			padding-top: 0rem;
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
		.laptop_only_container {
			display: block;
		}
		.laptop-hidden {
			display: none;
		}
		.image-container {
			width: 40rem;
		}

		.text-contianer {
			max-width: 30rem;
		}

		.range_bg {
			margin-left: -140px;
			margin-top: -20px;
		}
		.medicals_bg {
			margin-right: -50px;
			margin-top: -15px;
		}
		.timeline {
			display: none;
		}
		.laptop_timeline {
			display: grid;
			max-width: 1000px;
			padding: 1.5rem;
			margin-top: 3rem;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 0;
			display: grid;
			grid-template-columns: 1fr 6px 1fr;
		}

		.laptop_timeline__middle {
			position: relative;
			background-color: #18edf1;
		}

		/* point styles  */
		.laptop_timeline__point {
			position: absolute;
			top: 50%;
			left: 0;
			margin-left: 2px;
			transform: translateX(-50%);
			width: 39px;
			height: 70px;
			background-color: #1d3dae;
			background-image: url('/section_4/point.svg');
			background-repeat: no-repeat;
		}

		.laptop_timeline__middle__point {
			position: absolute;
			top: 50%;
			left: 0;
			margin-left: 2px;
			transform: translateX(-50%);
			width: 39px;
			height: 70px;
			background-color: #1d3dae;
			background-image: url('/section_4/point.svg');
			background-repeat: no-repeat;
			margin-top: -20px;
		}
		.laptop_timeline__last__point {
			position: absolute;
			top: 50%;
			left: 0;
			margin-left: 2px;
			transform: translateX(-50%);
			width: 39px;
			height: 15rem;
			background-color: #1d3dae;
			background-image: url('/section_4/point.svg');
			background-repeat: no-repeat;
			margin-top: -20px;
		}
		.laptop_timeline__img img {
			max-width: 450px;
			align-self: center;
			margin-right: 2.1rem;
		}
		.laptop_timeline__text {
			margin-left: 5rem;
			margin-top: 7rem;
			align-self: center;
		}
		.laptop_timeline__middle__text {
			margin-right: 5rem;
			margin-top: 7rem;
			align-self: center;
		}
		.laptop_timeline__middle__img img {
			max-width: 450px;
			align-self: center;
			margin-left: 2.1rem;
		}
	}
</style>
