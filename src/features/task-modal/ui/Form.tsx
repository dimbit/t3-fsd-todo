import { zodResolver } from '@hookform/resolvers/zod'
import { Status } from '@prisma/client'
import clsx from 'clsx'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button, Input, TextArea } from '@/shared/ui-kit'

import type { FormData } from '../model'
import { DeleteButton } from './DeleteButton'

type Props = Partial<FormData> & {
	onSubmit: SubmitHandler<FormData>
	onDelete?: (() => void) | null
}

export const Form = ({
	title,
	description,
	status,
	onSubmit,
	onDelete,
}: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			title,
			description,
			status,
		},
		resolver: zodResolver(formSchema),
	})

	const withDeleteButton = !!onDelete

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={'flex w-80 flex-col gap-4'}
		>
			<Input
				placeholder={'Title'}
				autoFocus
				error={errors.title?.message}
				{...register('title')}
			/>
			<TextArea
				rows={10}
				placeholder={'Description'}
				error={errors.description?.message}
				{...register('description')}
			/>
			<select
				className={clsx([
					'cursor-pointer rounded border px-4 py-2 shadow outline-none',
					'border-neutral-200 bg-white dark:border-neutral-500 dark:bg-neutral-700',
					'focus:bg-neutral-100 enabled:hover:bg-neutral-100 focus:dark:bg-neutral-600 enabled:dark:hover:bg-neutral-600',
				])}
				{...register('status')}
			>
				{Object.keys(Status).map((status) => {
					return (
						<option
							key={status}
							value={status}
						>
							{status}
						</option>
					)
				})}
			</select>
			<div
				className={clsx([
					'grid gap-4',
					withDeleteButton && 'grid-cols-1fr-auto',
				])}
			>
				<Button type='submit'>Save</Button>
				{onDelete && <DeleteButton onClick={onDelete} />}
			</div>
		</form>
	)
}

const MAX_TITLE_LENGTH = 150
const MAX_DESCRIPTION_LENGTH = 2500

const StatusEnum = z.nativeEnum(Status)
const formSchema = z
	.object({
		title: z
			.string()
			.trim()
			.min(1, { message: 'Title is required' })
			.max(MAX_TITLE_LENGTH, {
				message: `Too long( Maximum ${MAX_TITLE_LENGTH} chars allowed`,
			}),
		description: z
			.string()
			.trim()
			.max(MAX_TITLE_LENGTH, {
				message: `Too long( Maximum ${MAX_DESCRIPTION_LENGTH} chars allowed`,
			}),
		status: StatusEnum,
	})
	.required()
