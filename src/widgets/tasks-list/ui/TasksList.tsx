import { TaskCard } from '@/entities/task-card'
import { LoadingState } from '@/shared/ui-kit'
import type { Status, Task } from '@prisma/client'
import { api } from '@/shared/api'

type Props = {
	tasks: Task[]
	isLoading?: boolean
	error?: string
	status: Status
}
export const TasksList = ({ tasks = [], isLoading, error, status }: Props) => {
	const trpcUtils = api.useContext()
	const addTaskMutation = api.tasks.createOne.useMutation({
		onSuccess: async () => {
			await trpcUtils.tasks.getAll.invalidate()
		},
	})

	const handleMutation = () => {
		addTaskMutation.mutate({
			title: 'Created task',
			description: 'Created task description',
			statusId: status.id,
		})
	}

	return (
		<div className={'flex flex-col gap-2'}>
			<h2 className={'px-4 font-bold'}>{status.name}</h2>
			<div className={'flex flex-col'}>
				<LoadingState
					isLoading={isLoading}
					error={error}
				>
					<div className={'flex flex-col gap-2'}>
						{tasks?.map((task) => {
							return (
								<TaskCard
									{...task}
									key={task.id}
								/>
							)
						})}
					</div>
					<button onClick={handleMutation}>add +</button>
				</LoadingState>
			</div>
		</div>
	)
}
