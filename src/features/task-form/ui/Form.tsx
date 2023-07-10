import { zodResolver } from '@hookform/resolvers/zod'
import { Status } from '@prisma/client'
import clsx from 'clsx'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button, Input, Select, TextArea } from '@/shared/ui'

import type { FormData } from '../model'
import { DeleteButton } from './DeleteButton'

type Props = Partial<FormData> & {
	onSubmit: SubmitHandler<FormData>
	onDelete: SubmitHandler<FormData>
	withDeleteButton?: boolean
	className?: string
} & { [key: `data-${string}`]: string | undefined }

export const Form = ({
	title,
	description,
	status,
	onSubmit,
	onDelete,
	withDeleteButton,
	className,
	...dataAttributes
}: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormData>({
		defaultValues: {
			title,
			description,
			status,
		},
		resolver: zodResolver(formSchema),
	})

	const statusOptions = Object.keys(Status).map((status) => {
		return {
			id: status,
			name: status,
		}
	})

	const handleDelete = handleSubmit(onDelete)

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={clsx([
				'flex h-full w-full flex-col justify-between gap-4 sm:w-80',
				className,
			])}
			{...dataAttributes}
		>
			<div className={'flex w-full flex-col gap-4'}>
				<Input
					placeholder={'Title'}
					autoFocus
					error={errors.title?.message}
					disabled={isSubmitting}
					{...register('title')}
				/>
				<TextArea
					rows={10}
					placeholder={'Description'}
					error={errors.description?.message}
					disabled={isSubmitting}
					{...register('description')}
				/>
				<Select
					{...register('status')}
					disabled={isSubmitting}
					options={statusOptions}
				/>
			</div>
			<div
				className={clsx([
					'grid gap-4',
					withDeleteButton && 'grid-cols-1fr-auto',
				])}
			>
				<Button
					type='submit'
					disabled={isSubmitting}
				>
					Save
				</Button>
				{withDeleteButton && (
					<DeleteButton
						disabled={isSubmitting}
						onClick={handleDelete}
					/>
				)}
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
