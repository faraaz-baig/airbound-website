<script>
	import { open } from '../../stores/sidebar';
</script>

<button
	on:click={() => {
		$open = !$open;
	}}
	class={`hamburger hamburger--slider ${$open ? ' is-active' : ''}`}
	type="button"
>
	<span class="hamburger-box">
		<span class="hamburger-inner" />
	</span>
</button>
