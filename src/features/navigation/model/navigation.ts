import { ROUTES } from '@/shared/routes'

import KanbanIcon from '@/images/icons/kanban.svg'
import ListIcon from '@/images/icons/list.svg'

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
