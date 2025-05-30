<script>
    import TerminalHeader from "./Terminal/TerminalHeader.svelte";
</script>

<div
class="overflow-hidden w-full max-w-xl rounded-lg border border-gray-800 shadow-2xl flex flex-col flex-1"
>
<TerminalHeader title="~/message" />
<div class="flex-1 h-full overflow-y-auto p-4 bg-zinc-800 text-white">
  <form action="message" method="post">
    <h1 class="mb-6 text-lg">Send a message</h1>
    <p class="mb-2 text-sm capitalize">name *</p>
    <input
      id="name"
      type="text"
      class="w-full p-2  text-gray-200 border border-sky-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-200 placeholder-sky-200"
      placeholder="Enter your name"
      required
    />
    <p class="mb-2 mt-4 text-sm capitalize">email *</p>
    <input
      id="email"
      type="email"
      class="w-full p-2 text-gray-200 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200 placeholder-pink-200"
      placeholder="Enter your email"
      required
    />
    <p class="mb-2 mt-4 text-sm capitalize">message *</p>
    <textarea
      id="message"
      rows={4}
      class="w-full p-2 mb-2 text-white border border-emerald-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-200 placeholder-emerald-200"
      placeholder="Type your message here..."
      required
    ></textarea>
    <button
      type="submit"
      class="mt-4 px-4 w-full py-2 mb-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Send Message
    </button>
  </form>
  <p class="text-xs italic">
    By sending this message, you agree to our <a
      class="text-emerald-200 hover:underline"
      href="/">Privacy Policy</a
    >.
  </p>
</div>
</div>