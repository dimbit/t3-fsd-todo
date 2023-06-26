import type { Task, Status } from '@prisma/client'

type TaskWithStatus = Task & {
	status: Status
}
export const arrangeTasksByStatus = (tasks: TaskWithStatus[]) => {
	return (
		tasks?.reduce<{ [key: string]: Task[] }>((accumulator, task) => {
			const status = task.status.name
			if (!accumulator[status]) {
				accumulator[status] = [task]
			} else {
				accumulator[status]?.push(task)
			}
			return accumulator
		}, {}) ?? {}
	)
}
