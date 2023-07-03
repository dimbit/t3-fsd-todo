import { useState } from 'react'
import clsx from 'clsx'

import { Header } from './Header'
import { Sidebar } from './Sidebar'

type Props = {
	children?: React.ReactNode
}

export const Layout = ({ children }: Props) => {
	const [sidebarIsCollapsed, setSidebarCollapsed] = useState(true)

	const toggleSidebarCollapsed = () => {
		setSidebarCollapsed((previous) => {
			return !previous
		})
	}

	return (
		<>
			<main
				className={clsx({
					'grid-col grid h-full grid-rows-auto-1fr': true,
					'grid-cols-sidebar': !sidebarIsCollapsed,
					'grid-cols-sidebar-collapsed': sidebarIsCollapsed,
					'transition-[grid-template-columns]': true,
				})}
			>
				<Sidebar
					isCollapsed={sidebarIsCollapsed}
					toggleCollapsed={toggleSidebarCollapsed}
					className={'row-start-1 row-end-3'}
				/>
				<Header />
				{children}
			</main>
		</>
	)
}
