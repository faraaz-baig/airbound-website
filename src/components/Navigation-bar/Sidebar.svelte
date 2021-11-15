<script>
	import { open } from '../../stores/sidebar';
</script>

<aside
	on:click={() => {
		$open = false;
	}}
	class={`fixed overflow-y-scroll min-h-screen text-center flex flex-col justify-center items-center text-lg lg:text-xl xl:text-2xl font-heading text-white-100 bg-blue-800 bg-opacity-90 z-40 w-full ${
		$open ? 'open' : ''
	}`}
>
	<nav class="px-16 pt-14 flex flex-col items-start">
		<a class="pb-5 mx-auto" href="/businesses">For Businesses</a>
		<a class="py-5 mx-auto" href="/">Home</a>
		<a class="py-5 mx-auto" href="/about">About Us</a>
		<a class="py-5 mx-auto" href="/faq">FAQs</a>
		<a class="py-5 mx-auto" href="/careers">Careers</a>
		<a class="py-5 mb-20 md:mb-20 lg:mb-8 xl:mb-16 mx-auto" href="/contact">Contact Us</a>
	</nav>

	<div class="mx-auto">
		<ul class="flex  flex-row mx-auto lg:text-2xl">
			<li class="mr-10">
				<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/airbound_co"
					><i class="fab fa-twitter" /></a
				>
			</li>
			<li class="mr-10">
				<a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/company/airbound-co"
					><i class="fab fa-linkedin" /></a
				>
			</li>
			<li>
				<a target="_blank" rel="noopener noreferrer" href="https://instagram.com/airbound.co"
					><i class="fab fa-instagram" /></a
				>
			</li>
		</ul>
		<p
			class="mt-4 lg:mt-6 text-center font-body opacity-60 text-white-100 font-thin text-xs lg:text-sm"
		>
			&copy; Airbound Aerospace
		</p>
	</div>
</aside>

<style>
	aside {
		/* offscreen by default */
		right: -100%;
		transition: all 0.1s ease;
		backdrop-filter: blur(30px);
		height: 100vh;
	}

	.open {
		/* slide on screen */
		right: 0;
	}
</style>
