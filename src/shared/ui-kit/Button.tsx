import { forwardRef } from 'react'
import clsx from 'clsx'

import { Loader } from './Loader'

type ButtonStyleProps = {
	fullWidth: boolean
}
type Props = {
	children?: React.ReactNode
	className?: string
	isLoading?: boolean
} & Partial<ButtonStyleProps> &
	React.ComponentPropsWithoutRef<'button'>

export const Button = forwardRef<HTMLButtonElement, Props>(
	({ children, className, isLoading, fullWidth, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={clsx([
					'grid h-10 grid-flow-col items-center overflow-hidden rounded-md border px-3 py-2 shadow',
					'border-neutral-200 bg-white  dark:border-neutral-500 dark:bg-neutral-700',
					'disabled:cursor-not-allowed disabled:text-neutral-300',
					'enabled:hover:bg-neutral-100 enabled:dark:hover:bg-neutral-600',
					fullWidth && 'w-full',
					className,
				])}
				{...props}
			>
				{isLoading ? <Loader /> : children}
			</button>
		)
	},
)
Button.displayName = 'Button'
