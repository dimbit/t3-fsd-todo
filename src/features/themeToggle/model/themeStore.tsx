import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type Theme = 'dark' | 'light'
type State = {
	theme: Theme
}
type Actions = {
	toggleTheme: () => void
}
export const useThemeStore = create<State & Actions>()(
	persist(
		devtools(
			immer((set) => ({
				theme: 'light',
				toggleTheme: () => {
					set((state) => {
						state.theme = state.theme === 'light' ? 'dark' : 'light'
					})
				},
			})),
		),
		{ name: 'themeStore' },
	),
)
