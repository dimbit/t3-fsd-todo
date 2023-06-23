import Head from 'next/head'
import { signIn } from 'next-auth/react'

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
				<button
					className={'border border-slate-800'}
					// eslint-disable-next-line @typescript-eslint/no-misused-promises
					onClick={() => signIn()}
				>
					Sign In
				</button>
			</div>
		</>
	)
}
