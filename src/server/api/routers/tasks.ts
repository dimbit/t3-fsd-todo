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

	getAll: protectedProcedure.query(async ({ ctx }) => {
		const userId = ctx.session.user.id
		const tasks = await ctx.prisma.task.findMany({
			where: {
				userId,
			},
		})
		return tasks
	}),
	getOne: protectedProcedure
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
