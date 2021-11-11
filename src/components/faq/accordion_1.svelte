<script>
	import { accordion_1_open } from '../../stores/sidebar';
</script>

<main class="accordion">
	<div class="accordion-item">
		<div
			class="accordion-item-header text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold"
			on:click={() => {
				$accordion_1_open = !$accordion_1_open;
			}}
		>
			What makes Airbound different?
			<img
				class={`accordion-item-header_arrow_up ${$accordion_1_open ? 'hidden' : ''} `}
				src="/faqs/arrow_up.svg"
				alt=""
			/>
			<img
				class={`accordion-item-header_arrow_down ${!$accordion_1_open ? 'hidden' : ''}`}
				src="/faqs/arrow_down.svg"
				alt=""
			/>
		</div>
		<div class={`accordion-item-body p-8 ${$accordion_1_open ? 'hidden' : ''}`}>
			<div class="accordion-item-body-content">
				<!-- <h1 class="font-heading text-lg font-medium my-4">1. Infrastructure</h1> -->
				<p class="text-base sm:text-lg">
					Currently all drone delivery companies operate on a warehouse model.We're changing that.
					Starting from scratch, we've built the world's first Blended Wing Body tailsitter, that
					allows us to deliver with a competitive cargo capacity and range while having a drone
					that's an order of magnitude smaller and lighter than the competition.
				</p>
				<p class="mt-6">
					This allows us to leverage the power of small businesses as takeoff/landing infrastructure
					and scale faster than anyone else
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
