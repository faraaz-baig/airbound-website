<script>
	import BizSection_2 from '../../components/business/biz_section_2.svelte';
	import BizSection_7 from '../../components/Home-page/section_7.svelte';
	import { onMount } from 'svelte';
	import BizSection_4 from '../../components/business/biz_section_4.svelte';
	import BizSection_3 from '../../components/business/biz_section_3.svelte';
	import BizSection_1 from '../../components/business/biz_section_1.svelte';

	onMount(() => {
		window.scrollTo(0, 0);
	});
</script>

<main>
	<BizSection_1 />
	<BizSection_2 />
	<BizSection_3 />
	<BizSection_4 />
	<BizSection_7 />
</main>
