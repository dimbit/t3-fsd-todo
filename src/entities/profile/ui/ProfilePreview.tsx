import { useSession } from 'next-auth/react'
import clsx from 'clsx'

import { useFSDLayerDebug } from '@/shared/lib/FSDDebug'
import { Avatar } from '@/shared/ui'

type Props = {
	className?: string
	withName?: boolean
}
export const ProfilePreview = ({ className, withName }: Props) => {
	const { data: session } = useSession()

	const { className: debugClassName, ...rest } = useFSDLayerDebug(
		'entities',
		ProfilePreview.name,
	)

	return (
		<div
			{...rest}
			className={clsx([
				'grid h-12 grid-rows-2',
				withName && 'grid-cols-auto-1fr gap-x-2',
				className,
				debugClassName,
			])}
		>
			<Avatar
				src={session?.user.image}
				name={session?.user.name}
				className={'row-start-1 row-end-3 self-center'}
			/>
			{withName && (
				<>
					<span className={'overflow-hidden text-ellipsis font-bold'}>
						{session?.user.name}
					</span>
					<span
						className={
							'overflow-hidden text-ellipsis text-sm text-neutral-500 dark:text-neutral-300'
						}
					>
						{session?.user.email}
					</span>
				</>
			)}
		</div>
	)
}
