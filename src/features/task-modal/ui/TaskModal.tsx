import { Modal } from '@/entities/modal'
import { useTaskModalStore } from '../model'
import { api } from '@/shared/api'
import { Button } from '@/shared/ui-kit'

export const TaskModal = () => {
	const { taskId, isOpen, closeModal } = useTaskModalStore()

	const trpcUtils = api.useContext()
	const allTasks = trpcUtils.tasks.getAll.getData()
	const task = allTasks?.find((entity) => entity.id === taskId)

	if (!task) {
		return null
	}

	return (
		<Modal
			isOpen={isOpen}
			onClose={closeModal}
		>
			<form
				onSubmit={console.log}
				className={'flex flex-col gap-2'}
			>
				{task.title}
				<input
					name='title'
					value={task.title}
				/>
				<textarea
					name='description'
					value={task.description ?? ''}
				/>
				<Button type='submit'>Save</Button>
			</form>
		</Modal>
	)
}
