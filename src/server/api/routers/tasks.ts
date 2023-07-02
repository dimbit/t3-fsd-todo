import { z } from 'zod'
import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'
import { Status } from '@prisma/client'

const StatusEnum = z.nativeEnum(Status)

export const tasksRouter = createTRPCRouter({
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
			const userId = ctx.session.user.id
			const task = ctx.prisma.task.findFirst({
				where: {
					id: input.id,
					userId,
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
				status: StatusEnum,
			}),
		)
		.mutation(async ({ ctx, input }) => {
			const { id, ...data } = input

			const result = await ctx.prisma.task.update({
				where: {
					id,
				},
				data,
			})
			return result
		}),
	createOne: protectedProcedure
		.input(
			z.object({
				title: z.string(),
				description: z.string().optional(),
				status: StatusEnum,
			}),
		)
		.mutation(async ({ ctx, input }) => {
			await ctx.prisma.task.create({
				data: {
					title: input.title,
					description: input.description,
					status: input.status as Status,
					user: {
						connect: {
							id: ctx.session.user.id,
						},
					},
				},
				include: {
					user: true,
				},
			})
			return {
				...input,
				userId: ctx.session.user.id,
			}
		}),
})
