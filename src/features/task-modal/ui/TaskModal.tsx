import { Modal } from '@/entities/modal'

import { api } from '@/shared/api'

import type { FormData } from '../model'
import { useTaskModalStore } from '../model'
import { Form } from './Form'

export const TaskModal = () => {
	const { isOpen, closeModal, initialTaskData, mode } = useTaskModalStore()

	const trpcUtils = api.useContext()

	const taskEditingMutation = api.tasks.updateOne.useMutation({
		onSuccess: async () => {
			await trpcUtils.tasks.getAll.invalidate()
			closeModal()
		},
	})
	const taskCreationMutation = api.tasks.createOne.useMutation({
		onSuccess: async () => {
			await trpcUtils.tasks.getAll.invalidate()
			closeModal()
		},
	})

	const onSubmitEditing = (formData: FormData) => {
		if (!initialTaskData?.id) return
		taskEditingMutation.mutate({
			id: initialTaskData.id,
			title: formData.title,
			description: formData.description ?? undefined,
			status: formData.status,
		})
	}

	const onSubmitCreation = (formData: FormData) => {
		taskCreationMutation.mutate({
			title: formData.title,
			description: formData.description ?? undefined,
			status: formData.status,
		})
	}

	return (
		<Modal
			isOpen={isOpen}
			onClose={closeModal}
		>
			<Form
				title={initialTaskData?.title}
				description={initialTaskData?.description}
				status={initialTaskData?.status}
				onSubmit={mode === 'editing' ? onSubmitEditing : onSubmitCreation}
			/>
		</Modal>
	)
}
