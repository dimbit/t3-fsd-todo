import { useMemo } from 'react'
import { Status } from '@prisma/client'
import clsx from 'clsx'

import { useTaskModalStore } from '@/features/task-form'
import { AddTaskButton } from '@/features/task-form'

import { TaskList } from '@/entities/task'

import { api } from '@/shared/api'
import { useFSDLayerDebug } from '@/shared/lib/FSDDebug'
import { LoadingState } from '@/shared/ui'

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

	const { className: kanbanDebugClassName, ...kanbanDataAttributes } =
		useFSDLayerDebug('widgets', Kanban.name)
	const { className: taskListDebugClassName, ...taskListDataAttributes } =
		useFSDLayerDebug('entities', TaskList.name)
	const {
		className: addTaskButtonDebugClassName,
		...addTaskButtonDataAttributes
	} = useFSDLayerDebug('features', AddTaskButton.displayName ?? '')

	return (
		<div
			{...kanbanDataAttributes}
			className={clsx([
				'col-start-2 col-end-3 m-1 grid grid-flow-row content-start overflow-x-auto',
				kanbanDebugClassName,
			])}
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
								className={taskListDebugClassName}
								{...taskListDataAttributes}
								bottomActionSlot={(status) => (
									<AddTaskButton
										{...addTaskButtonDataAttributes}
										className={addTaskButtonDebugClassName}
										status={status}
									>
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
