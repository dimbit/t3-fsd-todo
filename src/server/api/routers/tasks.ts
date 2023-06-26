import { z } from 'zod'
import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'

export const tasksRouter = createTRPCRouter({
	getAll: protectedProcedure.query(async ({ ctx }) => {
		const userId = ctx.session.user.id
		const tasks = await ctx.prisma.task.findMany({
			where: {
				userId,
			},
			include: {
				status: true,
			},
		})
		return tasks
	}),
	getOne: protectedProcedure
		.input(z.object({ id: z.string() }))
		.query(async ({ ctx, input }) => {
			const userId = ctx.session.user.id
			const task = ctx.prisma.task.findFirst({
				where: {
					id: input.id,
					userId: userId,
				},
			})
			return task
		}),
})
