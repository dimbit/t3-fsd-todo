import type { GetServerSideProps } from 'next'
import { getServerAuthSession } from '../server/auth'
import { ROUTES } from '@/shared/routes'
import { TaskListScreen } from '@/screens/task-list'

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
