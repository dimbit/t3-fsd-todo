import { memo } from 'react'
import clsx from 'clsx'

import { AddTaskButton } from '@/features/task-form'

import HamburgerIcon from '@/shared/assets/icons/hamburger.svg'
import { useFSDLayerDebug } from '@/shared/lib/FSDDebug'
import { Button } from '@/shared/ui'

type Props = {
	openMobileSidebar: () => void
}
export const Header = memo(({ openMobileSidebar }: Props) => {
	const { className: debugClassName, ...rest } = useFSDLayerDebug(
		'widgets',
		Header.displayName ?? '',
	)
	const {
		className: addTaskButtonDebugClassName,
		...addTaskButtonDataAttributes
	} = useFSDLayerDebug('features', AddTaskButton.name)

	return (
		<div
			{...rest}
			className={clsx([
				'col-start-1 col-end-3 row-start-1 row-end-2 flex h-14 w-full items-center justify-between px-4',
				'sm:justify-end',
				debugClassName,
			])}
		>
			<Button
				className={'sm:hidden'}
				onClick={openMobileSidebar}
			>
				<HamburgerIcon />
			</Button>
			<AddTaskButton
				className={addTaskButtonDebugClassName}
				{...addTaskButtonDataAttributes}
			>
				Add task
			</AddTaskButton>
		</div>
	)
})

Header.displayName = 'Header'
