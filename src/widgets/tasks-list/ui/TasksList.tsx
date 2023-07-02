import { TaskCard } from '@/entities/task-card'
import { LoadingState } from '@/shared/ui-kit'
import type { Status, Task } from '@prisma/client'
import { useTaskModalStore } from '@/features/task-modal/model'

type Props = {
	tasks: Task[]
	isLoading?: boolean
	error?: string
	status: Status
}
export const TasksList = ({ tasks = [], isLoading, error, status }: Props) => {
	const { openTaskEditingModal, openTaskCreationModal } = useTaskModalStore()

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
		<div className={'flex flex-col gap-2'}>
			<h2 className={'px-4 font-bold'}>{status}</h2>
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
					<button onClick={handleClickAddTask}>add +</button>
				</LoadingState>
			</div>
		</div>
	)
}
