import { useTaskModalStore } from '@/features/task-modal'

import { Button } from '@/shared/ui-kit/Button'

export const Header = () => {
	const openTaskCreationModal = useTaskModalStore.use.openTaskCreationModal()

	const handleClickAddTask = () => {
		openTaskCreationModal({})
	}

	return (
		<div className={'flex h-14 w-full items-center justify-end px-4'}>
			<Button onClick={handleClickAddTask}>Add task</Button>
		</div>
	)
}
