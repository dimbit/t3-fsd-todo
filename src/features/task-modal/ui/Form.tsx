import { Button } from '@/shared/ui-kit'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import type { SubmitHandler } from 'react-hook-form'
import type { FormData } from '../model'

type Props = Partial<FormData> & {
	onSubmit: SubmitHandler<FormData>
}

export const Form = ({ title, description, onSubmit }: Props) => {
	const { register, handleSubmit } = useForm<FormData>({
		defaultValues: {
			title: title,
			description: description,
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
			<Button type='submit'>Save</Button>
		</form>
	)
}

const formSchema = z
	.object({
		title: z.string(),
		description: z.string().optional(),
	})
	.required()
