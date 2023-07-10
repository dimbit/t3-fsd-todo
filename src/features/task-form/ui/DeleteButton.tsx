import clsx from 'clsx'

import { useFSDLayerDebug } from '@/shared/lib/FSDDebug'
import { Button } from '@/shared/ui'

type Props = React.ComponentPropsWithoutRef<'button'>

export const DeleteButton = ({ className, ...props }: Props) => {
	const { className: debugClassName, ...rest } = useFSDLayerDebug(
		'features',
		DeleteButton.name,
	)

	return (
		<Button
			{...rest}
			className={clsx([
				'enabled:border-red-400 enabled:dark:border-red-400',
				className,
				debugClassName,
			])}
			{...props}
		>
			Delete
		</Button>
	)
}
