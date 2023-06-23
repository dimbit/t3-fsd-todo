import { type Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				sidebar: '16rem 1fr',
				'sidebar-collapsed': '3rem 1fr',
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
