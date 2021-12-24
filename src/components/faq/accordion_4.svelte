<script>
	import { accordion_4_open } from '../../stores/sidebar';
</script>

<main class="accordion">
	<div class="accordion-item">
		<div
			class="accordion-item-header text-base sm:text-xl md:text-2xl tracking-wider font-semibold hover:opacity-60"
			on:click={() => {
				$accordion_4_open = !$accordion_4_open;
			}}
		>
			Who’s funding this?

			<img
				class={`accordion-item-header_arrow_up ${$accordion_4_open ? 'hidden' : ''} `}
				src="/faqs/arrow_up.svg"
				alt=""
			/>
			<img
				class={`accordion-item-header_arrow_down ${!$accordion_4_open ? 'hidden' : ''}`}
				src="/faqs/arrow_down.svg"
				alt=""
			/>
		</div>
		<div class={`accordion-item-body p-8 ${$accordion_4_open ? 'hidden' : ''}`}>
			<div class="accordion-item-body-content">
				<!-- <h1 class="font-heading text-lg font-medium my-4">1. Infrastructure</h1> -->
				<p class="text-base sm:text-lg">
					So far, we’ve raised funding through multiple grants from <a
						class="underline"
						target="_blank"
						rel="noopener noreferrer"
						href="https://helpfulengineering.org/">Helpful Engineering</a
					>,
					<a
						class="underline"
						target="_blank"
						rel="noopener noreferrer"
						href="https://1517fund.com/">1517 Fund</a
					>, and
					<a
						class="underline"
						target="_blank"
						rel="noopener noreferrer"
						href="https://mercatus.org/emergent-ventures">Emergent Ventures</a
					>, as well as an investment from
					<a
						class="underline"
						target="_blank"
						rel="noopener noreferrer"
						href="https://gradcapital.in">GradCapital</a
					>. We hope to be expanding this list really soon!
				</p>
			</div>
		</div>
	</div>
</main>

<style>
	.accordion {
		width: 100%;
		margin: 2rem auto;
	}
	.accordion-item {
		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(23px);
		border-radius: 8px;
	}
	.accordion-item-header {
		font-family: 'ClashDisplay';
		min-height: 3.5rem;
		line-height: 1.25rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
		padding: 2rem;
	}
	.accordion-item-header_arrow_down {
		width: 20px;
	}
	.accordion-item-header_arrow_up {
		width: 20px;
	}
	.accordion-item-body + .accordion-item-body-content {
		transition: all 1s ease-in-out;
	}
	@media (min-width: 768px) {
		.accordion-item-header_arrow_down {
			width: 25px;
		}
		.accordion-item-header_arrow_up {
			width: 25px;
		}
	}

	@media (min-width: 1024px) {
		.accordion-item-header_arrow_down {
			width: 30px;
		}
		.accordion-item-header_arrow_up {
			width: 30px;
		}
	}
</style>
