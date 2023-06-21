import Head from 'next/head'
import { Layout } from '@/widgets/layout'
import { TasksList } from '@/widgets/tasks-list'

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
