import { useCallback, useState } from 'react'
import clsx from 'clsx'

import { useIsMobile } from '@/shared/hooks'

import { Header } from './Header'
import { MobileSidebar, Sidebar } from './Sidebar'

type Props = {
	children?: React.ReactNode
}

export const MainLayout = ({ children }: Props) => {
	const [sidebarIsCollapsed, setSidebarCollapsed] = useState(true)
	const [sidebarIsOpenedOnMobile, setSidebarIsOpenedOnMobile] = useState(false)

	const toggleSidebarCollapsed = useCallback(() => {
		setSidebarCollapsed((previous) => {
			return !previous
		})
	}, [])

	const openMobileSidebar = useCallback(() => {
		setSidebarIsOpenedOnMobile(true)
	}, [])

	const closeMobileSidebar = useCallback(() => {
		setSidebarIsOpenedOnMobile(false)
	}, [])

	const isMobile = useIsMobile()

	return (
		<main
			className={clsx([
				'relative grid h-full grid-cols-1 grid-rows-auto-1fr',
				'sm:transition-[grid-template-columns]',
				sidebarIsCollapsed
					? 'sm:grid-cols-sidebar-collapsed'
					: 'sm:grid-cols-sidebar',
			])}
		>
			<Header openMobileSidebar={openMobileSidebar} />
			{children}
			{isMobile ? (
				<MobileSidebar
					isOpened={sidebarIsOpenedOnMobile}
					closeSidebar={closeMobileSidebar}
				/>
			) : (
				<Sidebar
					isCollapsed={sidebarIsCollapsed}
					toggleCollapsed={toggleSidebarCollapsed}
					className={clsx([
						'bottom-0 top-0 h-full',
						'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-3',
					])}
				/>
			)}
		</main>
	)
}
