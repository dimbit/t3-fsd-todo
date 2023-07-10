import { useFSDLayerDebug } from '@/features/fsd-debug'

import { Modal } from '@/entities/modal'

import { useTaskFormHandlers, useTaskModalStore } from '../model'
import { TaskForm } from './TaskForm'

export const TaskFormModal = () => {
	const isOpen = useTaskModalStore.use.isOpen()
	const closeModal = useTaskModalStore.use.closeModal()
	const mode = useTaskModalStore.use.mode?.()
	const taskInitialData = useTaskModalStore.use.taskInitialData()

	const { onSubmitEditing, onSubmitCreation, onDeleteTask } =
		useTaskFormHandlers()

	const { className: taskFormDebugClassName, ...taskFormDataAttributes } =
		useFSDLayerDebug('features', TaskForm.name)
	const { className: modalClassName, ...modalDataAttributes } =
		useFSDLayerDebug('entities', Modal.name)

	return (
		<Modal
			isOpen={isOpen}
			onClose={closeModal}
			className={modalClassName}
			{...modalDataAttributes}
		>
			<TaskForm
				className={taskFormDebugClassName}
				title={taskInitialData?.title}
				description={taskInitialData?.description}
				status={taskInitialData?.status}
				onSubmit={mode === 'editing' ? onSubmitEditing : onSubmitCreation}
				onDelete={onDeleteTask}
				withDeleteButton={mode === 'editing'}
				{...taskFormDataAttributes}
			/>
		</Modal>
	)
}
