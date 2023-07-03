import type { Status } from '@prisma/client'

import { Card } from '@/shared/ui-kit'

type TaskProps = {
	id: string
	title: string
	description?: string | null
	status: Status
}
type Props = TaskProps & {
	onClick: (props: TaskProps) => void
}
export const TaskCard = ({
	id,
	title,
	description,
	status,
	onClick,
}: Props) => {
	const handleClick = () => {
		onClick({ id, title, description, status })
	}
	return (
		<Card
			className={
				'transition-colors hover:cursor-pointer hover:bg-neutral-100 hover:dark:bg-neutral-600'
			}
			onClick={handleClick}
		>
			<h5 className={'font-bold'}>{title}</h5>
			<p>{description}</p>
		</Card>
	)
}
