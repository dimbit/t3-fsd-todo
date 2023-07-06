import { memo, useCallback } from 'react'
import type { Status, Task } from '@prisma/client'

import { useTaskModalStore } from '@/features/task-form'

import { TaskCard } from '@/entities/task'

import { Button } from '@/shared/ui-kit'

type Props = {
	tasks: Task[]
	status: Status
}

export const TasksList = memo(({ tasks = [], status }: Props) => {
	const openTaskEditingModal = useTaskModalStore.use.openTaskEditingModal()
	const openTaskCreationModal = useTaskModalStore.use.openTaskCreationModal()

	const handleClickTaskCard = useCallback(
		(taskData: {
			id: string
			title: string
			description?: string | null
			status: Status
		}) => {
			if (!taskData.id) {
				return
			}
			openTaskEditingModal(taskData)
		},
		[openTaskEditingModal],
	)

	const handleClickAddTask = useCallback(() => {
		openTaskCreationModal({
			status,
		})
	}, [openTaskCreationModal, status])

	return (
		<div className={'flex flex-col'}>
			<div className={'flex flex-col gap-2'}>
				{tasks?.map((task) => {
					return (
						<TaskCard
							id={task.id}
							title={task.title}
							description={task.description}
							status={status}
							key={task.id}
							onClick={handleClickTaskCard}
						/>
					)
				})}
			</div>
			<Button
				className={'b-1 sticky bottom-4 mt-4'}
				onClick={handleClickAddTask}
			>
				Add
			</Button>
		</div>
	)
})

TasksList.displayName = 'TasksList'
