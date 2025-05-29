<script>
	import {
		User,
		Mail,
		MapPin,
		Award,
		Code,
		Palette,
		Zap,
		Users,
		ArrowRight,
		Star,
		Heart
	} from '@lucide/svelte';
	import { onMount } from 'svelte';
	import ToolsBox from '../ui/tools/ToolsBox.svelte';
	import ToolsIcons from '../ui/tools/ToolsIcons.svelte';

	// Configuration object for easy customization
	let config = $state({
		theme: {
			primary: 'blue',
			accent: 'purple',
			background: 'slate'
		},
		animations: {
			enabled: true,
			duration: 300
		},
		layout: {
			twoColumnDescription: true,
			skillsPerRow: 4
		}
	});
	// About data with enhanced structure
	let aboutData = $state({
		name: 'Phanupong Poungbaidee',
		title: 'Full-stack Developer & UX/UI Designer',
		location: 'Bangkok, Thailand',
		email: 'alexandra@example.com',
		description: `Hello! I'm a passionate developer with a love for creating beautiful, functional applications, solve problem for business. <br/> <br/>
			My journey into coding began out of curiosity for how digital experiences are crafted. I aspire to be <span class='text-yellow-200'>Full-stack Developer </span>and <span class='text-violet-200'>UX/UI Designer.</span> 
			I'm particularly interested in <span class='text-emerald-200'> user experience design </span>, <span class='text-pink-200'>performance optimization</span>, and <span class="text-sky-200"> simplicity. </span> <br/> <br/>
			Outside of coding, I love to play video games and make music. 🎸`,
		image: 'https://github.com/sightless21.png',
	});

	let isVisible = $state(false);

	onMount(() => {
		// Trigger entrance animations
		setTimeout(() => {
			isVisible = true;
		}, 800);
	});
</script>

<section class="relative min-h-screen overflow-hidden px-4 py-20">
	<div class="relative mx-auto max-w-7xl">
		<!-- Enhanced Header with Animation -->
		<header class="mb-20 text-center">
			<span class="text-sx rounded-xl bg-blue-950/30 p-2 text-sky-200">
				<span class="text-emerald-200">$</span> cat about.json</span
			>
			<div
				class="transform transition-all duration-1000 {isVisible
					? 'translate-y-0 opacity-100'
					: 'translate-y-8 opacity-0'}"
			>
				<h1 class="mb-6 text-6xl leading-tight font-black text-white md:text-7xl lg:text-8xl">
					About <span class="text-emerald-200">Me</span>
				</h1>
			</div>
		</header>

		<!-- Main Content Grid -->
		<div class="mb-20 grid items-start gap-16 lg:grid-cols-12">
			<!-- Profile Image Column -->
			<div class="flex justify-center lg:col-span-5 lg:justify-start">
				<div
					class="relative transform transition-all delay-300 duration-1000 {isVisible
						? 'translate-y-0 opacity-100'
						: 'translate-y-8 opacity-0'}"
				>
					<!-- Main Image -->
					<div class="relative rounded-4xl p-6 shadow-2xl">
						<img
							src={aboutData.image || '/placeholder.svg'}
							alt={aboutData.name}
							class="h-96 w-80 rounded-2xl object-cover"
						/>
					</div>
				</div>
			</div>

			<!-- Content Column -->
			<div class="mb-2 space-y-2 lg:col-span-7">
				<div
					class="transform transition-all delay-500 duration-1000 {isVisible
						? 'translate-y-0 opacity-100'
						: 'translate-y-8 opacity-0'}"
				>
					<!-- Name and Title -->
					<div class="m-5 mb-8">
						<h2 class="mb-2 text-4xl font-bold md:text-5xl">
							{aboutData.name}
						</h2>
						<p class="mb-2 text-2xl text-pink-200">
							{aboutData.title}
						</p>

						<!-- Contact Info with Enhanced Styling -->
						<div class="mb-4 flex flex-wrap gap-6">
							<div class="flex items-center gap-3 rounded-full bg-blue-950/30 px-4 py-2">
								<MapPin class="h-5 w-5 text-emerald-200" />
								<span class="text-blue-200">{aboutData.location}</span>
							</div>
						</div>
					</div>

					<!-- One-Column Description -->
					<div class="m-5 rounded-2xl bg-blue-950/20 p-5 text-base shadow-lg">
						<p class="text-gray-400">
							{@html aboutData.description}
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Interactive Skills Section -->
		<div class="mb-16 text-start">
			<h2 class="mb-6 text-4xl leading-tight font-black text-white md:text-5xl lg:text-6xl">
				My <span class="text-sky-200">skills</span>
			</h2>

			<ToolsIcons/>
		</div>
	</div>
</section>

<style>
	/* Custom animations */
	@keyframes blob {
		0% {
			transform: translate(0px, 0px) scale(1);
		}
		33% {
			transform: translate(30px, -50px) scale(1.1);
		}
		66% {
			transform: translate(-20px, 20px) scale(0.9);
		}
		100% {
			transform: translate(0px, 0px) scale(1);
		}
	}

	/* Skill progress animation */
	:global(.animate-skill .skill-progress) {
		width: var(--width) !important;
	}

	/* Accessibility improvements */
	@media (prefers-reduced-motion: reduce) {
		* {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
		}
	}

	/* Custom scrollbar */
	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		background: #f1f5f9;
	}

	::-webkit-scrollbar-thumb {
		background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
		border-radius: 4px;
	}
</style>
