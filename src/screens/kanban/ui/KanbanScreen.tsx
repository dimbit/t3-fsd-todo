import { FSDDebugForm } from '@/features/fsd-debug'
import { TaskModal } from '@/features/task-form'

import { Kanban } from '@/widgets/kanban'
import { MainLayout } from '@/widgets/layouts'

export const KanbanScreen = () => {
	return (
		<>
			<MainLayout>
				<Kanban />
			</MainLayout>
			<FSDDebugForm />
			<TaskModal />
		</>
	)
}
