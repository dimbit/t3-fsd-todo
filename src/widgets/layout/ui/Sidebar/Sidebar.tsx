import { ThemeToggleButton } from '@/features/theme-toggle'
import { NavigationBar } from './NavigationBar'
import { signOut } from 'next-auth/react'

type Props = {
	toggleCollapsed: () => void
	isCollapsed: boolean
}
export const Sidebar = ({ isCollapsed, toggleCollapsed }: Props) => {
	return (
		<aside className={'flex h-full flex-col justify-between bg-slate-300'}>
			<button
				// eslint-disable-next-line @typescript-eslint/no-misused-promises
				onClick={() => signOut()}
			>
				sign out
			</button>

			<div className={'flex flex-row-reverse justify-between'}>
				<button onClick={toggleCollapsed}>
					{isCollapsed ? 'show' : 'hide'}
				</button>
				{isCollapsed ? null : <div>profile</div>}
			</div>
			<NavigationBar />
			<ThemeToggleButton />
		</aside>
	)
}
