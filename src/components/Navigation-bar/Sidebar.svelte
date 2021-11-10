<script>
	import { open } from '../../stores/sidebar';
</script>

<aside
	on:click={() => {
		$open = false;
	}}
	class={`fixed overflow-y-scroll h-screen text-center flex flex-col text-2xl xl:text-3xl font-heading text-white-100 bg-blue-800 bg-opacity-90 pt-44 lg:pt-20 xl:pt-40 z-40 w-full ${
		$open ? 'open' : ''
	}`}
>
	<nav class="px-16 flex flex-col items-start">
		<a class="py-5 mx-auto" href="/businesses">For Businesses</a>
		<a class="py-5 mx-auto" href="/about">About Us</a>
		<a class="py-5 mx-auto" href="/faq">FAQs</a>
		<a class="py-5 mx-auto" href="/careers">Careers</a>
		<a class="py-5 mb-28 md:mb-28 lg:mb-10 xl:mb-28 mx-auto" href="/contact">Contact Us</a>
	</nav>

	<div class="mx-auto pb-10">
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
