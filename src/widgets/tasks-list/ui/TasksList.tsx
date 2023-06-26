import { TaskCard } from '@/entities/task-card'
import { LoadingState } from '@/shared/ui-kit'
import type { Task } from '@prisma/client'

type Props = {
	tasks: Task[]
	isLoading?: boolean
	error?: string
	status?: string
}
export const TasksList = ({ tasks = [], isLoading, error, status }: Props) => {
	return (
		<div className={'flex flex-col gap-2 p-4'}>
			<h2 className={'px-4 font-bold'}>{status}</h2>
			<div className={'flex flex-col'}>
				<LoadingState
					isLoading={isLoading}
					error={error}
				>
					{tasks && tasks.length > 0 ? (
						<div className={'flex flex-col gap-4'}>
							{tasks?.map((task) => {
								return (
									<TaskCard
										{...task}
										key={task.id}
									/>
								)
							})}
						</div>
					) : (
						<span>nothing found</span>
					)}
				</LoadingState>
			</div>
		</div>
	)
}
