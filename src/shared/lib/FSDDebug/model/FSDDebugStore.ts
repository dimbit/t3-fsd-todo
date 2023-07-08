import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { createSelectors } from '@/shared/lib'

import { type Layer } from './types'

type State = { [key in Layer]: boolean }

export type Actions = {
	toggleLayer: (layer: Layer) => void
}

const initialState = {
	shared: false,
	entities: false,
	features: false,
	widgets: false,
	pages: false,
}

export const useFSDDebugStoreBase = create<State & Actions>()(
	persist(
		devtools(
			immer((set) => ({
				...initialState,

				toggleLayer: (layer) => {
					set((state) => {
						state[layer] = !state[layer]
					})
				},
			})),
		),
		{ name: 'FSDDebugStore' },
	),
)

export const useFSDDebugStore = createSelectors(useFSDDebugStoreBase)
