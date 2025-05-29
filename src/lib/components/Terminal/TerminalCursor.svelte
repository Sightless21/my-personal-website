<script>
	import { onMount } from 'svelte';

	let { className = '' } = $props();
	let visible = $state(true);

	onMount(() => {
		const interval = setInterval(() => {
			visible = !visible;
		}, 530);

		return () => clearInterval(interval);
	});
</script>

<span
	class="ml-0.5 h-4 w-2 bg-green-300 transition-opacity duration-75 {visible
		? 'opacity-100'
		: 'opacity-0'} {className}"
	aria-hidden="true"
></span>
