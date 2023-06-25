import { ThemeToggleButton } from '@/features/theme-toggle'
import { NavigationBar } from '@/features/navigation'
import { signOut } from 'next-auth/react'
import { ProfilePreview } from '@/entities/profile-preview'
import clsx from 'clsx'

type Props = {
	toggleCollapsed: () => void
	isCollapsed: boolean
}
export const Sidebar = ({ isCollapsed, toggleCollapsed }: Props) => {
	return (
		<aside
			className={
				'grid h-full grid-rows-[auto_1fr_auto] overflow-hidden bg-white drop-shadow-sm dark:bg-neutral-700'
			}
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
				<button
					// eslint-disable-next-line @typescript-eslint/no-misused-promises
					onClick={() => signOut()}
				>
					Sign out
				</button>
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
				'flex flex-col border-b border-b-neutral-300 p-2',
				'last:border-b-0 dark:border-b-neutral-600',
				className,
			])}
		>
			{children}
		</div>
	)
}
