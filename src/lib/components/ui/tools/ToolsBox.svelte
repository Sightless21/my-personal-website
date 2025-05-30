<script>
  import { groupedTools , typeColorMap} from "./tools.js";
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
  {#each Object.entries(groupedTools) as [type, typeTools]}
    <div class={`min-h-[200px] h-auto p-4 rounded-lg border border-pink-200 bg-blue-950/30 shadow-lg ${typeColorMap[type]}`}>
      <h3 class="text-lg font-semibold mb-3">{type}</h3>
      <ul class="list-disc list-inside space-y-1 text-blue-200">
        {#each typeTools as tool}
          <li>
            <a
              href="https://www.google.com/search?q={encodeURIComponent(
                tool.name
              )}"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:underline transition-colors duration-200"
            >
              {tool.name}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  {/each}
</div>
