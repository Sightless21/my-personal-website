<script>
	let { title = "~/sightlessdev" } = $props();
  </script>
  
  <div class="bg-[#1c1c1e] px-4 py-2 w-[3000px] flex items-center border-b border-gray-800">
	<div class="flex space-x-2 mr-4">
	  <div class="h-3 w-3 rounded-full bg-red-300 hover:bg-[#ff6b63] transition-colors cursor-pointer"></div>
	  <div class="h-3 w-3 rounded-full bg-yellow-300 hover:bg-[#fec441] transition-colors cursor-pointer"></div>
	  <div class="h-3 w-3 rounded-full bg-green-300 hover:bg-[#32d44a] transition-colors cursor-pointer"></div>
	</div>
	<div class="text-gray-400 text-sm font-mono text-center flex-grow">{title}</div>
  </div>
  