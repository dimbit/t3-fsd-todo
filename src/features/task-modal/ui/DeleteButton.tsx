import clsx from 'clsx'

import { Button } from '@/shared/ui-kit'

type Props = React.ComponentPropsWithoutRef<'button'>

export const DeleteButton = ({ className, ...props }: Props) => {
	return (
		<Button
			className={clsx(['dark:border-red-400', className])}
			{...props}
		>
			Delete
		</Button>
	)
}
