import type { Task } from '@prisma/client'

export type FormData = Pick<Task, 'title' | 'statusId'> &
	Partial<Pick<Task, 'description'>>
