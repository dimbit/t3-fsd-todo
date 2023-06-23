import { useSession } from 'next-auth/react'
import { Avatar } from '@/shared/ui-kit'

export const ProfilePreview = () => {
	const { data: session } = useSession()
	return (
		<div className={'grid grid-cols-auto-1fr grid-rows-2 gap-x-2'}>
			<Avatar
				src={session?.user.image}
				name={session?.user.name}
				className={'row-start-1 row-end-3 self-center'}
			/>
			<span className={'overflow-hidden text-ellipsis font-bold'}>
				{session?.user.name}
			</span>
			<span className={'overflow-hidden text-ellipsis'}>
				{session?.user.email}
			</span>
		</div>
	)
}