import type { Task } from '@prisma/client'

export type FormData = Pick<Task, 'title'> & Partial<Pick<Task, 'description'>>
