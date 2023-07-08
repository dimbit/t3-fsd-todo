import { signOut } from 'next-auth/react'
import clsx from 'clsx'

import LogOutIcon from '@/shared/assets/icons/log-out.svg'
import { useFSDLayerDebug } from '@/shared/lib/FSDDebug'
import { Button } from '@/shared/ui/Button'

type Props = {
	withIcon?: boolean
	withText?: boolean
}
export const SignOutButton = ({ withIcon, withText }: Props) => {
	const { className: debugClassName, ...rest } = useFSDLayerDebug(
		'features',
		SignOutButton.name,
	)
	return (
		<Button
			{...rest}
			onClick={() => {
				void signOut()
			}}
			className={debugClassName}
		>
			{withIcon && <LogOutIcon />}
			{withText && (
				<span className={clsx('text-ellipsis whitespace-nowrap')}>
					Sign out
				</span>
			)}
		</Button>
	)
}
