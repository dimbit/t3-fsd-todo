import Link from 'next/link'
import clsx from 'clsx'

import { ROUTES } from '@/shared/routes'

import KanbanIcon from '@/images/icons/kanban.svg'
import ListIcon from '@/images/icons/list.svg'

const navigation = [
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

export const NavigationBar = () => {
	return (
		<ul className={'grid grid-flow-row content-start'}>
			{navigation.map(({ name, Icon, href }) => {
				return (
					<li key={name}>
						<Link
							href={href}
							shallow
							passHref
							className={clsx([
								'grid w-full grid-flow-col justify-start gap-2 rounded px-2 py-1 text-neutral-500',
								'hover:bg-neutral-100 hover:text-current',
								'dark:text-neutral-300 dark:hover:bg-neutral-600 dark:hover:text-neutral-100',
							])}
						>
							{<Icon className={'stroke-current'} />}
							{name}
						</Link>
					</li>
				)
			})}
		</ul>
	)
}
