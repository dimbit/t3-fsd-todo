import { TaskCard } from '@/entities/task-card'
import { LoadingState } from '@/shared/ui-kit'
import type { Task } from '@prisma/client'

type Props = {
	tasks: Task[]
	isLoading?: boolean
	error?: string
}
export const TasksList = ({ tasks = [], isLoading, error }: Props) => {
	return (
		<div className={'flex w-full flex-col p-4'}>
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
	)
}
