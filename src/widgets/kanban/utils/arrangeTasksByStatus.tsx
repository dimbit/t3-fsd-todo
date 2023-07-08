import { Status, type Task } from '@prisma/client'

type TaskWithStatus = Task & {
	status: Status
}

export const arrangeTasksByStatus = (tasks: TaskWithStatus[]) => {
	type Result = { [key in Status]: Task[] }
	const result = {} as Result

	Object.values(Status).forEach((status) => {
		result[status] = tasks?.filter((task) => task.status === status) ?? []
	})

	return result
}
