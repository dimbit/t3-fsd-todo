import { memo, useCallback } from 'react'

import { useFSDLayerDebug } from '@/shared/lib/FSDDebug'
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

		const { className: debugClassName, ...rest } = useFSDLayerDebug(
			'features',
			AddTaskButton.displayName ?? '',
		)

		return (
			<Button
				{...rest}
				onClick={handleClickAddTaskButton}
				className={debugClassName}
				{...props}
			>
				{children}
			</Button>
		)
	},
)

AddTaskButton.displayName = 'AddTaskButton'
