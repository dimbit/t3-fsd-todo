import { memo } from 'react'
import clsx from 'clsx'

import { AddTaskButton } from '@/features/task-form'

import { Button } from '@/shared/ui/Button'
import HamburgerIcon from '@/shared/ui/icons/hamburger.svg'

type Props = {
	openMobileSidebar: () => void
}
export const Header = memo(({ openMobileSidebar }: Props) => {
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
			<AddTaskButton>Add task</AddTaskButton>
		</div>
	)
})

Header.displayName = 'Header'
