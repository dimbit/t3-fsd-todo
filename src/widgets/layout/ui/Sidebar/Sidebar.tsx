import { ThemeToggleButton } from '@/features/theme-toggle'
import { NavigationBar } from './NavigationBar'
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
				'grid h-full grid-rows-[auto_auto_auto_1fr_auto_auto_auto] overflow-hidden bg-white drop-shadow-sm dark:bg-neutral-700'
			}
		>
			<ProfilePreview
				className={clsx([
					'p-4 transition-transform',
					isCollapsed && '-translate-x-2',
				])}
			/>
			<hr className={'dark:border-gray-500'} />
			<div className={'flex flex-row-reverse justify-between'}>
				<button onClick={toggleCollapsed}>
					{isCollapsed ? 'show' : 'hide'}
				</button>
			</div>
			<NavigationBar />
			<hr className={'dark:border-gray-500'} />
			<ThemeToggleButton />
			<button
				// eslint-disable-next-line @typescript-eslint/no-misused-promises
				onClick={() => signOut()}
			>
				Sign out
			</button>
		</aside>
	)
}
