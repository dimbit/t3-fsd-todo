import { Card } from '@/shared/ui-kit'

type Props = {
	title: string
	description?: string | null
}
export const TaskCard = ({ title, description }: Props) => {
	return (
		<Card>
			<h5 className={'font-bold'}>{title}</h5>
			<p>{description}</p>
		</Card>
	)
}
