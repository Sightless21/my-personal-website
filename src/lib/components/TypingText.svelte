<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	/** Array of texts to cycle through with typing animation */
	export let texts: string[] = [];

	/** Milliseconds between each character */
	export let typeSpeed: number = 80;

	/** Milliseconds between typing and deleting */
	export let pauseDelay: number = 1000;

	/** Delay before the animation starts (ms) */
	export let startDelay: number = 0;

	/** If true, the text will loop through the array indefinitely */
	export let loop: boolean = true;

	let output = '';
	let textIndex = 0;
	let charIndex = 0;
	let typing = true;
	let timer: ReturnType<typeof setTimeout>;

	function typeLoop() {
		const currentText = texts[textIndex] || '';

		if (typing) {
			if (charIndex < currentText.length) {
				output += currentText.charAt(charIndex);
				charIndex++;
				timer = setTimeout(typeLoop, typeSpeed);
			} else {
				typing = false;
				timer = setTimeout(typeLoop, pauseDelay);
			}
		} else {
			if (charIndex > 0) {
				output = output.slice(0, -1);
				charIndex--;
				timer = setTimeout(typeLoop, typeSpeed);
			} else {
				typing = true;
				textIndex = (textIndex + 1) % texts.length;
				timer = setTimeout(typeLoop, typeSpeed);
				if (!loop && textIndex === 0) {
					clearTimeout(timer);
				}
			}
		}
	}

	onMount(() => {
		timer = setTimeout(typeLoop, startDelay);
	});

	onDestroy(() => clearTimeout(timer));
</script>

<div class="flex flex-row p-3 bg-blue-950/30 rounded-xl items-center justify-center">
	<p class=" mb-2 text-green-200 lg:mr-4 lg:mb-0">$</p>
	<span class="typing-text" {...$$restProps}>
		{output}
		<span class="caret">|</span>
	</span>
</div>

<style>
	.typing-text {
		display: inline-block;
		white-space: pre-wrap;
		font-family: inherit;
		line-height: 1.2;
	}

	.caret {
		display: inline-block;
		animation: blink 1s step-end infinite;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
</style>
