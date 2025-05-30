<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Background from '$lib/components/Background.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		window.scrollTo(0, 0);
	});
</script>

<main class="font-mono selection:bg-emerald-200/20 selection:text-green-300">
	<Background />
	<header>
		<Navbar />
	</header>
	<slot />
	<footer class="p-4 text-center">
		<Footer />
	</footer>
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		min-height: 100vh;
		position: relative;
		overflow-x: hidden;
	}

	main {
		position: relative;
		z-index: 1;
		color: white;
		padding-top: 4rem;
		box-sizing: border-box;
	}

	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		backdrop-filter: blur(10px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}
	footer {
		position: relative;
		z-index: 10;
		backdrop-filter: blur(10px);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}
</style>
