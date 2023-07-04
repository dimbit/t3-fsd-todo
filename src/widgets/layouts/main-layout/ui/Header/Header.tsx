import { memo } from 'react'
import clsx from 'clsx'

import { useTaskModalStore } from '@/features/task-modal'

import { Button } from '@/shared/ui-kit/Button'

import HamburgerIcon from '@/images/icons/hamburger.svg'

type Props = {
	openMobileSidebar: () => void
}
export const Header = memo(({ openMobileSidebar }: Props) => {
	const openTaskCreationModal = useTaskModalStore.use.openTaskCreationModal()

	const handleClickAddTask = () => {
		openTaskCreationModal({})
	}

	return (
		<div
			className={clsx([
				'col-start-1 col-end-3 row-start-1 row-end-2 flex h-14 w-full items-center justify-between px-4',
				'sm:justify-end',
			])}
		>
			<Button
				className={'sm:hidden'}
				onClick={openMobileSidebar}
			>
				<HamburgerIcon />
			</Button>
			<Button onClick={handleClickAddTask}>Add task</Button>
		</div>
	)
})

Header.displayName = 'Header'
