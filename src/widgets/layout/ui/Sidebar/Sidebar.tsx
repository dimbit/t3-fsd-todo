import { ThemeToggleButton } from '@/features/themeToggle'
import { NavigationBar } from './NavigationBar'

type Props = {
	toggleCollapsed: () => void
	isCollapsed: boolean
}
export const Sidebar = ({ isCollapsed, toggleCollapsed }: Props) => {
	return (
		<aside className={'flex h-full flex-col justify-between bg-slate-300'}>
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
