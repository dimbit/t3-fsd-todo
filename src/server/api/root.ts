import { createTRPCRouter } from '@/server/api/trpc'

import { tasksRouter } from './routers'

export const appRouter = createTRPCRouter({
	tasks: tasksRouter,
})

export type AppRouter = typeof appRouter
