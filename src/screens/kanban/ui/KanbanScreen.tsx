import { Layout } from '@/widgets/layout'
import { TasksList } from '@/widgets/tasks-list'
import { api } from '@/shared/api'
import { useMemo } from 'react'
import { arrangeTasksByStatus } from '../model'

export const KanbanScreen = () => {
	const {
		data: tasks,
		isLoading,
		error,
	} = api.tasks.getAll.useQuery(undefined, {
		retry: false,
		refetchOnWindowFocus: false,
		staleTime: Infinity,
		keepPreviousData: true,
	})

	const tasksByStatus = useMemo(
		() => arrangeTasksByStatus(tasks ?? []),
		[tasks],
	)

	return (
		<Layout>
			<div className={'grid grid-flow-col'}>
				{Object.entries(tasksByStatus).map(([status, tasks]) => {
					return (
						<>
							<TasksList
								key={status}
								tasks={tasks}
								isLoading={isLoading}
								error={error?.message}
								status={status}
							/>
						</>
					)
				})}
			</div>
		</Layout>
	)
}
