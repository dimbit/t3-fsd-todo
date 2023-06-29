import { Card } from '@/shared/ui-kit'

type TaskProps = {
	id: string
	title: string
	description?: string | null
}
type Props = TaskProps & {
	onClick: (props: TaskProps) => void
}
export const TaskCard = ({ id, title, description, onClick }: Props) => {
	const handleClick = () => {
		onClick({ id, title, description })
	}
	return (
		<Card onClick={handleClick}>
			<h5 className={'font-bold'}>{title}</h5>
			<p>{description}</p>
		</Card>
	)
}
