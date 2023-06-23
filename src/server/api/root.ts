import { tasksRouter } from '@/server/api/routers/tasks'
import { createTRPCRouter } from '@/server/api/trpc'

export const appRouter = createTRPCRouter({
	tasks: tasksRouter,
})

export type AppRouter = typeof appRouter
