<script>
	import { Menu, X, User, Terminal } from '@lucide/svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import Button from './ui/button/button.svelte';
	
	let isMenuOpen = $state(false);
	let activeLink = $state('#home'); // Track active link

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}

	function setActiveLink(href) {
		activeLink = href;
		closeMenu(); // Close menu when clicking on mobile
	}

	const navLinks = [
		{ text: 'cd ~', href: '#home', description: 'Home' },
		{ text: 'ls projects/', href: '#projects', description: 'Projects' },
		{ text: 'cat blog.md', href: '#blog', description: 'Blog' },
		{ text: './tools.sh', href: '#tools', description: 'Tools' }
	];
</script>

<nav class="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo/Brand Section -->
			<div class="flex items-center space-x-3">
				<Avatar.Root class="h-8 w-8 sm:h-10 sm:w-10">
					<Avatar.Image
						src="https://github.com/sightless21.png"
						alt="@Sightless21"
					/>
					<Avatar.Fallback class="text-xs sm:text-sm">S21</Avatar.Fallback>
				</Avatar.Root>
				<div class="flex flex-col">
					<span class="text-sm sm:text-lg leading-tight font-bold text-white">@Sightless21</span>
					<span class="font-mono text-xs text-gray-400 hidden xs:block">~/workspace</span>
				</div>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden lg:flex items-center space-x-1">
				{#each navLinks as link}
					<a
						href={link.href}
						onclick={() => setActiveLink(link.href)}
						class="group relative rounded-md px-3 xl:px-4 py-2 font-mono text-sm transition-all duration-200 hover:bg-white/10 {activeLink === link.href 
							? 'text-green-400 bg-green-500/10 border border-green-400/30' 
							: 'text-emerald-200 hover:text-green-400 border border-transparent'}"
						title={link.description}
					>
						<span class="relative z-10">{link.text}</span>
						{#if activeLink === link.href}
							<div class="absolute inset-0 rounded-md bg-gradient-to-r from-green-500/20 to-emerald-500/20"></div>
						{:else}
							<div class="absolute inset-0 rounded-md bg-transparent outline opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
						{/if}
						<!-- Active indicator dot -->
						{#if activeLink === link.href}
							<div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
						{/if}
					</a>
				{/each}
			</div>

			<!-- Tablet Navigation (Medium screens) -->
			<div class="hidden md:flex lg:hidden items-center space-x-1">
				{#each navLinks as link}
					<a
						href={link.href}
						onclick={() => setActiveLink(link.href)}
						class="group relative rounded-md px-2 py-2 font-mono text-xs transition-all duration-200 hover:bg-white/10 {activeLink === link.href 
							? 'text-green-300 bg-green-500/10 border border-green-400/30' 
							: 'text-emerald-400 hover:text-green-300 border border-transparent'}"
						title={link.description}
					>
						<span class="relative z-10">{link.text}</span>
						{#if activeLink === link.href}
							<div class="absolute inset-0 rounded-md bg-gradient-to-r from-green-500/20 to-emerald-500/20"></div>
						{:else}
							<div class="absolute inset-0 rounded-md bg-gradient-to-r from-green-500/20 to-blue-500/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
						{/if}
						<!-- Active indicator dot -->
						{#if activeLink === link.href}
							<div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
						{/if}
					</a>
				{/each}
			</div>

			<!-- Action Buttons Section -->
			<div class="flex items-center space-x-2 sm:space-x-3">
				<!-- Desktop Login Button -->
				<Button
					variant="outline"
					class="hidden lg:flex cursor-pointer items-center space-x-2 border border-yellow-200 hover:bg-amber-200/10 hover:border-yellow-100 rounded-md px-4 py-2 font-medium text-yellow-200 transition-all duration-300 h-10"
				>
					<User class="h-4 w-4" />
					<span>auth --login</span>
				</Button>

				<!-- Tablet Login Button -->
				<Button
					variant="outline"
					class="hidden md:flex lg:hidden cursor-pointer items-center space-x-2 border border-yellow-200 hover:bg-amber-200/10 hover:border-yellow-100 rounded-md px-3 py-2 font-medium text-yellow-200 transition-all duration-300 h-10"
				>
					<User class="h-4 w-4" />
					<span class="text-sm">login</span>
				</Button>

				<!-- Mobile Login Button -->
				<Button
					class="flex md:hidden h-10 w-10 items-center justify-center rounded-md border border-yellow-200/50 bg-yellow-200/10 text-yellow-200 transition-all duration-200 hover:bg-yellow-200/20 hover:border-yellow-200"
					aria-label="Login"
				>
					<User class="h-4 w-4" />
				</Button>

				<!-- Mobile Menu Button -->
				<button
					onclick={toggleMenu}
					class="flex md:hidden h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/5 text-white transition-all duration-200 hover:bg-white/10 hover:border-white/30"
					aria-label="Toggle menu"
				>
					{#if isMenuOpen}
						<X class="h-5 w-5" />
					{:else}
						<Menu class="h-5 w-5" />
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile Navigation Menu -->
		{#if isMenuOpen}
			<div 
				class="border-t border-white/10 bg-black/40 backdrop-blur-sm md:hidden"
				style="animation: slideDown 0.2s ease-out;"
			>
				<div class="space-y-1 px-2 pt-3 pb-4">
					{#each navLinks as link}
						<a
							href={link.href}
							onclick={() => setActiveLink(link.href)}
							class="block rounded-lg px-4 py-3 font-mono text-sm transition-all duration-200 hover:bg-white/10 {activeLink === link.href 
								? 'text-green-300 bg-green-500/10 border border-green-400/30' 
								: 'text-green-400 hover:text-green-300 border border-transparent hover:border-green-400/20'}"
						>
							<div class="flex items-center justify-between">
								<div class="flex flex-col">
									<span class="font-medium">{link.text}</span>
									<span class="mt-1 text-xs text-gray-400">{link.description}</span>
								</div>
								<!-- Active indicator for mobile -->
								{#if activeLink === link.href}
									<div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
								{/if}
							</div>
						</a>
					{/each}
					
					<!-- Mobile Login in Menu -->
					<div class="pt-3 mt-3 border-t border-white/10">
						<button
							onclick={closeMenu}
							class="flex w-full items-center space-x-3 rounded-lg px-4 py-3 font-mono text-sm text-yellow-200 transition-all duration-200 hover:bg-yellow-200/10 border border-yellow-200/30 hover:border-yellow-200/50"
						>
							<User class="h-4 w-4" />
							<span>auth --login</span>
						</button>
					</div>
				</div>
			</div>
		{/if}
	</div>
</nav>

<style>
	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Custom breakpoint for extra small screens */
	@media (min-width: 480px) {
		.xs\:block {
			display: block;
		}
	}
</style>