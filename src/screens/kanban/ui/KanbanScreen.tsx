import { TaskModal } from '@/features/task-form'

import { FSDDebugForm } from '@/shared/lib/FSDDebug'

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
