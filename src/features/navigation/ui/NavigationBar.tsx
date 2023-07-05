import Link from 'next/link'
import clsx from 'clsx'

import { navigation } from '../model/navigation'

type Props = {
	isCollapsed?: boolean
}

export const NavigationBar = ({ isCollapsed }: Props) => {
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
							{<Icon className={clsx(['stroke-current', isCollapsed && ''])} />}
							{!isCollapsed && name}
						</Link>
					</li>
				)
			})}
		</ul>
	)
}
