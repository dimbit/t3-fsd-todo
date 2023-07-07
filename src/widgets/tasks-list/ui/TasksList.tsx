import { memo } from 'react'
import type { Status, Task } from '@prisma/client'

import { TaskCard } from '@/entities/task'

type Props = {
	tasks: Task[]
	status: Status
	onClickCard: React.ComponentProps<typeof TaskCard>['onClick']
	bottomActionSlot: (status: Status) => React.ReactNode
}

export const TasksList = memo(
	({ tasks = [], status, onClickCard, bottomActionSlot }: Props) => {
		return (
			<div className={'flex flex-col'}>
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

TasksList.displayName = 'TasksList'
