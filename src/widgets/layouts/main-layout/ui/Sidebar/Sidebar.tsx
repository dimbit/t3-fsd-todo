import { memo } from 'react'
import clsx from 'clsx'

import { SignOutButton } from '@/features/authentication'
import { useFSDLayerDebug } from '@/features/fsd-debug'
import { NavigationBar } from '@/features/navigation'
import { ThemeToggleButton } from '@/features/theme-toggle'

import { ProfilePreview } from '@/entities/profile'

import { Section } from './Section'

type Props = {
	toggleCollapsed: () => void
	isCollapsed: boolean
	className?: string
}
export const Sidebar = memo(
	({ isCollapsed, toggleCollapsed, className }: Props) => {
		const { className: sidebarDebugClassName, ...kanbanDataAttributes } =
			useFSDLayerDebug('widgets', Sidebar.displayName ?? '')
		const {
			className: pofilePreviewDebugClassName,
			...profilePreviewDataAttributes
		} = useFSDLayerDebug('entities', ProfilePreview.name)
		const {
			className: navigationBarDebugClassName,
			...navigationBarDataAttributes
		} = useFSDLayerDebug('features', NavigationBar.name)
		const {
			className: themeToggleButtonDebugClassName,
			...themeToggleButtonDataAttributes
		} = useFSDLayerDebug('features', ThemeToggleButton.name)
		const {
			className: signOutButtonDebugClassName,
			...signOutButtonDataAttributes
		} = useFSDLayerDebug('features', SignOutButton.name)

		return (
			<aside
				className={clsx([
					'grid h-full grid-rows-[auto_1fr_auto] overflow-hidden bg-white drop-shadow-sm dark:bg-neutral-700',
					className,
					sidebarDebugClassName,
				])}
				{...kanbanDataAttributes}
			>
				<Section>
					<ProfilePreview
						className={pofilePreviewDebugClassName}
						withName={!isCollapsed}
						{...profilePreviewDataAttributes}
					/>
				</Section>
				<Section>
					<NavigationBar
						className={navigationBarDebugClassName}
						isCollapsed={isCollapsed}
						{...navigationBarDataAttributes}
					/>
					<button onClick={toggleCollapsed}>
						{isCollapsed ? 'show' : 'hide'}
					</button>
				</Section>
				<Section>
					<ThemeToggleButton
						className={themeToggleButtonDebugClassName}
						withLabel={!isCollapsed}
						{...themeToggleButtonDataAttributes}
					/>
					<SignOutButton
						className={signOutButtonDebugClassName}
						withIcon={isCollapsed}
						withText={!isCollapsed}
						{...signOutButtonDataAttributes}
					/>
				</Section>
			</aside>
		)
	},
)

Sidebar.displayName = 'Sidebar'
