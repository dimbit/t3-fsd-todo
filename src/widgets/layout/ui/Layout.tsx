type Props = {
	children?: React.ReactNode
}

export const Layout = ({ children }: Props) => {
	return (
		<>
			<main className={'h-full'}>{children}</main>
		</>
	)
}
