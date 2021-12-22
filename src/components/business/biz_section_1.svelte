<script>
	import TypedJs from '@loscrackitos/svelte-typed-js';
</script>

<div
	class="bg-blue-800 text-white-100"
>
	<div>
		<div class="grid grid-cols-4 px-10 mx-auto max-w-1260 md:grid-cols-8 lg:grid-cols-12 md:pt-32">
			<div
				class="max-w-[350px] sm:max-w-[380px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[400px] mb-14 mt-36 md:mt-28 xl:mt-40 col-span-4 md:col-span-4 lg:col-span-6 mx-auto text-left md:text-left"
			>
				<TypedJs
					strings={['Medicines', 'Essentials', 'Pharmaceuticals', 'Groceries']}
					typeSpeed={100}
					backSpeed={50}
					loop={true}
				>
					<h1
						class="text-4xl font-semibold font-heading sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl"
					>
						Deliver
						<span class="text-green-500 typing" /> <br /> Better
					</h1>
				</TypedJs>
				<p class="mt-8 font-body lg:text-lg">
					Faster, cheaper, and more accessible than anything else. What are you waiting for?
				</p>
			</div>
			<img
				class="hidden pointer-events-none md:block md:w-full md:-mb-4 md:col-start-5 md:col-end-9 lg:col-start-7 lg:col-end-13"
				src="/business/hero_section/hero_image.svg"
				alt=""
			/>
			<img
				class="col-span-4 w-[350px] md:hidden mx-auto pointer-events-none"
				src="/business/hero_section/hero_image_mobile.svg"
				alt=""
			/>
		</div>
	</div>
</div>
