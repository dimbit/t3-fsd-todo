import { signOut } from 'next-auth/react'
import clsx from 'clsx'

import { Button } from '@/shared/ui-kit/Button'

import LogOutButton from '@/images/icons/log-out.svg'

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
			{withIcon && <LogOutButton />}
			{withText && (
				<span className={clsx('text-ellipsis whitespace-nowrap')}>
					Sign out
				</span>
			)}
		</Button>
	)
}
