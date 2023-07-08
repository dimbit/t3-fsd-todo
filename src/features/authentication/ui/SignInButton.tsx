import { signIn } from 'next-auth/react'

import { useFSDLayerDebug } from '@/shared/lib/FSDDebug'
import { Button } from '@/shared/ui'

export const SignInButton = () => {
	const { className: debugClassName, ...rest } = useFSDLayerDebug(
		'features',
		SignInButton.name,
	)

	return (
		<Button
			{...rest}
			className={debugClassName}
			onClick={() => {
				void signIn()
			}}
		>
			Sign in
		</Button>
	)
}
