import type { Status, Task } from '@prisma/client'

import { useTaskModalStore } from '@/features/task-modal'

import { TaskCard } from '@/entities/task-card'

import { Button, LoadingState } from '@/shared/ui-kit'

type Props = {
	tasks: Task[]
	isLoading?: boolean
	error?: string
	status: Status
}

export const TasksList = ({ tasks = [], isLoading, error, status }: Props) => {
	const openTaskEditingModal = useTaskModalStore.use.openTaskEditingModal()
	const openTaskCreationModal = useTaskModalStore.use.openTaskCreationModal()

	const handleClickTaskCard = (taskData: {
		id: string
		title: string
		description?: string | null
		status: Status
	}) => {
		if (!taskData.id) {
			return
		}
		openTaskEditingModal(taskData)
	}

	const handleClickAddTask = () => {
		openTaskCreationModal({
			status,
		})
	}

	return (
		<div className={'flex flex-col'}>
			<LoadingState
				isLoading={isLoading}
				error={error}
			>
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
			</LoadingState>
		</div>
	)
}
