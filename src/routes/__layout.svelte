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
	<title>Airbound | Delivery made simple</title>
	<meta name="title" content="Airbound | Delivery made Simple" />
	<meta
		name="description"
		content="Airbound is a convenient service that allows you to shop in your city and support local business and get your order delivered via our drone."
	/>
	<meta
		name="keywords"
		content="drone, drone delivery, airbound, airbound aerospace, logistics, last mile delivery, VTOL, fixed wing, local businesses, medicines, "
	/>
	<meta name="robots" content="index, follow" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="4 days" />
	<meta name="author" content="Airbound " />
</svelte:head>
<meta property="og:title" content="Airbound " />
<meta property="og:site_name" content="Airbound" />
<meta property="og:url" content="https://airbound.co" />
<meta
	property="og:description"
	content="Airbound is a convenient service that allows you to shop in your city and support local business and get your order delivered via our drone."
/>
<meta property="og:type" content="website" />
<meta property="og:image" content="https://airbound.co/banner_image.png" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Airbound" />
<meta
	name="twitter:description"
	content="Airbound is a convenient service that allows you to shop in your city and support local business and get your order delivered via our drone."
/>
<meta name="twitter:url" content="https://airbound.co" />
<meta name="twitter:image" content="https://airbound.co/banner_image.png" />
<meta name="twitter:image:alt" content="https://airbound.co/banner_image.png" />
<meta name="twitter:creator" content="@airbound_co" />
<meta name="twitter:site" content="@airbound_co" />

<div class={`relative overflow-x-hidden ${$open ? 'overflow-hidden' : ''}  `}>
	<Navbar />
	<Sidebar />
	<slot />
	<Footer />
</div>
