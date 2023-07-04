import { memo } from 'react'
import clsx from 'clsx'

import { SignOutButton } from '@/features/authentication'
import { NavigationBar } from '@/features/navigation'
import { ThemeToggleButton } from '@/features/theme-toggle'

import { ProfilePreview } from '@/entities/profile-preview'

type Props = {
	toggleCollapsed: () => void
	isCollapsed: boolean
	className?: string
}
export const Sidebar = memo(
	({ isCollapsed, toggleCollapsed, className }: Props) => {
		return (
			<aside
				className={clsx([
					'grid h-full grid-rows-[auto_1fr_auto] overflow-hidden bg-white drop-shadow-sm dark:bg-neutral-700',
					className,
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

type SectionProps = {
	children?: React.ReactNode
	className?: string
}
const Section = ({ children, className }: SectionProps) => {
	return (
		<div
			className={clsx([
				'grid grid-flow-row content-start gap-4 border-b border-b-neutral-300 px-2 py-4',
				'last:border-b-0 dark:border-b-neutral-600',
				className,
			])}
		>
			{children}
		</div>
	)
}
