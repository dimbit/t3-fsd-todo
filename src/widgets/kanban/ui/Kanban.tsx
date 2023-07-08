import { useMemo } from 'react'
import { Status } from '@prisma/client'

import { useTaskModalStore } from '@/features/task-form'
import { AddTaskButton } from '@/features/task-form/ui'

import { TaskList } from '@/entities/task'

import { api } from '@/shared/api'
import { LoadingState } from '@/shared/ui-kit'

import { arrangeTasksByStatus } from '../utils'

export const Kanban = () => {
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

	const openTaskEditModal = useTaskModalStore.use.openTaskEditingModal()

	return (
		<div
			className={
				'col-start-2 col-end-3 grid grid-flow-row content-start overflow-x-auto'
			}
		>
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
							<TaskList
								key={status}
								tasks={tasksByStatus[status]}
								status={status}
								onClickCard={openTaskEditModal}
								bottomActionSlot={(status) => (
									<AddTaskButton taskInitialData={{ status }}>
										Add
									</AddTaskButton>
								)}
							/>
						)
					})}
				</div>
			</LoadingState>
		</div>
	)
}
