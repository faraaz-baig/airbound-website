<script>
	import { accordion_open } from '../../stores/sidebar';
</script>

<main class="accordion">
	<div class="accordion-item">
		<div
			class="accordion-item-header text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold"
			on:click={() => {
				$accordion_open = !$accordion_open;
			}}
		>
			Why Drones?
			<img
				class={`accordion-item-header_arrow_up ${$accordion_open ? 'hidden' : ''} `}
				src="/faqs/arrow_up.svg"
				alt=""
			/>
			<img
				class={`accordion-item-header_arrow_down ${!$accordion_open ? 'hidden' : ''}`}
				src="/faqs/arrow_down.svg"
				alt=""
			/>
		</div>
		<div class={`accordion-item-body p-8 ${$accordion_open ? 'hidden' : ''}`}>
			<div class="accordion-item-body-content">
				<h1 class="font-heading text-lg font-medium my-4">1. Infrastructure</h1>
				<p class="text-base sm:text-lg">
					Since drones can fly, and are relatively small, they do not need roads or runways to take
					off (VTOL).
				</p>
				<h1 class="font-heading text-lg font-medium my-4">2. Speed</h1>
				<p class="text-base sm:text-lg">
					Drones are much faster. Zipline, for example, reduced the speed of blood delivery in
					Rwanda from 3 hours to a mere 15 minutes!
				</p>
				<h1 class="font-heading text-lg font-medium my-4">3. Safety</h1>
				<p class="text-base sm:text-lg">
					Drones can be equipped with multiple safety system, and most importantly, unlike a
					human-operated vehicle, even if a drone fails, there is no loss of life. 3. Emergency
					situations: drones provide a simpler, contactless alternative. Although drones have these
					great advantages, a major disadvantage is cost, as it gets increasingly expensive to
					create drones for a delivery network. This is where our approach differs from others.
					Instead of creating a product, we're creating an open-source framework to allow
					makerspaces and fablabs to create these drones and source them to distribution center, in
					a similar fashion to the M-19 Initiative. By working closely with these makerspaces, we
					can work towards building distribution centers, where drones can be supplied and used in a
					network to intelligently deliver medical supplies where they're most needed.
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
