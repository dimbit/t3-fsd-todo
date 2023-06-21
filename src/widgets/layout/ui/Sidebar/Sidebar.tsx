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
			<ul>
				<li>Option 1</li>
				<li>Option 2</li>
				<li>Option 3</li>
			</ul>
		</aside>
	)
}
