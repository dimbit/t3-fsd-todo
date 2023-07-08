import { forwardRef } from 'react'
import clsx from 'clsx'

import { Loader } from './Loader'

type ViewType = 'primary' | 'secondary'
type Size = 'small' | 'medium'
type ButtonStyleProps = {
	fullWidth: boolean
	viewType?: ViewType
	size?: Size
	withEqualPaddings?: boolean
}
type Props = {
	children?: React.ReactNode
	className?: string
	isLoading?: boolean
} & Partial<ButtonStyleProps> &
	React.ComponentProps<'button'>

export const Button = forwardRef<HTMLButtonElement, Props>(
	(
		{
			children,
			className,
			isLoading,
			fullWidth,
			viewType = 'primary',
			size = 'medium',
			withEqualPaddings,
			...props
		},
		ref,
	) => {
		return (
			<button
				ref={ref}
				className={clsx([
					'grid h-min grid-flow-col content-center items-center overflow-hidden',
					size === 'small' && [
						withEqualPaddings ? 'px-1 py-1' : 'px-2 py-1',
						'rounded text-sm',
					],
					size === 'medium' && [
						withEqualPaddings ? 'px-2 py-2' : 'px-3 py-2',
						'rounded-md text-base',
					],
					viewType === 'primary' && [
						'border border-neutral-200 bg-white shadow  dark:border-neutral-500 dark:bg-neutral-700',
						'enabled:hover:bg-neutral-100 enabled:dark:hover:bg-neutral-600',
					],
					viewType === 'secondary' && [
						'bg-white dark:bg-neutral-700',
						'disabled:cursor-not-allowed disabled:text-neutral-300',
						'enabled:hover:bg-neutral-100 enabled:dark:hover:bg-neutral-600',
					],
					withEqualPaddings && size === 'small' && 'px-1 py-1',
					withEqualPaddings && size === 'medium' && 'px-2 py-2',
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
