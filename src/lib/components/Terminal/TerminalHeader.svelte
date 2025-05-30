<script>
	let { title = " " } = $props();
  </script>
  
<div class="relative bg-[#1c1c1e] px-4 py-2 w-auto flex items-center border-b border-gray-900">
	<div class="flex space-x-2 z-10">
		<div class="h-3 w-3 rounded-full bg-red-300 hover:bg-[#ff6b63] transition-colors cursor-pointer"></div>
		<div class="h-3 w-3 rounded-full bg-yellow-300 hover:bg-[#fec441] transition-colors cursor-pointer"></div>
		<div class="h-3 w-3 rounded-full bg-green-300 hover:bg-[#32d44a] transition-colors cursor-pointer"></div>
	</div>
	<p class="absolute left-1/2 transform -translate-x-1/2 text-gray-400 text-sm font-mono">{title}</p>
</div>
  