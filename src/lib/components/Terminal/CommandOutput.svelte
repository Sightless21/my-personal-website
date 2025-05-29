<script>
	import { parseColorCodes } from '$lib/utils/colorParser.js';

	let { command } = $props();

	const isAsciiArt = $derived(
		typeof command.output === 'string' &&
			(command.output.includes('/\\  /\\') || command.output.includes('=( ˘•ω•˘)='))
	);

	// Parse color codes if the output is a string
	const parsedOutput = $derived(
		typeof command.output === 'string' ? parseColorCodes(command.output) : command.output
	);
</script>

<div class="mb-2">
	<div class="flex items-center">
		<span class="text-green-300">$</span>
		<span class="ml-2 text-gray-200">{command.command}</span>
	</div>
	<div class="ml-4 text-gray-300">
		{#if isAsciiArt}
			<pre class="mt-1 font-mono text-sm leading-tight text-green-300">{command.output}</pre>
		{:else}
			<pre class="font-mono text-sm whitespace-pre-wrap">{@html parsedOutput}</pre>
		{/if}
	</div>
</div>
