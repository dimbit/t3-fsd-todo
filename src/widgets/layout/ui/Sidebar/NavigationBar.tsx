import Link from 'next/link'
import { ROUTES } from '@/shared/routes'

export const NavigationBar = () => {
	return (
		<ul>
			<li>
				<Link
					href={ROUTES.kanban.calcUrl()}
					shallow
					passHref
				>
					Kanban
				</Link>
			</li>
			<li>
				<Link
					href={ROUTES.list.calcUrl()}
					shallow
					passHref
				>
					List
				</Link>
			</li>
		</ul>
	)
}
