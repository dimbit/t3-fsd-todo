import { ThemeToggleButton } from '@/features/theme-toggle'
import { NavigationBar } from '@/features/navigation'
import { ProfilePreview } from '@/entities/profile-preview'
import clsx from 'clsx'
import { SignOutButton } from '@/features/authentication'

type Props = {
	toggleCollapsed: () => void
	isCollapsed: boolean
	className?: string
}
export const Sidebar = ({ isCollapsed, toggleCollapsed, className }: Props) => {
	return (
		<aside
			className={clsx([
				'grid h-full grid-rows-[auto_1fr_auto] overflow-hidden bg-white drop-shadow-sm dark:bg-neutral-700',
				className,
			])}
		>
			<Section>
				<ProfilePreview
					className={clsx([
						'p-2 transition-transform',
						isCollapsed && '-translate-x-2',
					])}
				/>
			</Section>
			<Section>
				<NavigationBar />
				<button onClick={toggleCollapsed}>
					{isCollapsed ? 'show' : 'hide'}
				</button>
			</Section>
			<Section>
				<ThemeToggleButton />
				<SignOutButton />
			</Section>
		</aside>
	)
}

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
