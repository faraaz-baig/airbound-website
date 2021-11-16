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
				<img src="/Home-page/section_4/step1.png" alt="" />
				<div class="timeline__text text-white-100">
					<h1 class="text-green-500 font-medium text-sm tracking-widest">STEP 1</h1>
					<h2 class="font-medium">Order from local shops through our app</h2>
				</div>
			</div>
			<div class="timeline__middle">
				<div class="timeline__middle_point" />
			</div>
			<div class="timeline__component my-5">
				<img src="/Home-page/section_4/step2.png" alt="" />
				<div class="timeline__text text-white-100">
					<h1 class="text-green-500 font-medium text-sm tracking-widest">STEP 2</h1>
					<h2 class="font-medium">Wait for 5 minutes while our drones do their magic</h2>
				</div>
			</div>
			<div class="timeline__middle">
				<div class="timeline__last_point" />
			</div>
			<div class="timeline__component">
				<img src="/Home-page/section_4/step3.png" alt="" />
				<div class="timeline__text text-white-100">
					<h1 class="text-green-500 font-medium text-sm tracking-widest">STEP 3</h1>
					<h2 class="font-medium">Order Deliverd! Blink and you’ll miss it</h2>
				</div>
			</div>
		</div>
		<!-- laptop timeline -->
		<div class="laptop_timeline font-heading text-4xl">
			<div class="laptop_timeline__img">
				<img src="/Home-page/section_4/step1.png" alt="" />
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
				<h2 class="font-medium">Wait for 5 minutes while our drones do their magic</h2>
			</div>
			<div class="laptop_timeline__middle">
				<div class="laptop_timeline__middle__point" />
			</div>
			<div class="laptop_timeline__middle__img my-16">
				<img src="/Home-page/section_4/step2.png" alt="" />
			</div>
			<div class="laptop_timeline__img">
				<img src="/Home-page/section_4/step3.png" alt="" />
			</div>
			<div class="laptop_timeline__middle">
				<div class="laptop_timeline__last__point" />
			</div>
			<div class="laptop_timeline__text text-white-100">
				<h1 class="text-green-500 text-sm font-medium tracking-widest">STEP 3</h1>
				<h2 class="font-medium">Order Deliverd! Blink and you’ll miss it</h2>
			</div>
		</div>
	</div>
</div>

<style>
	img {
		pointer-events: none;
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
		background-image: url('/Home-page/section_4/point.svg');
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
		background-image: url('/Home-page/section_4/point.svg');
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
		background-image: url('/Home-page/section_4/point.svg');
		background-repeat: no-repeat;
		margin-top: 5rem;
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

	/* Small Tablet Styles */

	@media (min-width: 640px) {
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
			margin-top: 9rem;
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
			margin-top: 12rem;
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
			background-image: url('/Home-page/section_4/point.svg');
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
			background-image: url('/Home-page/section_4/point.svg');
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
			background-image: url('/Home-page/section_4/point.svg');
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
