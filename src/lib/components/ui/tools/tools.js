export const tools = [
  {
    type: "Programming",
    name: "Javasrcipt",
    src: "/icons/javascript-original.svg",
  },
  {
    type: "Programming",
    name: "Typesrcipt",
    src: "/icons/typescript-original.svg",
  },
  {
    type: "Programming",
    name: "Python",
    src: "/icons/python-original.svg",
  },
  {
    type: "Programming",
    name: "Java",
    src: "/icons/java-original.svg",
  },
  {
    type: "Programming",
    name: "C#",
    src: "/icons/csharp-original.svg",
  },
  {
    type: "Frontend",
    name: "React",
    src: "/icons/react-original.svg",
  },
  {
    type: "Frontend",
    name: "Svelte",
    src: "/icons/svelte-original.svg",
  },
  {
    type: "Frontend",
    name: "Next.js",
    src: "/icons/nextjs-original.svg",
  },
  {
    type: "Frontend",
    name: "tailwindcss",
    src: "/icons/tailwindcss-original.svg",
  },
  {
    type: "Frontend",
    name: "Bootstrap",
    src: "/icons/bootstrap-original.svg",
  },
  {
    type: "Backend",
    name: "Node.js",
    src: "/icons/nodejs-original.svg",
  },
  {
    type: "Backend",
    name: "Express.js",
    src: "/icons/express-original-wordmark.svg",
  },
  {
	type: "Backend",
	name: "Elysia.js",
	src: "/icons/elysia.svg",
  },
  {
    type: "Backend",
    name: ".NET Core",
    src: "/icons/dotnetcore-original.svg",
  },
  {
    type: "Databases",
    name: "MongoDB",
    src: "/icons/mongodb-original.svg",
  },
  {
    type: "Databases",
    name: "MySQL",
    src: "/icons/mysql-original.svg",
  },
  {
    type: "Databases",
    name: "PostgreSQL",
    src: "/icons/postgresql-plain.svg",
  },
  {
    type: "Tools",
    name: "Git",
    src: "/icons/git-original.svg",
  },
  {
    type: "Tools",
    name: "Docker",
    src: "/icons/docker-plain.svg",
  },
  {
    type: 'Tools',
    name: "Vercel",
    src: "/icons/vercel-original.svg",
  },
  {
    type: "Tools",
    name: "Figma",
    src: "/icons/figma.webp",
  },
];

export const typeColorMap = {
	"Programming": "text-yellow-200",
	"Frontend": "text-blue-200",
	"Backend": "text-green-200",
	"Databases": "text-purple-200",
	"Tools": "text-gray-200",
}
export const groupedTools = tools.reduce((acc, tool) => {
  if (!acc[tool.type]) acc[tool.type] = [];
  acc[tool.type].push(tool);
  return acc;
}, {});
