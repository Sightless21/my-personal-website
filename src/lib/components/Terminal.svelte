<script>
	import { onMount } from 'svelte';
	import TerminalHeader from '$lib/components/Terminal/TerminalHeader.svelte';
	import TerminalInput from '$lib/components/Terminal/TerminalInput.svelte';
	import CommandOutput from '$lib/components/Terminal/CommandOutput.svelte';
	import { executeCommand } from '$lib/components/Terminal/commands.js';
	import { colorize } from '$lib/utils/colorParser.js';

	const WELCOME_MESSAGE =
		`Welcome to iamickdev's portfolio terminal!`+`

	^               __     __     ______     ______     ______            
   / \\__           /\\ \\  _ \\ \\   /\\  __ \\   /\\  __ \\   /\\  ___\\
  (    @\\___       \\ \\ \\/ ".\\ \\  \\ \\ \\/\\ \\  \\ \\ \\/\\ \\  \\ \\  __\\
  /         O       \\ \\__/".~\\_\\  \\ \\_____\\  \\ \\_____\\  \\ \\_\\  
 /   (_____/         \\/_/   \\/_/   \\/_____/   \\/_____/   \\/_/ 
/_____/   U

` + `Type 'help' to see available commands.`
	let commandHistory = $state([]);
	let terminalRef = $state(null);
	let terminalInputComponent = $state(null);

	// Auto-scroll to bottom when new commands are added
	$effect(() => {
		if (terminalRef && commandHistory.length > 0) {
			terminalRef.scrollTop = terminalRef.scrollHeight;
		}
	});

	function handleCommand(input) {
		const result = executeCommand(input);

		// Handle special commands
		if (result.output === 'CLEAR_TERMINAL') {
			commandHistory = [];
			return;
		}

		commandHistory = [...commandHistory, result];
	}

	function focusTerminal() {
		// If clicking on the current input line area, let TerminalInput handle it
		const terminalInputElement = terminalRef?.querySelector('form');
		if (terminalInputElement?.contains(e.target)) {
			return;
		}

		// Otherwise, focus the input field
		const inputElement = terminalRef?.querySelector('input');
		if (inputElement) {
			inputElement.focus();
			// Position cursor at the end
			inputElement.setSelectionRange(inputElement.value.length, inputElement.value.length);
		}
	}
</script>

<div class="mx-auto w-full max-w-2xl min-w-[256px] aspect-[16/10]">
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="overflow-hidden rounded-lg border border-gray-800 shadow-2xl w-full h-full flex flex-col"
	>
		<TerminalHeader title={"~/sightlessdev"} />

		<div
			bind:this={terminalRef}
			class="flex-1 overflow-y-auto bg-zinc-800 p-2 sm:p-4 font-mono text-xs sm:text-sm text-green-300"
		>
			<!-- Welcome message -->
			<div class="mb-4">
				<pre class="leading-tight whitespace-pre-wrap">{@html WELCOME_MESSAGE}</pre>
			</div>

			<!-- Command history -->
			{#each commandHistory as cmd, index (cmd.timestamp.getTime() + '-' + index)}
				<CommandOutput command={cmd} />
			{/each}

			<!-- Current input line -->
			<TerminalInput
				bind:this={terminalInputComponent}
				onSubmit={handleCommand}
				onFocus={focusTerminal}
			/>
		</div>
	</div>
</div>