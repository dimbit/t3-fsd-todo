type Props = {
	children: React.ReactNode
}

export const Card = ({ children }: Props) => {
	return (
		<div className={'rounded-xl border border-slate-300 p-4'}>{children}</div>
	)
}
