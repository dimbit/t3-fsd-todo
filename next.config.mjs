await import('./src/env.mjs')

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,
}

config.i18n = {
	locales: ['en'],
	defaultLocale: 'en',
}

config.images = {
	remotePatterns: [
		{
			protocol: 'https',
			hostname: '**',
		},
	],
}

config.webpack = (config) => {
	config.module.rules.push(
		{
			test: /\.svg$/i,
			resourceQuery: /url/, // *.svg?url
		},
		{
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			resourceQuery: { not: /url/ }, // exclude if *.svg?url
			use: [{ loader: '@svgr/webpack' }],
		},
	)

	return config
}

export default config
