import { memo } from 'react'
import type { Status, Task } from '@prisma/client'
import clsx from 'clsx'

import { TaskCard } from './TaskCard'

type Props = {
	tasks: Task[]
	status: Status
	onClickCard: React.ComponentProps<typeof TaskCard>['onClick']
	bottomActionSlot: (status: Status) => React.ReactNode
	className?: string
}

export const TaskList = memo(
	({ tasks = [], status, onClickCard, bottomActionSlot, className }: Props) => {
		return (
			<div className={clsx(['relative mt-1 flex flex-col', className])}>
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
