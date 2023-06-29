import { Modal } from '@/entities/modal'
import { useTaskModalStore } from '../model'
import { api } from '@/shared/api'
import { Form } from './Form'
import type { FormData } from '../model'

export const TaskModal = () => {
	const { taskId, isOpen, closeModal } = useTaskModalStore()

	const trpcUtils = api.useContext()
	const allTasks = trpcUtils.tasks.getAll.getData()
	const task = allTasks?.find((entity) => entity.id === taskId)

	const updateTaskMutation = api.tasks.updateOne.useMutation({
		onSuccess: async () => {
			await trpcUtils.tasks.getAll.invalidate()
			closeModal()
		},
	})

	const onSubmitUpdating = (formData: FormData) => {
		if (!taskId) return
		updateTaskMutation.mutate({
			id: taskId,
			title: formData.title,
			description: formData.description ?? undefined,
		})
	}

	if (!task) {
		return null
	}

	return (
		<Modal
			isOpen={isOpen}
			onClose={closeModal}
		>
			<Form
				title={task.title}
				description={task.description}
				onSubmit={onSubmitUpdating}
			/>
		</Modal>
	)
}
