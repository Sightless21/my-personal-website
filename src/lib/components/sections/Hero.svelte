<script>
	import Terminal from '$lib/components/Terminal.svelte';
	import TypingText from '$lib/components/TypingText.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Linkedin, Mail, User } from '@lucide/svelte';
</script>

<!-- HERO SECTION -->
<section class="flex min-h-screen items-center justify-center px-4">
	<!-- Container -->
	<div
		class="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12"
	>
		<!-- LEFT SIDE -->
		<div class="w-full flex-1 text-center lg:text-left">
			<h1
				class="flex-colitems-center flex justify-center text-3xl font-bold sm:text-4xl md:text-5xl lg:flex-row lg:justify-start"
			>
				<TypingText
					class="text-pink-200"
					texts={['こんいちは', 'Phanupong P.', 'Sightless21']}
					typeSpeed={300}
					pauseDelay={2000}
					loop={true}
				/>
			</h1>

			<div class="mt-6 space-y-2">
				<h2 class="text-xl font-bold text-green-200 sm:text-2xl md:text-3xl">
					Phanupong Poungbaidee
				</h2>
				<h2 class="text-lg font-bold text-white sm:text-xl md:text-5xl">Sightless21</h2>
				<h2 class="text-lg font-bold sm:text-xl md:text-5xl">
					Make it <span class="text-yellow-200">work.</span>
				</h2>
				<h2 class="text-lg font-bold sm:text-xl md:text-5xl">
					Make it <span class="text-blue-300">better.</span>
				</h2>
			</div>

			<p class="mx-auto mt-6 max-w-xl text-base text-gray-400 sm:text-lg lg:mx-0">
				I'm on a path of building real-world web applications, strengthening my problem-solving
				through hands-on challenges, and growing into a capable and reliable Full-Stack Developer.
			</p>

			<div
				class="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start"
			>
				<Button
					variant={'outline'}
					class="h-9 w-fit cursor-pointer border border-emerald-300 text-emerald-300 transition-all duration-200 hover:bg-emerald-300/40 hover:text-emerald-300 sm:w-auto"
					><User size={50} /> About Me</Button
				>
				<Button
					variant={'outline'}
					class="h-9 w-fit cursor-pointer border border-pink-300 text-pink-300 transition-all duration-200 hover:bg-pink-300/40 hover:text-pink-300 sm:w-auto"
					><Mail size={50} /> Contact Me</Button
				>
				<Button
					variant={'outline'}
					class="h-9 w-fit cursor-pointer border border-sky-300 text-sky-300 transition-all duration-200 hover:bg-sky-300/40 hover:text-sky-300 sm:w-auto"
					><Linkedin size={50} /> Linkedin
				</Button>
			</div>
		</div>

		<!-- RIGHT SIDE (Terminal) -->
		<div class="aspect-[16/10] w-full max-w-2xl flex-1 transition-all duration-300">
			<Terminal />
		</div>
	</div>
</section>
