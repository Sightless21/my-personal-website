<script>
	import { groupedTools } from './tools.js';
</script>

{#each Object.entries(groupedTools) as [type, typeTools]}
	<div class="mb-6">
		<h3 class="text-lg font-semibold mb-3">{type}</h3>
		<ul class="list-disc list-inside space-y-1">
			{#each typeTools as tool}
				<li>
					<a 
						href="https://www.google.com/search?q={encodeURIComponent(tool.name)}"
						target="_blank"
						rel="noopener noreferrer"
						class="text-blue-600 hover:text-blue-800 underline"
					>
						{tool.name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
{/each}