import { Modal } from '@/entities/modal'

import { useTaskFormHandlers, useTaskModalStore } from '../model'
import { Form } from './Form'

export const TaskModal = () => {
	const isOpen = useTaskModalStore.use.isOpen()
	const closeModal = useTaskModalStore.use.closeModal()
	const mode = useTaskModalStore.use.mode?.()
	const initialTaskData = useTaskModalStore.use.initialTaskData()

	const { onSubmitEditing, onSubmitCreation, onDeleteTask } =
		useTaskFormHandlers()

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
				onDelete={mode === 'editing' ? onDeleteTask : null}
			/>
		</Modal>
	)
}
