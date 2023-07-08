import { memo } from 'react'
import type { Status, Task } from '@prisma/client'
import clsx from 'clsx'

import { useFSDLayerDebug } from '@/shared/lib/FSDDebug'

import { TaskCard } from './TaskCard'

type Props = {
	tasks: Task[]
	status: Status
	onClickCard: React.ComponentProps<typeof TaskCard>['onClick']
	bottomActionSlot: (status: Status) => React.ReactNode
}

export const TaskList = memo(
	({ tasks = [], status, onClickCard, bottomActionSlot }: Props) => {
		const { className: debugClassName, ...rest } = useFSDLayerDebug(
			'entities',
			TaskList.displayName ?? '',
		)

		return (
			<div
				{...rest}
				className={clsx(['relative mt-1 flex flex-col', debugClassName])}
			>
				<div className={'flex flex-col gap-2'}>
					{tasks?.map((task) => {
						return (
							<TaskCard
								{...task}
								key={task.id}
								onClick={onClickCard}
							/>
						)
					})}
				</div>
				<div className={'sticky bottom-4 mt-4 flex w-full flex-col'}>
					{bottomActionSlot(status)}
				</div>
			</div>
		)
	},
)

TaskList.displayName = 'TaskList'
