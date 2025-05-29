<script>
	import { onMount } from 'svelte';

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});

	// Generate random positions and delays for dynamic elements
	const generateStars = (count) =>
		Array.from({ length: count }, (_, i) => ({
			id: i,
			left: Math.random() * 100,
			top: Math.random() * 100,
			delay: Math.random() * 3,
			type: (i % 3) + 1
		}));

	const generateDust = (count) =>
		Array.from({ length: count }, (_, i) => ({
			id: i,
			left: Math.random() * 100,
			top: Math.random() * 100,
			delay: Math.random() * 10
		}));

	const stars = generateStars(10);
	const dustParticles = generateDust(5);
</script>

<div class="space-background">
	<div class="starfield">
		{#each stars as star}
			<div
				class="star star-{star.type}"
				style="left: {star.left}%; top: {star.top}%; animation-delay: {star.delay}s;"
			></div>
		{/each}
	</div>

	<div class="nebula nebula-teal"></div>
	<div class="nebula nebula-blue"></div>
	<div class="nebula nebula-dark-blue"></div>
	<div class="nebula nebula-green-light"></div>

	<div class="cosmic-dust">
		{#each dustParticles as dust}
			<div
				class="dust-particle"
				style="left: {dust.left}%; top: {dust.top}%; animation-delay: {dust.delay}s;"
			></div>
		{/each}
	</div>

	<svg class="cosmic-rays" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<linearGradient id="rayGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" style="stop-color:var(--color-teal);stop-opacity:0" />
				<stop offset="30%" style="stop-color:var(--color-green-medium);stop-opacity:0.8" />
				<stop offset="70%" style="stop-color:var(--color-green-light);stop-opacity:0.8" />
				<stop offset="100%" style="stop-color:var(--color-green-lightest);stop-opacity:0" />
			</linearGradient>
			<linearGradient id="rayGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" style="stop-color:var(--color-blue);stop-opacity:0" />
				<stop offset="50%" style="stop-color:var(--color-blue-medium);stop-opacity:0.6" />
				<stop offset="100%" style="stop-color:var(--color-blue-dark);stop-opacity:0" />
			</linearGradient>
		</defs>

		<path
			class="cosmic-ray ray-1"
			d="M-200,150 Q300,180 700,160 T1200,150"
			stroke="url(#rayGradient1)"
			stroke-width="2"
			fill="none"
		/>
		<path
			class="cosmic-ray ray-2"
			d="M-200,350 Q400,320 800,340 T1300,350"
			stroke="url(#rayGradient2)"
			stroke-width="1.5"
			fill="none"
		/>
		<path
			class="cosmic-ray ray-3"
			d="M-200,550 Q350,520 750,540 T1150,550"
			stroke="url(#rayGradient1)"
			stroke-width="1"
			fill="none"
		/>
		<path
			class="cosmic-ray ray-4"
			d="M-200,750 Q400,720 800,740 T1300,750"
			stroke="url(#rayGradient2)"
			stroke-width="1.5"
			fill="none"
		/>
	</svg>

	<div class="celestial-bodies">
		<div class="galaxy galaxy-green"></div>
		<div class="planet planet-green"></div>
		<div class="planet planet-teal"></div>
		<div class="planet planet-blue"></div>
		<div class="planet planet-dark"></div>
	</div>
</div>

<style>
	/* ===== CSS CUSTOM PROPERTIES ===== */
	:root {
		/* Color Palette */
		--color-green-lightest: #d9ed92;
		--color-green-light: #b5e48c;
		--color-green-medium: #99d98c;
		--color-green-dark: #76c893;
		--color-teal: #52b69a;
		--color-teal-dark: #34a0a4;
		--color-blue: #168aad;
		--color-blue-medium: #1a759f;
		--color-blue-dark: #1e6091;
		--color-blue-darkest: #184e77;
		--color-primary: #001233;

		/* Spacing */
		--spacing-xs: 0.5rem;
		--spacing-sm: 1rem;
		--spacing-md: 1.5rem;
		--spacing-lg: 2rem;
		--spacing-xl: 3rem;
		--spacing-2xl: 4rem;
		--spacing-3xl: 6rem;

		/* Typography */
		--font-size-sm: 0.875rem;
		--font-size-base: 1rem;
		--font-size-lg: 1.125rem;
		--font-size-xl: 1.25rem;
		--font-size-2xl: 1.5rem;
		--font-size-3xl: 1.875rem;
		--font-size-4xl: 2.25rem;
		--font-size-5xl: 3rem;
		--font-size-6xl: 3.75rem;
		--font-size-7xl: 4.5rem;

		/* Transitions */
		--transition-fast: 0.15s ease;
		--transition-base: 0.3s ease;
		--transition-slow: 0.5s ease;
	}

	/* ===== SPACE BACKGROUND ===== */
	.space-background {
		position: absolute; /* เปลี่ยนจาก fixed เป็น absolute */
		top: 0;
		left: 0;
		width: 100%; /* ครอบคลุมความกว้างของ parent */
		height: 100%;
		z-index: -1;
		background: linear-gradient(
			135deg,
			var(--color-primary) 0%,
			#0a1a2a 50%,
			var(--color-primary) 100%
		);
		overflow: hidden;
		pointer-events: none; /* ป้องกันไม่ให้รบกวนการคลิก/touch ของ elements อื่น */
		min-height: 100%; /* เพิ่ม min-height เพื่อให้ครอบคลุมอย่างน้อย 100% ของ parent */
	}

	/* Starfield */
	.starfield {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.star {
		position: absolute;
		background: white;
		border-radius: 50%;
		animation: twinkle 3s ease-in-out infinite;
	}

	.star-1 {
		width: 1px;
		height: 1px;
	}
	.star-2 {
		width: 2px;
		height: 2px;
	}
	.star-3 {
		width: 1.5px;
		height: 1.5px;
		background: var(--color-green-light);
	}

	.shooting-star {
		position: absolute;
		width: 2px;
		height: 2px;
		background: linear-gradient(45deg, white, var(--color-green-light));
		border-radius: 50%;
		animation: shootingStar 3s linear infinite;
		opacity: 0;
	}

	.shooting-star::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 50px;
		height: 1px;
		background: linear-gradient(90deg, transparent, white, transparent);
		transform: translateX(-50px);
	}

	/* Nebulae */
	.nebula {
		position: absolute;
		border-radius: 50%;
		filter: blur(80px);
		opacity: 0.15;
		animation: nebulaDrift 25s ease-in-out infinite;
	}

	.nebula-green-light {
		width: 400px;
		height: 300px;
		background: radial-gradient(
			ellipse,
			var(--color-green-lightest),
			var(--color-green-light),
			transparent
		);
		top: 15%;
		left: 10%;
		animation-delay: 0s;
	}

	.nebula-green-medium {
		width: 500px;
		height: 400px;
		background: radial-gradient(
			ellipse,
			var(--color-green-medium),
			var(--color-green-dark),
			transparent
		);
		top: 50%;
		right: 10%;
		animation-delay: -8s;
	}

	.nebula-teal {
		width: 350px;
		height: 250px;
		background: radial-gradient(ellipse, var(--color-teal), var(--color-teal-dark), transparent);
		bottom: 25%;
		left: 15%;
		animation-delay: -15s;
	}

	.nebula-blue {
		width: 300px;
		height: 200px;
		background: radial-gradient(ellipse, var(--color-blue), var(--color-blue-medium), transparent);
		top: 35%;
		right: 25%;
		animation-delay: -20s;
	}

	.nebula-dark-blue {
		width: 250px;
		height: 180px;
		background: radial-gradient(
			ellipse,
			var(--color-blue-dark),
			var(--color-blue-darkest),
			transparent
		);
		bottom: 40%;
		right: 5%;
		animation-delay: -12s;
	}

	/* Cosmic Dust */
	.cosmic-dust {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.dust-particle {
		position: absolute;
		width: 1px;
		height: 1px;
		background: rgba(255, 255, 255, 0.4);
		border-radius: 50%;
		animation: dustFloat 10s linear infinite;
	}

	/* Cosmic Rays */
	.cosmic-rays {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.3;
	}

	.cosmic-ray {
		animation: cosmicRayFlow 20s linear infinite;
		stroke-dasharray: 300 150;
	}

	.ray-1 {
		animation-delay: 0s;
	}
	.ray-2 {
		animation-delay: -5s;
	}
	.ray-3 {
		animation-delay: -10s;
	}
	.ray-4 {
		animation-delay: -15s;
	}

	/* Celestial Bodies */
	.celestial-bodies {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.galaxy {
		position: absolute;
		border-radius: 50%;
		filter: blur(3px);
		opacity: 0.6;
		animation: galaxyRotate 30s linear infinite;
	}

	.galaxy-green {
		width: 80px;
		height: 80px;
		background: radial-gradient(circle, var(--color-green-dark), var(--color-teal), transparent);
		top: 20%;
		right: 15%;
	}

	.galaxy-blue {
		width: 60px;
		height: 60px;
		background: radial-gradient(circle, var(--color-blue-medium), var(--color-blue), transparent);
		bottom: 30%;
		left: 25%;
		animation-delay: -15s;
	}

	.planet {
		position: absolute;
		border-radius: 50%;
		opacity: 0.4;
		animation: planetOrbit 40s linear infinite;
		box-shadow: inset -5px -5px 10px rgba(0, 0, 0, 0.3);
	}

	.planet-teal {
		width: 30px;
		height: 30px;
		background: linear-gradient(135deg, var(--color-teal-dark), var(--color-blue-darkest));
		top: 60%;
		right: 30%;
	}

	.planet-green {
		width: 25px;
		height: 25px;
		background: linear-gradient(135deg, var(--color-green-dark), var(--color-teal));
		top: 25%;
		left: 60%;
		animation-delay: -10s;
	}

	.planet-blue {
		width: 35px;
		height: 35px;
		background: linear-gradient(135deg, var(--color-blue), var(--color-blue-dark));
		bottom: 15%;
		right: 20%;
		animation-delay: -20s;
	}

	.planet-dark {
		width: 20px;
		height: 20px;
		background: linear-gradient(135deg, var(--color-blue-dark), var(--color-blue-darkest));
		top: 70%;
		left: 15%;
		animation-delay: -30s;
	}

	/* ===== ANIMATIONS ===== */
	@keyframes twinkle {
		0%,
		100% {
			opacity: 0.3;
			transform: scale(1);
		}
		50% {
			opacity: 1;
			transform: scale(1.2);
		}
	}

	@keyframes shootingStar {
		0% {
			opacity: 0;
			transform: translateX(0) translateY(0);
		}
		10% {
			opacity: 1;
		}
		90% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: translateX(300px) translateY(300px);
		}
	}

	@keyframes nebulaDrift {
		0%,
		100% {
			transform: translate(0, 0) rotate(0deg) scale(1);
		}
		25% {
			transform: translate(50px, -30px) rotate(90deg) scale(1.1);
		}
		50% {
			transform: translate(-30px, 40px) rotate(180deg) scale(0.9);
		}
		75% {
			transform: translate(30px, 20px) rotate(270deg) scale(1.05);
		}
	}

	@keyframes dustFloat {
		0% {
			transform: translateY(100vh) translateX(0);
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		90% {
			opacity: 1;
		}
		100% {
			transform: translateY(-100px) translateX(50px);
			opacity: 0;
		}
	}

	@keyframes cosmicRayFlow {
		0% {
			stroke-dashoffset: 450;
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		90% {
			opacity: 1;
		}
		100% {
			stroke-dashoffset: -450;
			opacity: 0;
		}
	}

	@keyframes galaxyRotate {
		0% {
			transform: rotate(0deg) scale(1);
		}
		50% {
			transform: rotate(180deg) scale(1.1);
		}
		100% {
			transform: rotate(360deg) scale(1);
		}
	}

	@keyframes planetOrbit {
		0% {
			transform: rotate(0deg) translateX(100px) rotate(0deg);
		}
		100% {
			transform: rotate(360deg) translateX(100px) rotate(-360deg);
		}
	}

	/* ===== RESPONSIVE DESIGN ===== */
	@media (max-width: 768px) {
		.nebula {
			filter: blur(60px);
			opacity: 0.1;
		}

		.nebula-green-light,
		.nebula-green-medium,
		.nebula-teal,
		.nebula-blue,
		.nebula-dark-blue {
			width: 250px;
			height: 200px;
		}

		.galaxy,
		.planet {
			opacity: 0.3;
		}

		.shooting-star {
			display: none;
		}
	}
</style>
