import Head from 'next/head'
import { ROUTES } from '@/shared/routes'
import type { GetServerSideProps } from 'next'
import { getServerAuthSession } from '../server/auth'
import { SignInButton } from '@/features/authentication'

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
			<div className={'flex h-full items-center justify-center'}>
				<SignInButton />
			</div>
		</>
	)
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
