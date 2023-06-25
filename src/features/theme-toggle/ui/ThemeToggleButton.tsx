import { useThemeToggle } from '../model'
import { Switch } from '@/shared/ui-kit'
import MoonIcon from '@/images/icons/moon.svg'

export const ThemeToggleButton = () => {
	const { theme, toggleTheme } = useThemeToggle()
	return (
		<div
			className={
				'grid grid-cols-[auto_auto_1fr] justify-start gap-2 text-neutral-500 dark:text-neutral-300'
			}
		>
			<MoonIcon className={'stroke-current'} />
			Dark theme
			<Switch
				className={'justify-self-end'}
				checked={theme === 'dark'}
				onChange={toggleTheme}
			/>
		</div>
	)
}
