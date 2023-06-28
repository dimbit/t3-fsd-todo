import { Card } from '@/shared/ui-kit'

type Props = {
	title: string
	description?: string | null
	onClick: React.MouseEventHandler<HTMLDivElement>
	'data-task-id': string
}
export const TaskCard = ({ title, description, onClick, ...props }: Props) => {
	return (
		<Card
			onClick={onClick}
			data-task-id={props['data-task-id']}
		>
			<h5 className={'font-bold'}>{title}</h5>
			<p>{description}</p>
		</Card>
	)
}
