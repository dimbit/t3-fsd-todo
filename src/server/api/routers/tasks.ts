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
	updateOne: protectedProcedure
		.input(
			z.object({
				id: z.string(),
				title: z.string(),
				description: z.string().optional(),
				statusId: z.string().optional(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			const updatedTask = {
				title: input.title,
				description: input.description,
			}

			const result = await ctx.prisma.task.update({
				where: {
					id: input.id,
				},
				data: updatedTask,
			})
			return result
		}),
	createOne: protectedProcedure
		.input(
			z.object({
				title: z.string(),
				description: z.string().optional(),
				statusId: z.string().optional(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			const newTask = {
				title: input.title,
				description: input.description,
				status: {
					connect: {
						id: input.statusId,
					},
				},
				user: {
					connect: {
						id: ctx.session.user.id,
					},
				},
			}
			await ctx.prisma.task.create({
				data: newTask,
				include: {
					status: true,
					user: true,
				},
			})
			return {
				...input,
				userId: ctx.session.user.id,
			}
		}),
})
