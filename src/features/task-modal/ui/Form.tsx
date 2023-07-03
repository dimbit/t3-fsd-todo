import { zodResolver } from '@hookform/resolvers/zod'
import { Status } from '@prisma/client'
import clsx from 'clsx'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/shared/ui-kit'

import type { FormData } from '../model'
import { DeleteButton } from './DeleteButton'

type Props = Partial<FormData> & {
	onSubmit: SubmitHandler<FormData>
	onDelete: () => void
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

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={'flex w-80 flex-col gap-4'}
		>
			<label className={'relative pb-7'}>
				<input
					className={clsx([
						'w-full rounded border px-4 py-2 shadow outline-none',
						'border-neutral-200 bg-white dark:border-neutral-500 dark:bg-neutral-700',
						'focus:bg-neutral-100 enabled:hover:bg-neutral-100 focus:dark:bg-neutral-600 enabled:dark:hover:bg-neutral-600',
					])}
					placeholder={'Title'}
					{...register('title')}
				/>
				{errors.title ? (
					<span className={'absolute bottom-0 left-0 text-red-400'}>
						{errors.title.message}
					</span>
				) : null}
			</label>
			<label className={'relative pb-7'}>
				<textarea
					className={clsx([
						'w-full rounded border px-4 py-2 shadow outline-none',
						'border-neutral-200 bg-white dark:border-neutral-500 dark:bg-neutral-700',
						'focus:bg-neutral-100 enabled:hover:bg-neutral-100 focus:dark:bg-neutral-600 enabled:dark:hover:bg-neutral-600',
					])}
					rows={10}
					placeholder={'Description'}
					{...register('description')}
				/>
				{errors.description ? (
					<span className={'absolute bottom-0 left-0 text-red-400'}>
						{errors.description.message}
					</span>
				) : null}
			</label>
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
			<div className={'grid grid-cols-1fr-auto gap-4'}>
				<Button type='submit'>Save</Button>
				<DeleteButton onClick={onDelete} />
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
