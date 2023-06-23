import { z } from 'zod'
import {
	createTRPCRouter,
	publicProcedure,
	protectedProcedure,
} from '@/server/api/trpc'

export const tasksRouter = createTRPCRouter({
	hello: publicProcedure
		.input(z.object({ text: z.string() }))
		.query(({ input }) => {
			return {
				greeting: `Hello ${input.text}`,
			}
		}),

	getAll: publicProcedure.query(async ({ ctx }) => {
		const tasks = await ctx.prisma.task.findMany()
		return tasks
	}),
	getOne: publicProcedure
		.input(z.object({ id: z.string() }))
		.query(async ({ ctx, input }) => {
			const task = ctx.prisma.task.findUnique({
				where: {
					id: input.id,
				},
			})
			return task
		}),
	getSecretMessage: protectedProcedure.query(() => {
		return 'you can now see this secret message!'
	}),
})
