import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'
import { getAll, getOne, updateOne, createOne } from '../controllers/tasks'
import { getOneSchema, updateOneSchema, createOneSchema } from '../schema/tasks'

export const tasksRouter = createTRPCRouter({
	getAll: protectedProcedure.query(getAll),
	getOne: protectedProcedure.input(getOneSchema).query(getOne),
	updateOne: protectedProcedure.input(updateOneSchema).mutation(updateOne),
	createOne: protectedProcedure.input(createOneSchema).mutation(createOne),
})
