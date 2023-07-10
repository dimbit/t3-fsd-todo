import { Modal } from '@/entities/modal'

import { useFSDLayerDebug } from '@/shared/lib/FSDDebug'

import { useTaskFormHandlers, useTaskModalStore } from '../model'
import { Form } from './Form'

export const TaskModal = () => {
	const isOpen = useTaskModalStore.use.isOpen()
	const closeModal = useTaskModalStore.use.closeModal()
	const mode = useTaskModalStore.use.mode?.()
	const taskInitialData = useTaskModalStore.use.taskInitialData()

	const { onSubmitEditing, onSubmitCreation, onDeleteTask } =
		useTaskFormHandlers()

	const { className: formDebugClassName, ...formDataAttributes } =
		useFSDLayerDebug('features', Form.name)
	const { className: modalClassName, ...modalDataAttributes } =
		useFSDLayerDebug('entities', Modal.name)

	return (
		<Modal
			isOpen={isOpen}
			onClose={closeModal}
			className={modalClassName}
			{...modalDataAttributes}
		>
			<Form
				className={formDebugClassName}
				title={taskInitialData?.title}
				description={taskInitialData?.description}
				status={taskInitialData?.status}
				onSubmit={mode === 'editing' ? onSubmitEditing : onSubmitCreation}
				onDelete={onDeleteTask}
				withDeleteButton={mode === 'editing'}
				{...formDataAttributes}
			/>
		</Modal>
	)
}
