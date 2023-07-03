import type { Status } from '@prisma/client'
import { Prisma } from '@prisma/client'
import { TRPCError } from '@trpc/server'

import type {
	CreateOneInput,
	GetOneInput,
	UpdateOneInput,
} from '../schema/tasks'
import type { Context } from '../trpc'

const isHandledPrismaError = (
	error: any,
): error is
	| Prisma.PrismaClientKnownRequestError
	| Prisma.PrismaClientUnknownRequestError
	| Prisma.PrismaClientInitializationError
	| Prisma.PrismaClientValidationError => {
	return (
		error instanceof Prisma.PrismaClientKnownRequestError ||
		error instanceof Prisma.PrismaClientUnknownRequestError ||
		error instanceof Prisma.PrismaClientInitializationError ||
		error instanceof Prisma.PrismaClientValidationError
	)
}

export const getAll = async ({ ctx }: { ctx: Context }) => {
	try {
		const userId = ctx.session?.user.id
		const tasks = await ctx.prisma.task.findMany({
			where: {
				userId,
			},
		})
		return tasks
	} catch (error) {
		if (isHandledPrismaError(error)) {
			// TODO: handle errors separately, using prisma's errors code
			// https://www.prisma.io/docs/reference/api-reference/error-reference#error-codes
			throw new TRPCError({
				code: 'INTERNAL_SERVER_ERROR',
				message: error.message,
			})
		}
		throw error
	}
}

export const getOne = async ({
	input,
	ctx,
}: {
	input: GetOneInput
	ctx: Context
}) => {
	try {
		const userId = ctx.session?.user.id
		const task = await ctx.prisma.task.findFirst({
			where: {
				id: input.id,
				userId,
			},
		})

		if (!task) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: 'Task with that ID not found',
			})
		}

		return task
	} catch (error) {
		if (isHandledPrismaError(error)) {
			throw new TRPCError({
				code: 'INTERNAL_SERVER_ERROR',
				message: error.message,
			})
		}
		throw error
	}
}

export const updateOne = async ({
	input,
	ctx,
}: {
	input: UpdateOneInput
	ctx: Context
}) => {
	try {
		const { id, ...data } = input

		const result = await ctx.prisma.task.update({
			where: {
				id,
			},
			data,
		})
		return result
	} catch (error) {
		if (isHandledPrismaError(error)) {
			throw new TRPCError({
				code: 'INTERNAL_SERVER_ERROR',
				message: error.message,
			})
		}
		throw error
	}
}

export const createOne = async ({
	input,
	ctx,
}: {
	input: CreateOneInput
	ctx: Context
}) => {
	try {
		const userId = ctx.session?.user.id
		await ctx.prisma.task.create({
			data: {
				title: input.title,
				description: input.description,
				status: input.status as Status,
				user: {
					connect: {
						id: userId,
					},
				},
			},
			include: {
				user: true,
			},
		})
		return {
			...input,
			userId,
		}
	} catch (error) {
		if (isHandledPrismaError(error)) {
			throw new TRPCError({
				code: 'INTERNAL_SERVER_ERROR',
				message: error.message,
			})
		}
		throw error
	}
}
