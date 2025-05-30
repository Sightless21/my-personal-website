<script>
  import TerminalHeader from "../Terminal/TerminalHeader.svelte";
  import { Mail, Github, Linkedin, Instagram } from "@lucide/svelte";
  import Message from "../Message.svelte";
  let contacts = [
    {
      icon: Mail,
      contact: "for-work email",
      href: "mailto:pou.phanupong@gmail.com",
      display: "pou.phanupong@gmail.com",
    },
    {
      icon: Mail,
      contact: "personal email",
      href: "mailto:firstsecondd45@gmail.com",
      display: "firstsecondd45@gmail.com",
    },
    {
      icon: Github,
      contact: "github",
      href: "https://www.github.com/sightless21",
      display: "@sightless21",
    },
    {
      icon: Linkedin,
      contact: "linkedin",
      href: "https://www.linkedin.com/in/phanupong-poungbaidee-2a6a78322/",
      display: "Phanupong Poungbaidee",
    },
    {
      icon: Instagram,
      contact: "instargram",
      href: "https://www.instagram.com/_1stsecond/",
      display: "@_1stsecond",
    },
  ];
</script>

<section class="relative min-h-screen overflow-hidden p-4 mx-auto max-w-7xl">
  <header class="text-end">
    <span class="text-sx rounded-xl bg-blue-950/30 p-2 text-sky-200">
      <span class="text-emerald-200">$</span> touch contact.md</span
    >
    <h1
      class="mb-6 text-6xl leading-tight font-black text-white md:text-7xl lg:text-8xl"
    >
      Let's <span class="text-pink-200">Connect</span>
    </h1>
  </header>

  <!-- Main content -->
  <div
    class="mx-auto flex p-15 w-full max-w-7xl flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12 min-h-[600px] lg:items-stretch"
  >
    <!-- Right -->
    <div
      class="overflow-hidden w-full max-w-xl rounded-lg border border-gray-800 shadow-2xl flex flex-col flex-1"
    >
      <TerminalHeader title="~/sightlessdev" />
      <div class="flex-1 h-full overflow-y-auto p-4 bg-zinc-800 text-white">
        <p class="text-sm mb-4">
          I'm always open to discussing new projects, opportunities, or
          partnerships.
        </p>
        <p class="text-sm mb-4">
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div class="space-y-4">
          {#each contacts as contact}
            <div class="flex items-center gap-4">
              <svelte:component
                this={contact.icon}
                class="text-2xl text-gray-400"
              />
              <span class="text-sm text-gray-300 uppercase"
                >{contact.contact}:</span
              >
              <a
                href={contact.href}
                class="text-sm text-blue-300 hover:text-blue-500"
                target="_blank"
              >
                {contact.display}
              </a>
            </div>
          {/each}
        </div>
      </div>
    </div>
    <!-- Left -->
    <Message />
  </div>
</section>
