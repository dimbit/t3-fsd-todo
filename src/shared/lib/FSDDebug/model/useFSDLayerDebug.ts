import clsx from 'clsx'

import { useFSDDebugStore } from './FSDDebugStore'
import { type Layer } from './types'

export const useFSDLayerDebug = (layer: Layer, name: string) => {
	const colorUtilityPrefixies = ['outline', 'after:text']
	const colorUtilities = colorUtilityPrefixies.map((prefix) => {
		return `${prefix}-${layer}`
	})
	const path = `${layer}/${name}`

	const isActive = useFSDDebugStore.use[layer]()

	return {
		['data-after-content']: path,
		className: isActive
			? clsx([
					'outline after:absolute after:right-0 after:text-xs after:content-[attr(data-after-content)]',
					...colorUtilities,
			  ])
			: '',
	}
}
