<script>
	import { onMount } from 'svelte';
	import TerminalCursor from './TerminalCursor.svelte';
	
	let { onSubmit, onFocus } = $props();
	
	let input = $state("");
	let showPlaceholder = $state(true);
	let inputRef = $state(null);
  
	onMount(() => {
	  if (inputRef) {
		inputRef.focus();
	  }
	});
  
	function handleSubmit(e) {
	  e.preventDefault();
	  if (!input.trim()) return;
  
	  onSubmit(input);
	  input = "";
  
	  // Refocus input after command execution
	  setTimeout(() => {
		if (inputRef) {
		  inputRef.focus();
		}
	  }, 0);
	}
  
	function handleInputChange(e) {
	  const value = e.target.value;
	  input = value;
	  showPlaceholder = value === "";
	}
  
	function handleFocus() {
	  showPlaceholder = input === "";
	  if (onFocus) onFocus();
	}
  
	function handleBlur() {
	  showPlaceholder = input === "";
	}
  </script>
  
  <form onsubmit={handleSubmit} class="flex items-center">
	<span class="text-green-300">$</span>
	<div class="relative ml-2 flex-grow">
	  <input
		bind:this={inputRef}
		type="text"
		value={input}
		oninput={handleInputChange}
		onfocus={handleFocus}
		onblur={handleBlur}
		class="bg-transparent border-none outline-none text-gray-200 w-full font-mono text-sm"
		aria-label="Terminal input"
		autocomplete="off"
		spellcheck="false"
	  />
	  {#if showPlaceholder && input === ""}
		<span class="absolute left-0 top-0 text-gray-500 pointer-events-none font-mono text-sm">
		  Type a command...
		</span>
	  {/if}
	</div>
	<TerminalCursor />
  </form>
  