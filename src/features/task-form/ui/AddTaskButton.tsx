import { useCallback } from 'react'

import { Button } from '@/shared/ui'

import { type CreationFormInitialData, useTaskModalStore } from '../model'

type AddButtonProps = {
	children?: React.ReactNode
	className?: string
	taskInitialData?: CreationFormInitialData
} & React.ComponentProps<typeof Button>

export const AddTaskButton = ({
	children,
	taskInitialData = {},
	...props
}: AddButtonProps) => {
	const openTaskCreationModal = useTaskModalStore.use.openTaskCreationModal()

	const handleClickAddTaskButton = useCallback(() => {
		openTaskCreationModal(taskInitialData)
	}, [taskInitialData, openTaskCreationModal])

	return (
		<Button
			onClick={handleClickAddTaskButton}
			{...props}
		>
			{children}
		</Button>
	)
}
