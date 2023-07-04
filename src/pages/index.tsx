import type { GetServerSideProps } from 'next'

import { HomeScreen } from '@/screens/home'

import { ROUTES } from '@/shared/routes'

import { getServerAuthSession } from '../server/auth'

export default function Home() {
	return <HomeScreen />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const session = await getServerAuthSession(ctx)

	if (session) {
		return {
			redirect: {
				destination: ROUTES.kanban.calcUrl(),
				permanent: false,
			},
		}
	}
	return {
		props: {},
	}
}
