import { useMemo } from 'react'
import { Status } from '@prisma/client'

import { TaskModal } from '@/features/task-modal'

import { api } from '@/shared/api'
import { LoadingState } from '@/shared/ui-kit'

import { MainLayout } from '@/widgets/layouts'
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
			<MainLayout>
				<div className={'grid grid-flow-row content-start overflow-x-auto'}>
					<div
						className={
							'sticky top-0 z-10 grid w-full grid-cols-kanban justify-items-center gap-4 bg-neutral-100 p-4 dark:bg-neutral-800'
						}
					>
						{Object.values(Status).map((status) => {
							return (
								<h2
									key={status}
									className={'px-4 font-bold'}
								>
									{status}
								</h2>
							)
						})}
					</div>
					<LoadingState
						isLoading={isLoading}
						error={error?.message}
					>
						<div className={'grid grid-cols-kanban gap-4 px-4 pb-4'}>
							{Object.values(Status).map((status) => {
								return (
									<TasksList
										key={status}
										tasks={tasksByStatus[status]}
										status={status}
									/>
								)
							})}
						</div>
					</LoadingState>
				</div>
			</MainLayout>
			<TaskModal />
		</>
	)
}
