import { colorize, colorText } from "$lib/utils/colorParser";
export const ASCII_DOG = `    ^
   / \\__
  (    @\\___
  /         O
 /   (_____/
/_____/   U
`;

export const commands = {
  help: {
    name: "help",
    description: "Show available commands",
    execute: () => {
      const commandList = Object.values(commands)
        .map(
          (cmd) =>
            `  ${colorize(cmd.name.padEnd(12), "cyan")} - ${cmd.description}`
        )
        .join("\n");
      return `${colorize("Available commands:", "brightYellow")}\n${commandList}`;
    },
  },

  about: {
    name: "about",
    description: "Learn about me",
    execute: () =>
      `${colorize("I'm a developer", "green")} passionate about creating ${colorize("beautiful web experiences", "brightCyan")} with modern technologies like ${colorize("Svelte", "red")}, ${colorize("React", "blue")}, ${colorize("Next.js", "gray")}, and ${colorize("TypeScript", "brightBlue")}.`,
  },

  projects: {
    name: "projects",
    description: "View my projects",
    execute: () => `${colorize("My projects include:", "brightYellow")}
  • ${colorize("Terminal Portfolio", "green")} - Interactive terminal-style portfolio
  • ${colorize("E-commerce Platform", "cyan")} - ${colorText(
    "Full-stack SvelteKit application",
    {
      color: "blue",
      background: "white",
      bold: true,
      underline: true,
    }
  )}
  • ${colorize("Task Manager", "magenta")} - Svelte app with real-time updates
  • ${colorize("Open Source Contributions", "yellow")} - Various GitHub repositories`,
  },

  skills: {
    name: "skills",
    description: "See my technical skills",
    execute: () => `${colorize("Technical Skills:", "brightYellow")}
  ${colorize("Frontend:", "brightCyan")} Svelte, SvelteKit, React, Next.js, TypeScript, Tailwind CSS
  ${colorize("Backend:", "brightGreen")} Node.js, Express, PostgreSQL, MongoDB
  ${colorize("Tools:", "brightMagenta")} Git, Docker, Vercel, AWS, Figma
  ${colorize("Languages:", "brightBlue")} JavaScript, TypeScript, Python, Go`,
  },

  contact: {
    name: "contact",
    description: "How to reach me",
    execute: () => `${colorize("Contact Information:", "brightYellow")}
  ${colorize("Email:", "cyan")} <a class="hover:underline" target="_blank" href="mailto:pou.phanupong@gmail.com">pou.phanupong@gmail.com</a>
  ${colorize("GitHub:", "magenta")} <a class="hover:underline" target="_blank" href="https://github.com/Sightless21">github.com/sightless21</a>
  ${colorize("LinkedIn:", "blue")} <a class="hover:underline" target="_blank" href="https://www.linkedin.com/in/phanupong-poungbaidee-2a6a78322/">Phanupong Poungbaidee</a>`,
  },

  dog: {
    name: "dog",
    description: "Show the ASCII cat",
    execute: () => `${colorize(ASCII_DOG, "green")}`,
  },

  clear: {
    name: "clear",
    description: "Clear the terminal",
    execute: () => "CLEAR_TERMINAL",
  },

  date: {
    name: "date",
    description: "Show current date and time",
    execute: () => {
      const now = new Date();
      return `${colorize("Current date:", "cyan")} ${colorize(now.toLocaleDateString(), "brightWhite")}
${colorize("Current time:", "cyan")} ${colorize(now.toLocaleTimeString(), "brightWhite")}`;
    },
  },

  whoami: {
    name: "whoami",
    description: "Display current user",
    execute: () => colorize("iamickdev", "green"),
  },

  ls: {
    name: "ls",
    description: "List directory contents",
    execute: () => `${colorize("total 8", "gray")}
${colorize("drwxr-xr-x", "blue")}  2 ${colorize("iamickdev", "green")}  ${colorize("staff", "green")}   64 Dec 25 12:00 ${colorize("projects/", "brightBlue")}
${colorize("drwxr-xr-x", "blue")}  2 ${colorize("iamickdev", "green")}  ${colorize("staff", "green")}   64 Dec 25 12:00 ${colorize("skills/", "brightBlue")}
${colorize("-rw-r--r--", "gray")}  1 ${colorize("iamickdev", "green")}  ${colorize("staff", "green")}  1.2K Dec 25 12:00 ${colorize("about.txt", "white")}
${colorize("-rw-r--r--", "gray")}  1 ${colorize("iamickdev", "green")}  ${colorize("staff", "green")}  856 Dec 25 12:00 ${colorize("contact.txt", "white")}`,
  },

  echo: {
    name: "echo",
    description: "Display a line of text",
    execute: (args) => args?.join(" ") || "",
  },
};

export function executeCommand(input) {
  const [commandName, ...args] = input.trim().split(" ");
  const command = commands[commandName.toLowerCase()];

  if (!command) {
    return {
      command: input,
      output: `${colorize("command not found:", "red")} ${colorize(commandName, "brightRed")}. Type ${colorize("help", "green")} for available commands.`,
      timestamp: new Date(),
    };
  }

  const output = command.execute(args);

  return {
    command: input,
    output,
    timestamp: new Date(),
  };
}
