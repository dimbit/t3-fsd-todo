import { api } from '@/shared/api'

import { useTaskModalStore } from './taskModalStore'
import type { FormData } from './types'

export const useTaskFormHandlers = () => {
	const closeModal = useTaskModalStore.use.closeModal()
	const taskInitialData = useTaskModalStore.use.taskInitialData()
	const trpcUtils = api.useContext()

	const taskEditingMutation = api.tasks.updateOne.useMutation({
		onSuccess: async () => {
			await trpcUtils.tasks.getAll.invalidate()
			closeModal()
		},
	})

	const taskCreationMutation = api.tasks.createOne.useMutation({
		onSuccess: (newTask) => {
			trpcUtils.tasks.getAll.setData(undefined, (prevTasks) => {
				closeModal()
				if (!prevTasks) {
					return [newTask]
				}
				return [...prevTasks, newTask]
			})
		},
	})

	const taskDeletionMutation = api.tasks.deleteOne.useMutation({
		onSuccess: ({ id: deletedTaskId }) => {
			trpcUtils.tasks.getAll.setData(undefined, (prevTasks) => {
				closeModal()
				if (!prevTasks) {
					return prevTasks
				}
				return prevTasks.filter((task) => task.id !== deletedTaskId)
			})
		},
	})

	const onSubmitEditing = (formData: FormData) => {
		if (!taskInitialData?.id) return
		return taskEditingMutation.mutateAsync({
			id: taskInitialData.id,
			title: formData.title,
			description: formData.description ?? undefined,
			status: formData.status,
		})
	}

	const onSubmitCreation = (formData: FormData) => {
		return taskCreationMutation.mutateAsync({
			title: formData.title,
			description: formData.description ?? undefined,
			status: formData.status,
		})
	}

	const onDeleteTask = () => {
		if (!taskInitialData?.id) return
		return taskDeletionMutation.mutateAsync({
			id: taskInitialData.id,
		})
	}

	return {
		onSubmitEditing,
		onSubmitCreation,
		onDeleteTask,
	}
}
