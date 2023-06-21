import Head from 'next/head'
import { Layout } from '@/widgets/layout'

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
			<Layout>list</Layout>
		</>
	)
}
