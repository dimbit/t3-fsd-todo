import { type Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				sidebar: '16rem 1fr',
				kanban: 'repeat(3, minmax(12rem, 1fr))',
				'sidebar-collapsed': '3.5rem 1fr',
				'auto-1fr': 'auto 1fr',
				'1fr-auto': '1fr auto',
			},
			gridTemplateRows: {
				'auto-1fr': 'auto 1fr',
				'1fr-auto': '1fr auto',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
} satisfies Config
