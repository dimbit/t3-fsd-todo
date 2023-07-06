import type { Task } from '@prisma/client'

export type FormData = Pick<Task, 'title' | 'status'> &
	Partial<Pick<Task, 'description'>>
