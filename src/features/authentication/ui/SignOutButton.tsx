import { Button } from '@/shared/ui-kit/Button'
import { signOut } from 'next-auth/react'

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
