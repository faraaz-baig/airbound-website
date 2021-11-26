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

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>Airbound | Delivery made Simple</title>
	<meta
		name="description"
		content="Airbound is a convenient service that allows you to shop in your city and support local business and get your order delivered via our drone."
	/>

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://airbound.co/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Airbound | Delivery made Simple" />
	<meta
		property="og:description"
		content="Airbound is a convenient service that allows you to shop in your city and support local business and get your order delivered via our drone."
	/>
	<meta property="og:image" content="https://airbound.co/banner_image.png" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="airbound.co" />
	<meta property="twitter:url" content="https://airbound.co/" />
	<meta name="twitter:title" content="Airbound | Delivery made Simple" />
	<meta
		name="twitter:description"
		content="Airbound is a convenient service that allows you to shop in your city and support local business and get your order delivered via our drone."
	/>
	<meta name="twitter:image" content="https://airbound.co/banner_image.png" />

	<!-- Meta Tags Generated via https://www.opengraph.xyz -->
</svelte:head>

<div class={`relative overflow-x-hidden ${$open ? 'overflow-hidden' : ''}  `}>
	<Navbar />
	<Sidebar />
	<slot />
	<Footer />
</div>
