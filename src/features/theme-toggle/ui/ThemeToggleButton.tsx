import clsx from 'clsx'

import { Switch } from '@/shared/ui'

import MoonIcon from '@/images/icons/moon.svg'

import { useThemeToggle } from '../model'

type Props = {
	withLabel?: boolean
}

export const ThemeToggleButton = ({ withLabel }: Props) => {
	const { theme, toggleTheme } = useThemeToggle()
	return (
		<div
			className={clsx([
				'grid justify-start text-neutral-500 dark:text-neutral-300',
				'whitespace-nowrap',
				withLabel && 'grid-cols-[auto_auto_1fr] gap-2',
			])}
		>
			{withLabel && (
				<>
					<MoonIcon className={'stroke-current'} />
					<span>Dark theme</span>
				</>
			)}
			<Switch
				className={'justify-self-end'}
				checked={theme === 'dark'}
				onChange={toggleTheme}
			/>
		</div>
	)
}
