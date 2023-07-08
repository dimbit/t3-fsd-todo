import { type Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export const FSDDebugColors = [
	'rose-500',
	'amber-500',
	'orange-700',
	'lime-500',
	'blue-500',
]

const generateFSDDebugColorProperties = () => {
	const layers = ['shared', 'entities', 'features', 'widgets', 'pages']
	const propertyPrefixies = ['outline', 'after:text']
	const FSDDebugProperties = layers.reduce<string[]>((accumulator, layer) => {
		const utilitiesForCurrentColor = propertyPrefixies.map(
			(prefix) => `${prefix}-${layer}`,
		)
		return accumulator.concat(utilitiesForCurrentColor)
	}, [])
	return FSDDebugProperties
}

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
			colors: {
				shared: colors['rose'][500],
				entities: colors['amber'][500],
				features: colors['orange'][700],
				widgets: colors['lime'][500],
				pages: colors['blue'][500],
			},
		},
	},
	plugins: [],
	darkMode: 'class',
	safelist: [...generateFSDDebugColorProperties()],
} satisfies Config
