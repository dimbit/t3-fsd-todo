import KanbanIcon from '@/shared/assets/icons/kanban.svg'
import ListIcon from '@/shared/assets/icons/list.svg'
import { ROUTES } from '@/shared/lib'

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
