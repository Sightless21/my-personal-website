export const tools = [
	{
		type: 'Programming',
		name: 'JavaScript',
		scr: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
	},
	{
		type: 'Programming',
		name: 'TypeScript',
		scr: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
	},
	{
		type: 'Programming',
		name: 'Python',
		scr: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
	},
	{
		type: 'Programming',
		name: 'Java',
		scr: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'
	},
	{
		type: 'Programming',
		name: 'C#',
		scr: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg'
	},
	{
		type: 'Frontend',
		name: 'React',
		scr: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
	},
	{
		type: 'Frontend',
		name: 'Svelte',
		scr: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg'
	},
	{
		type: 'Frontend',
		name: 'Next.js',
		scr: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg'
	},
	{
		type: 'Frontend',
		name: 'tailwindcss',
		scr: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
	},
	{
		type: 'Backend',
		name: 'Node.js',
		scr: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
	},
	{
		type: 'Backend',
		name: 'Express.js',
		scr: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'
	},
	{
		type: 'Databases',
		name: 'MongoDB',
		scr: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'
	},
	{
		type: 'Databases',
		name: 'MySQL',
		scr: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
	},
	{
		type: 'Databases',
		name: 'PostgreSQL',
		scr: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
	},
	{
		type: 'Tools',
		name: 'Git',
		scr: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
	},
	{
		type: 'Tools',
		name: 'Docker',
		scr: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg'
	},
];
export const groupedTools = tools.reduce((acc, tool) => {
	if (!acc[tool.type]) acc[tool.type] = [];
	acc[tool.type].push(tool);
	return acc;
}, {});