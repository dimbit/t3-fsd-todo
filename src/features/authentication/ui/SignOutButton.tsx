import { signOut } from 'next-auth/react'

import { Button } from '@/shared/ui-kit/Button'

export const SignOutButton = () => {
	return (
		<Button
			onClick={() => {
				void signOut()
			}}
		>
			Sign out
		</Button>
	)
}
