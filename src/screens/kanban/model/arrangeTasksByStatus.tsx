import type { Task, Status } from '@prisma/client'

type TaskWithStatus = Task & {
	status: Status
}

export const arrangeTasksByStatus = (tasks: TaskWithStatus[]) => {
	return (
		tasks?.reduce<{ status: Status; tasks: Task[] }[]>((accumulator, task) => {
			const status = task.status
			const existingEntityIndex = accumulator.findIndex(
				(entity) => entity.status.id === status.id,
			)
			if (existingEntityIndex !== -1) {
				accumulator[existingEntityIndex]?.tasks.push(task)
			} else {
				accumulator.push({
					status,
					tasks: [task],
				})
			}
			return accumulator
		}, []) ?? []
	)
}
