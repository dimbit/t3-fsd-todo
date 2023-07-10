export const layers = [
	'shared',
	'entities',
	'features',
	'widgets',
	'pages',
] as const
export type Layer = (typeof layers)[number]
