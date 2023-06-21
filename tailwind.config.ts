import { type Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				sidebar: '16rem 1fr',
				'sidebar-collapsed': '3rem 1fr',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
} satisfies Config
