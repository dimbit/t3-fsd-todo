import KanbanIcon from '@/shared/assets/icons/kanban.svg'
import { ROUTES } from '@/shared/lib'
import ListIcon from '@/shared/ui/icons/list.svg'

export const navigation = [
	{
		name: 'Kanban',
		href: ROUTES.kanban.calcUrl(),
		Icon: KanbanIcon as React.FC<React.SVGProps<SVGSVGElement>>,
	},
	{
		name: 'List',
		href: ROUTES.list.calcUrl(),
		Icon: ListIcon as React.FC<React.SVGProps<SVGSVGElement>>,
	},
]
