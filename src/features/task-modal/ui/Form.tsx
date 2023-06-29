import { Button } from '@/shared/ui-kit'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import type { SubmitHandler } from 'react-hook-form'
import type { FormData } from '../model'

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
			className={'flex flex-col gap-2'}
		>
			<input {...register('title')} />
			<textarea {...register('description')} />
			<select {...register('statusId')}>
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
