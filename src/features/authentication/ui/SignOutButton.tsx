import { signOut } from 'next-auth/react'
import clsx from 'clsx'

import LogOutIcon from '@/shared/assets/icons/log-out.svg'
import { Button } from '@/shared/ui/Button'

type Props = {
	withIcon?: boolean
	withText?: boolean
}
export const SignOutButton = ({ withIcon, withText }: Props) => {
	return (
		<Button
			onClick={() => {
				void signOut()
			}}
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
