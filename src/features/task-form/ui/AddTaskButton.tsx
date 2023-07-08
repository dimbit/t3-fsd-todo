import { memo, useCallback } from 'react'

import { Button } from '@/shared/ui'

import { type CreationFormInitialData, useTaskModalStore } from '../model'

type AddButtonProps = {
	children?: React.ReactNode
	className?: string
} & CreationFormInitialData &
	React.ComponentProps<typeof Button>

export const AddTaskButton = memo(
	({ children, title, description, status, ...props }: AddButtonProps) => {
		const openTaskCreationModal = useTaskModalStore.use.openTaskCreationModal()

		const handleClickAddTaskButton = useCallback(() => {
			openTaskCreationModal({ title, description, status })
		}, [title, description, status, openTaskCreationModal])

		return (
			<Button
				onClick={handleClickAddTaskButton}
				{...props}
			>
				{children}
			</Button>
		)
	},
)

AddTaskButton.displayName = 'AddTaskButton'
