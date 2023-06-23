import Head from 'next/head'
import { Layout } from '@/widgets/layout'
import { TasksList } from '@/widgets/tasks-list'
import type { GetServerSideProps } from 'next'
import { getServerAuthSession } from '../server/auth'
import { ROUTES } from '@/shared/routes'

export default function Home() {
	return (
		<>
			<Head>
				<title>To Do</title>
				<meta
					name='description'
					content='To Do web app'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<Layout>
				<TasksList />
			</Layout>
		</>
	)
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
