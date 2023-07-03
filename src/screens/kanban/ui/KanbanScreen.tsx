import { useMemo } from 'react'
import { Status } from '@prisma/client'

import { TaskModal } from '@/features/task-modal'

import { api } from '@/shared/api'

import { Layout } from '@/widgets/layout'
import { TasksList } from '@/widgets/tasks-list'

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
		<>
			<Layout>
				<div className={'grid grid-flow-col gap-4 overflow-auto p-4'}>
					{Object.values(Status).map((status) => {
						return (
							<TasksList
								key={status}
								tasks={tasksByStatus[status]}
								isLoading={isLoading}
								error={error?.message}
								status={status}
							/>
						)
					})}
				</div>
			</Layout>
			<TaskModal />
		</>
	)
}
