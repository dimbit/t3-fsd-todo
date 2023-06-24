type Props = {
	children: React.ReactNode
}

export const Card = ({ children }: Props) => {
	return (
		<div className={'rounded-xl bg-white p-4 drop-shadow dark:bg-neutral-700'}>
			{children}
		</div>
	)
}
