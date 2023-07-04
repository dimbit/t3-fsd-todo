import clsx from 'clsx'

type SectionProps = {
	children?: React.ReactNode
	className?: string
}
export const Section = ({ children, className }: SectionProps) => {
	return (
		<div
			className={clsx([
				'grid grid-flow-row content-start gap-4 border-b border-b-neutral-300 px-2 py-4',
				'last:border-b-0 dark:border-b-neutral-600',
				className,
			])}
		>
			{children}
		</div>
	)
}
