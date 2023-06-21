import { Sidebar } from './Sidebar'
import clsx from 'clsx'
import { useState } from 'react'

type Props = {
	children?: React.ReactNode
}

export const Layout = ({ children }: Props) => {
	const [sidebarIsCollapsed, setSidebarCollapsed] = useState(false)

	const toggleSidebarCollapsed = () => {
		setSidebarCollapsed((previous) => {
			return !previous
		})
	}

	return (
		<>
			<main
				className={clsx({
					'grid-col grid h-full': true,
					'grid-cols-sidebar': !sidebarIsCollapsed,
					'grid-cols-sidebar-collapsed': sidebarIsCollapsed,
					'transition-[grid-template-columns]': true,
				})}
			>
				<Sidebar
					isCollapsed={sidebarIsCollapsed}
					toggleCollapsed={toggleSidebarCollapsed}
				/>
				{children}
			</main>
		</>
	)
}
