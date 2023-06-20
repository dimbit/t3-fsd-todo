import { useThemeToggle } from '../model'

export const ThemeToggleButton = () => {
	const { theme, toggleTheme } = useThemeToggle()

	return <button onClick={toggleTheme}>{theme}</button>
}
