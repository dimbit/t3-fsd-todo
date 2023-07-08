// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

/** @type {import("eslint").Linter.Config} */
const config = {
	overrides: [
		{
			extends: [
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			files: ['*.ts', '*.tsx'],
			parserOptions: {
				project: path.join(__dirname, 'tsconfig.json'),
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: path.join(__dirname, 'tsconfig.json'),
	},
	plugins: ['@typescript-eslint', 'simple-import-sort'],
	extends: [
		'next/core-web-vitals',
		'plugin:@typescript-eslint/recommended',
		'@feature-sliced/eslint-config/rules/public-api',
		'@feature-sliced/eslint-config/rules/layers-slices',
	],
	rules: {
		'@typescript-eslint/consistent-type-imports': [
			'warn',
			{
				prefer: 'type-imports',
				fixStyle: 'inline-type-imports',
			},
		],
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		'@typescript-eslint/no-misused-promises': [
			2,
			{
				checksVoidReturn: {
					attributes: false,
				},
			},
		],
		'sort-imports': 'off',
		'import/order': 'off',
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					['^react$', '^react-dom$', '^next*', '^[^.]'],
					['^@/pages/*'],
					['^@/screens/*'],
					['^@/features/*'],
					['^@/entities/*'],
					['^@/shared/*'],
					['^@/*'],
					['^\\.'],
				],
			},
		],
		'simple-import-sort/exports': 'error',
		// feature-sliced/public-api
		'import/no-internal-modules': 'warn',
		// feature-sliced/layers-slices
		'boundaries/element-types': 'warn',
	},
}

module.exports = config
