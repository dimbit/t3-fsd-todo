import { signIn } from 'next-auth/react'

import { Button } from '@/shared/ui'

export const SignInButton = () => {
	return (
		<Button
			onClick={() => {
				void signIn()
			}}
		>
			Sign in
		</Button>
	)
}
