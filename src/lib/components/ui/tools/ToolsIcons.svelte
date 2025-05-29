<script>
	import { groupedTools } from './tools.js';
</script>

<div class="flex flex-row justify-between">
	{#each Object.entries(groupedTools) as [type, typeTools]}
		<div class="mb-2">
			<h3 class="mb-3 text-lg font-semibold">{type}</h3>
			<div class="flex flex-wrap gap-4">
				{#each typeTools as tool}
					<a
						href="https://www.google.com/search?q={encodeURIComponent(tool.name)}"
						target="_blank"
						rel="noopener noreferrer"
						class="transition-opacity hover:opacity-80"
						title={tool.name}
					>
						<img src={tool.scr} alt={tool.name} class="h-12 w-12" />
					</a>
				{/each}
			</div>
		</div>
	{/each}
</div>
