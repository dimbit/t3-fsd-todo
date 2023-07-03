import { Status } from '@prisma/client'
import { z } from 'zod'

export const getOneSchema = z.object({
	id: z.string(),
})

const StatusEnum = z.nativeEnum(Status)

export const updateOneSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string().optional(),
	status: StatusEnum,
})

export const createOneSchema = z.object({
	title: z.string(),
	description: z.string().optional(),
	status: StatusEnum,
})

export type GetOneInput = z.TypeOf<typeof getOneSchema>
export type UpdateOneInput = z.TypeOf<typeof updateOneSchema>
export type CreateOneInput = z.TypeOf<typeof createOneSchema>
