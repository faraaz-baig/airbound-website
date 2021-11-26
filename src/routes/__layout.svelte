<script>
	import '../app.css';
	import Navbar from '../components/Navigation-bar/navbar.svelte';
	import Sidebar from '../components/Navigation-bar/Sidebar.svelte';
	import Footer from '../components/footer.svelte';
	import { open } from '../stores/sidebar';
	import { onMount } from 'svelte';

	onMount(() => {
		window.scrollTo(0, 0);
	});
</script>

<div class={`relative overflow-x-hidden ${$open ? 'overflow-hidden' : ''}  `}>
	<Navbar />
	<Sidebar />
	<slot />
	<Footer />
</div>
