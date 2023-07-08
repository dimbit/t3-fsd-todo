import { memo } from 'react'
import clsx from 'clsx'

import { SignOutButton } from '@/features/authentication'
import { NavigationBar } from '@/features/navigation'
import { ThemeToggleButton } from '@/features/theme-toggle'

import { ProfilePreview } from '@/entities/profile'

import { useFSDLayerDebug } from '@/shared/lib/FSDDebug'

import { Section } from './Section'

type Props = {
	toggleCollapsed: () => void
	isCollapsed: boolean
	className?: string
}
export const Sidebar = memo(
	({ isCollapsed, toggleCollapsed, className }: Props) => {
		const { className: debugClassName, ...rest } = useFSDLayerDebug(
			'widgets',
			Sidebar.displayName ?? '',
		)
		return (
			<aside
				{...rest}
				className={clsx([
					'grid h-full grid-rows-[auto_1fr_auto] overflow-hidden bg-white drop-shadow-sm dark:bg-neutral-700',
					className,
					debugClassName,
				])}
			>
				<Section>
					<ProfilePreview withName={!isCollapsed} />
				</Section>
				<Section>
					<NavigationBar isCollapsed={isCollapsed} />
					<button onClick={toggleCollapsed}>
						{isCollapsed ? 'show' : 'hide'}
					</button>
				</Section>
				<Section>
					<ThemeToggleButton withLabel={!isCollapsed} />
					<SignOutButton
						withIcon={isCollapsed}
						withText={!isCollapsed}
					/>
				</Section>
			</aside>
		)
	},
)

Sidebar.displayName = 'Sidebar'
