import { memo, useCallback } from 'react'
import type { Status, Task } from '@prisma/client'

import { useTaskModalStore } from '@/features/task-form'

import { TaskCard } from '@/entities/task'

type Props = {
	tasks: Task[]
	status: Status
	bottomActionSlot: (status: Status) => React.ReactNode
}

export const TasksList = memo(
	({ tasks = [], status, bottomActionSlot }: Props) => {
		const openTaskEditingModal = useTaskModalStore.use.openTaskEditingModal()

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
				<div className={'sticky bottom-4 mt-4 flex w-full flex-col'}>
					{bottomActionSlot(status)}
				</div>
			</div>
		)
	},
)

TasksList.displayName = 'TasksList'
