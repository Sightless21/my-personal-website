<script>
  import { groupedTools } from "./tools.js";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
</script>

<div class="flex flex-row justify-between">
  {#each Object.entries(groupedTools) as [type, typeTools]}
    <div class="mb-2 bg-blue-950/30 p-3 rounded-lg shadow-lg">
      <h3 class="mb-3 text-lg font-semibold text-sky-300">{type}</h3>
      <div class="flex flex-wrap gap-4">
        {#each typeTools as tool}
          <Tooltip.Provider delayDuration={200}>
            <Tooltip.Root>
              <Tooltip.Trigger>
                <a
                  href="https://www.google.com/search?q={encodeURIComponent(
                    tool.name
                  )}"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={tool.name}
                >
                  <img
                    src={tool.src}
                    alt={tool.name}
                    class="h-12 w-12 hover:opacity-80 hover:scale-110 transition-transform duration-200"
                  />
                </a>
              </Tooltip.Trigger>
              <Tooltip.Content>
                <p>{tool.name}</p>
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        {/each}
      </div>
    </div>
  {/each}
</div>
