import { useEffect } from 'react'
import { shallow } from 'zustand/shallow'

import { useThemeStore } from './themeStore'

export const useThemeToggle = () => {
	const [theme, toggleTheme] = useThemeStore(
		(state) => [state.theme, state.toggleTheme],
		shallow,
	)

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [theme])

	return {
		theme,
		toggleTheme,
	}
}
