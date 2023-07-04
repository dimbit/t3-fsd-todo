import { SignInButton } from '@/features/authentication'

import { HomeLayout } from '@/widgets/home-layout'

export const HomeScreen = () => {
	return (
		<HomeLayout>
			<div className={'flex h-full items-center justify-center'}>
				<SignInButton />
			</div>
		</HomeLayout>
	)
}
