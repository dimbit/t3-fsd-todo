import clsx from 'clsx'

import { type Layer } from './types'

export const useFSDLayerDebug = (layer: Layer, name: string) => {
	const colorUtilityPrefixies = ['border', 'after:text']
	const colorUtilities = colorUtilityPrefixies.map((prefix) => {
		return `${prefix}-${layer}`
	})
	const path = `${layer}/${name}`

	return {
		['data-after-content']: path,
		className: clsx([
			'border after:absolute after:right-0 after:text-x after:content-[attr(data-after-content)]',
			...colorUtilities,
		]),
	}
}
