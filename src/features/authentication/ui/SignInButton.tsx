import { Button } from '@/shared/ui-kit/Button'
import { signIn } from 'next-auth/react'

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
