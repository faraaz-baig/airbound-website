<script>
	import Hamburger from './Hamburger.svelte';
	import Logo from './Logo.svelte';
	import { open } from '../../stores/sidebar';
	import { onMount } from 'svelte';

	let topOfPage = true;

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
	});

	function handleScroll() {
		if (window.scrollY > 1) {
			topOfPage = false;
		} else {
			topOfPage = true;
		}
	}
</script>

<nav
	class={`fixed top-0 left-0 right-0 w-full z-50 items-center font-normal text-base text-white-100 py-8 px-6 sm:px-8

		${!topOfPage && !$open ? 'bg-blue-350 backdrop-filter backdrop-blur-xl bg-opacity-10' : ''}
	`}
>
	<div class="max-w-1260 flex flex-row justify-between mx-auto">
		<a
			on:click={() => {
				$open = false;
			}}
			href="/"><Logo /></a
		>
		<Hamburger />
	</div>
</nav>
