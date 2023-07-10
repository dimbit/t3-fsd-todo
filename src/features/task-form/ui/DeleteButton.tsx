import clsx from 'clsx'

import { Button } from '@/shared/ui'

type Props = React.ComponentPropsWithoutRef<'button'>

export const DeleteButton = ({ className, ...props }: Props) => {
	return (
		<Button
			className={clsx([
				'enabled:border-red-400 enabled:dark:border-red-400',
				className,
			])}
			{...props}
		>
			Delete
		</Button>
	)
}
