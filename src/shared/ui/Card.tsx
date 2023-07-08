import clsx from 'clsx'

type Props = {
	children: React.ReactNode
} & React.ComponentPropsWithoutRef<'div'>

export const Card = ({ children, className, ...props }: Props) => {
	return (
		<div
			className={clsx([
				'rounded-xl bg-white p-4 drop-shadow dark:bg-neutral-700',
				className,
			])}
			{...props}
		>
			{children}
		</div>
	)
}
