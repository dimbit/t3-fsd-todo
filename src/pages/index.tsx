import { ROUTES } from '@/shared/routes'
import type { GetServerSideProps } from 'next'
import { getServerAuthSession } from '../server/auth'
import { HomeScreen } from '@/screens/home'

export default function Home() {
	return <HomeScreen />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const session = await getServerAuthSession(ctx)

	if (session) {
		return {
			redirect: {
				destination: ROUTES.list.calcUrl(),
				permanent: false,
			},
		}
	}
	return {
		props: {},
	}
}
