import { TaskCard } from '@/entities/task-card'
import { api } from '@/shared/api'
import { LoadingState } from '@/shared/ui-kit'

export const TasksList = () => {
	const {
		data: tasks,
		isLoading,
		error,
	} = api.tasks.getAll.useQuery(undefined, {
		refetchOnWindowFocus: false,
		staleTime: Infinity,
		keepPreviousData: true,
	})

	return (
		<div className={'flex w-full flex-col p-4'}>
			<LoadingState
				isLoading={isLoading}
				error={error?.message}
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
