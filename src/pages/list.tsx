import type { GetServerSideProps } from 'next'

import { TaskListScreen } from '@/screens/task-list'

import { ROUTES } from '@/shared/lib'

import { getServerAuthSession } from '../server/auth'

export default function Home() {
	return <TaskListScreen />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const session = await getServerAuthSession(ctx)
	if (session) {
		return {
			props: {},
		}
	}
	return {
		redirect: {
			destination: ROUTES.root.calcUrl(),
			permanent: false,
		},
	}
}
