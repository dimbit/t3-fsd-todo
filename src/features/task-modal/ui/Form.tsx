import { Button } from '@/shared/ui-kit'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import type { SubmitHandler } from 'react-hook-form'
import type { FormData } from '../model'
import clsx from 'clsx'
import { Status } from '@prisma/client'

type Props = Partial<FormData> & {
	onSubmit: SubmitHandler<FormData>
}

export const Form = ({ title, description, status, onSubmit }: Props) => {
	const { register, handleSubmit } = useForm<FormData>({
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
			<input
				className={clsx([
					'rounded border px-4 py-2 shadow outline-none',
					'border-neutral-200 bg-white dark:border-neutral-500 dark:bg-neutral-700',
					'focus:bg-neutral-100 enabled:hover:bg-neutral-100 focus:dark:bg-neutral-600 enabled:dark:hover:bg-neutral-600',
				])}
				{...register('title')}
			/>
			<textarea
				className={clsx([
					'rounded border px-4 py-2 shadow outline-none',
					'border-neutral-200 bg-white dark:border-neutral-500 dark:bg-neutral-700',
					'focus:bg-neutral-100 enabled:hover:bg-neutral-100 focus:dark:bg-neutral-600 enabled:dark:hover:bg-neutral-600',
				])}
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
			<Button type='submit'>Save</Button>
		</form>
	)
}

const StatusEnum = z.nativeEnum(Status)
const formSchema = z
	.object({
		title: z.string(),
		description: z.string().optional(),
		status: StatusEnum,
	})
	.required()
