import { Button } from '@/shared/ui-kit'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import type { SubmitHandler } from 'react-hook-form'
import type { FormData } from '../model'
import clsx from 'clsx'

const mockedStatuses = [
	{
		id: 'cljcrfefo0002yr771kybno8i',
		name: 'Done',
	},
	{
		id: 'cljcrfefp0003yr7749il58pb',
		name: 'To do',
	},
	{
		id: 'cljcrhaek0004yr77ancltbc0',
		name: 'In progress',
	},
]
type Props = Partial<FormData> & {
	onSubmit: SubmitHandler<FormData>
}

export const Form = ({ title, description, statusId, onSubmit }: Props) => {
	const { register, handleSubmit } = useForm<FormData>({
		defaultValues: {
			title: title,
			description: description,
			statusId: statusId,
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
				{...register('statusId')}
			>
				{mockedStatuses.map((status) => {
					return (
						<option
							key={status.id}
							value={status.id}
						>
							{status.name}
						</option>
					)
				})}
			</select>
			<Button type='submit'>Save</Button>
		</form>
	)
}

const formSchema = z
	.object({
		title: z.string(),
		description: z.string().optional(),
		statusId: z.string(),
	})
	.required()
