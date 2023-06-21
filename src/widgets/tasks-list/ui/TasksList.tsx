import { TaskCard } from '@/entities/task-card'

const mockTasks = [
	{
		id: 'task-1',
		title: 'Task 1',
		description: 'A simple task example. A simple task example.',
	},
	{
		id: 'task-2',
		title: 'Task 2',
		description: 'A simple task example. A simple task example.',
	},
	{
		id: 'task-3',
		title: 'Task 3',
		description: 'A simple task example. A simple task example.',
	},
	{
		id: 'task-4',
		title: 'Task 4',
		description: 'A simple task example. A simple task example.',
	},
]
export const TasksList = () => {
	return (
		<div className={'flex flex-col gap-4 p-4'}>
			{mockTasks.map((task) => {
				return (
					<TaskCard
						{...task}
						key={task.id}
					/>
				)
			})}
		</div>
	)
}
