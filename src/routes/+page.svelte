<script lang="ts">
	import { categories, locations, townsByDistrict, getMetricType, getProgressColor, generateRandomData } from "$lib/stores";
	import { CheckCircle, AlertTriangle, TrendingUp, Activity } from "lucide-svelte";
	import { fade } from "svelte/transition";

	// Reactive state using Svelte 5 runes
	let selectedLocation = $state("Sabah (State-wide)");
	let selectedTown = $state("All Towns");
	let selectedCategory = $state(0);
	let categoryData = $state(generateRandomData());

	// Derived values
	let availableTowns = $derived(townsByDistrict[selectedLocation] || []);
	let currentCategory = $derived(categories[selectedCategory]);
	let currentCategoryData = $derived((categoryData as any)[currentCategory?.name] || {});

	// Location change handler
	function handleLocationChange(event: Event) {
		const target = event.target as HTMLSelectElement;
		selectedLocation = target.value;
		const towns = townsByDistrict[target.value] || [];
		selectedTown = towns[0] || "All Towns";
		// Generate fresh data
		categoryData = generateRandomData();
	}

	// Town change handler
	function handleTownChange(event: Event) {
		const target = event.target as HTMLSelectElement;
		selectedTown = target.value;
		// Generate fresh data
		categoryData = generateRandomData();
	}

	// Category change handler
	function handleCategoryChange(index: number) {
		selectedCategory = index;
	}

	// Metric visualization components
	function getMetricValue(subCategory: any): any {
		return currentCategoryData[subCategory.name] || { value: "N/A", percentage: 0 };
	}
</script>

<svelte:head>
	<title>Sabah Holistic Progress Dashboard</title>
	<meta name="description" content="Tracking true progress and prosperity in Sabah, Malaysian Borneo through regenerative economy metrics" />
</svelte:head>

<!-- Hero Section -->
<section class="hero" id="home">
	<div class="container">
		<div class="hero-content">
			<div class="hero-text">
				<h1>Beyond GDP</h1>
				<p>
					Envisioning a diversified, equitable, circular economy for Sabah, Malaysian Borneo. Our regenerative economy is guided by a
					holistic metric that tracks true progress and prosperity.
				</p>
				<a href="#metric" class="cta-button">Explore Our Vision</a>
			</div>
			<div class="hero-visual">
				<div class="metric-circle">
					<div class="metric-segments">
						<div class="segment">Environment</div>
						<div class="segment">Health</div>
						<div class="segment">Education</div>
						<div class="segment">Economy</div>
						<div class="segment">Culture</div>
						<div class="segment">Community</div>
						<div class="segment">Governance</div>
						<div class="segment">Infrastructure</div>
					</div>
					<div class="metric-center">
						<div>Sabah</div>
						<div>Progress</div>
						<div>Index</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Location Selector Section -->
<section class="py-12 bg-gray-50" id="metric">
	<div class="container">
		<div class="text-center mb-8">
			<h2 class="text-3xl font-bold text-primary-600 mb-4">Select Your Location</h2>
			<p class="text-lg text-muted-600">Choose a district and town to view specific progress metrics</p>
		</div>

		<div class="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
			<div class="w-full sm:w-64">
				<label class="block text-sm font-medium text-gray-700 mb-2">District</label>
				<select
					class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
					value={selectedLocation}
					on:change={handleLocationChange}
				>
					{#each locations as location}
						<option value={location}>{location}</option>
					{/each}
				</select>
			</div>

			<div class="w-full sm:w-64">
				<label class="block text-sm font-medium text-gray-700 mb-2">Town/Village</label>
				<select
					class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
					value={selectedTown}
					on:change={handleTownChange}
				>
					{#each availableTowns as town}
						<option value={town}>{town}</option>
					{/each}
				</select>
			</div>
		</div>
	</div>
</section>

<!-- Dashboard Section -->
<section class="py-12 bg-white">
	<div class="container">
		<div class="text-center mb-8">
			<h2 class="text-3xl font-bold text-primary-600 mb-4">Sabah Progress Dashboard</h2>
			<p class="text-lg text-muted-600">
				Viewing data for <span class="font-semibold text-primary-600">{selectedTown}</span>,
				<span class="font-semibold text-primary-600">{selectedLocation}</span>
			</p>
		</div>

		<!-- Category Tabs -->
		<div class="mb-8">
			<div class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-2 mb-8">
				{#each categories as category, index}
					<button
						class="flex flex-col items-center p-3 text-center rounded-lg border-2 transition-all duration-200 min-h-[80px] {selectedCategory ===
						index
							? 'border-primary-500 bg-primary-50 text-primary-700'
							: 'border-gray-200 hover:border-gray-300 text-gray-600'}"
						on:click={() => handleCategoryChange(index)}
					>
						<span class="text-2xl mb-2">{category.icon}</span>
						<span class="text-xs font-medium leading-tight">{category.name}</span>
					</button>
				{/each}
			</div>

			<!-- Category Content with Fixed Height -->
			<div class="min-h-[900px]">
				{#key selectedCategory}
					<div in:fade={{ delay: 100, duration: 300 }}>
						<div class="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
							<div class="text-center">
								<h3 class="flex items-center justify-center gap-3 text-2xl font-bold text-primary-600 mb-2">
									<span class="text-3xl">{currentCategory.icon}</span>
									{currentCategory.name}
								</h3>
								<p class="text-lg text-gray-600">
									Focus Areas: {currentCategory.focus_areas}
								</p>
							</div>
						</div>

						<!-- Sub-categories Grid -->
						<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{#each currentCategory.sub_categories as subCategory}
								{@const metricData = getMetricValue(subCategory)}
								{@const metricType = getMetricType(subCategory.track_measures)}

								<div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
									<div class="mb-4">
										<h4 class="text-lg font-semibold text-gray-800 mb-2">{subCategory.name}</h4>
										<p class="text-sm text-gray-600">
											{subCategory.track_measures}
										</p>
									</div>

									<div class="mt-4">
										<!-- Percentage Metrics -->
										{#if metricType === "percentage"}
											<div class="space-y-3">
												<div class="flex justify-between items-center">
													<span class="text-2xl font-bold text-primary-600">{metricData.value}%</span>
													<span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{metricType}</span>
												</div>
												<div class="w-full bg-gray-200 rounded-full h-4">
													<div
														class="h-4 rounded-full bg-primary-500 transition-all duration-500"
														style="width: {metricData.percentage}%"
													></div>
												</div>
											</div>

											<!-- Yes/No Metrics -->
										{:else if metricType === "yesno"}
											<div class="flex items-center space-x-3 h-16">
												{#if metricData.value === "Yes"}
													<div class="flex items-center space-x-2 text-success-600">
														<CheckCircle class="w-6 h-6" />
														<span class="font-semibold">Achieved</span>
													</div>
												{:else}
													<div class="flex items-center space-x-2 text-accent-600">
														<AlertTriangle class="w-6 h-6" />
														<span class="font-semibold">Needs Improvement</span>
													</div>
												{/if}
											</div>

											<!-- Quality Scale Metrics -->
										{:else if metricType === "quality"}
											<div class="space-y-3">
												<div class="flex justify-between items-center">
													<span class="text-lg font-semibold text-gray-800">{metricData.value}</span>
													<span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{metricType}</span>
												</div>
												<div class="flex space-x-1 h-4">
													{#each ["Poor", "Fair", "Good", "Excellent"] as level, i}
														<div
															class="flex-1 h-4 rounded-full {i <
															['Poor', 'Fair', 'Good', 'Excellent'].indexOf(metricData.value) + 1
																? getProgressColor(metricData.value, metricType)
																: 'bg-gray-200'}"
														></div>
													{/each}
												</div>
											</div>

											<!-- Scale Metrics -->
										{:else if metricType === "scale"}
											<div class="space-y-3">
												<div class="flex justify-between items-center">
													<span class="text-lg font-semibold text-gray-800">{metricData.value}</span>
													<span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{metricType}</span>
												</div>
												<div class="flex space-x-1 h-4">
													{#each ["None", "Little", "Avg", "High"] as level, i}
														<div
															class="flex-1 h-4 rounded-full {i <
															['None', 'Little', 'Avg', 'High'].indexOf(metricData.value) + 1
																? getProgressColor(metricData.value, metricType)
																: 'bg-gray-200'}"
														></div>
													{/each}
												</div>
											</div>

											<!-- Count Metrics -->
										{:else if metricType === "count"}
											<div class="flex items-center space-x-3 h-16">
												<TrendingUp class="w-6 h-6 text-primary-600" />
												<span class="text-2xl font-bold text-primary-600">{metricData.value}</span>
											</div>

											<!-- Other Metrics -->
										{:else}
											<div class="flex items-center space-x-3 h-16">
												<Activity class="w-6 h-6 text-muted-600" />
												<span class="text-lg font-medium text-gray-800">{metricData.value}</span>
											</div>
										{/if}
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/key}
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		padding-top: 80px;
		background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
		position: relative;
		overflow: hidden;
	}

	.hero::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="a"><stop offset="0%" stop-color="%23ffffff" stop-opacity="0.1"/><stop offset="100%" stop-color="%23ffffff" stop-opacity="0"/></radialGradient></defs><circle cx="200" cy="200" r="100" fill="url(%23a)"/><circle cx="800" cy="300" r="150" fill="url(%23a)"/><circle cx="400" cy="700" r="80" fill="url(%23a)"/></svg>');
		opacity: 0.3;
		animation: float 20s ease-in-out infinite;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0px) rotate(0deg);
		}
		50% {
			transform: translateY(-20px) rotate(180deg);
		}
	}

	.hero-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
		position: relative;
		z-index: 2;
	}

	.hero-text {
		color: white;
	}

	.hero-text h1 {
		font-size: 3.5rem;
		margin-bottom: 1rem;
		background: linear-gradient(45deg, #ffffff, #a8d8ff);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		animation: glow 2s ease-in-out infinite alternate;
	}

	@keyframes glow {
		from {
			text-shadow: 0 0 20px rgba(168, 216, 255, 0.3);
		}
		to {
			text-shadow: 0 0 30px rgba(168, 216, 255, 0.6);
		}
	}

	.hero-text p {
		font-size: 1.2rem;
		margin-bottom: 2rem;
		opacity: 0.9;
	}

	.cta-button {
		display: inline-block;
		background: linear-gradient(45deg, #ff6b6b, #ffa726);
		color: white;
		padding: 1rem 2rem;
		border-radius: 50px;
		text-decoration: none;
		font-weight: bold;
		transition: all 0.3s ease;
		box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
	}

	.hero-visual {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.metric-circle {
		width: 400px;
		height: 400px;
		border-radius: 50%;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
		backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		animation: pulse 4s ease-in-out infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
	}

	.metric-segments {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.segment {
		position: absolute;
		width: 70px;
		height: 32px;
		border-radius: 16px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.6rem;
		font-weight: bold;
		color: #2a5298;
		background: rgba(255, 255, 255, 0.9);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.3);
		animation: orbit 25s linear infinite;
		top: calc(50% - 16px);
		left: calc(50% - 35px);
	}

	.segment:nth-child(1) {
		animation-delay: 0s;
	}
	.segment:nth-child(2) {
		animation-delay: -3.125s;
	}
	.segment:nth-child(3) {
		animation-delay: -6.25s;
	}
	.segment:nth-child(4) {
		animation-delay: -9.375s;
	}
	.segment:nth-child(5) {
		animation-delay: -12.5s;
	}
	.segment:nth-child(6) {
		animation-delay: -15.625s;
	}
	.segment:nth-child(7) {
		animation-delay: -18.75s;
	}
	.segment:nth-child(8) {
		animation-delay: -21.875s;
	}

	@keyframes orbit {
		from {
			transform: rotate(0deg) translateX(160px) rotate(0deg);
		}
		to {
			transform: rotate(360deg) translateX(160px) rotate(-360deg);
		}
	}

	.metric-center {
		background: rgba(255, 255, 255, 0.9);
		border-radius: 50%;
		width: 150px;
		height: 150px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #2a5298;
		font-weight: bold;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.hero-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.hero-text h1 {
			font-size: 2.5rem;
		}

		.metric-circle {
			width: 300px;
			height: 300px;
		}
	}
</style>
