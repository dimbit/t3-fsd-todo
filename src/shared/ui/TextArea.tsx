import { forwardRef } from 'react'
import clsx from 'clsx'

type Props = {
	error?: string
	isLoading?: boolean
} & React.ComponentProps<'textarea'>

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
	({ error, ...props }, ref) => {
		return (
			<label className={'relative pb-7'}>
				<textarea
					ref={ref}
					className={clsx([
						'w-full rounded border px-4 py-2 shadow outline-none',
						'border-neutral-200 bg-white dark:border-neutral-500 dark:bg-neutral-700',
						'focus:bg-neutral-100 enabled:hover:bg-neutral-100 focus:dark:bg-neutral-600 enabled:dark:hover:bg-neutral-600',
					])}
					{...props}
				/>
				{error ? (
					<span className={'absolute bottom-0 left-0 text-red-400'}>
						{error}
					</span>
				) : null}
			</label>
		)
	},
)

TextArea.displayName = 'TextArea'
