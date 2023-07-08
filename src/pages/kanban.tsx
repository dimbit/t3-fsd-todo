import type { GetServerSideProps } from 'next'

import { KanbanScreen } from '@/screens/kanban'

import { ROUTES } from '@/shared/lib'

import { getServerAuthSession } from '../server/auth'

export default function Kanban() {
	return <KanbanScreen />
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
