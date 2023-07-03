import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'

import { createOne, getAll, getOne, updateOne } from '../controllers/tasks'
import { createOneSchema, getOneSchema, updateOneSchema } from '../schema/tasks'

export const tasksRouter = createTRPCRouter({
	getAll: protectedProcedure.query(getAll),
	getOne: protectedProcedure.input(getOneSchema).query(getOne),
	updateOne: protectedProcedure.input(updateOneSchema).mutation(updateOne),
	createOne: protectedProcedure.input(createOneSchema).mutation(createOne),
})
