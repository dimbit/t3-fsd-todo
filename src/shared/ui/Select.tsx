import { forwardRef } from 'react'
import clsx from 'clsx'

type Option = {
	id: string
	name: string
}
type Props = {
	options: Option[]
}

export const Select = forwardRef<HTMLSelectElement, Props>(
	({ options, ...props }, ref) => {
		return (
			<select
				ref={ref}
				className={clsx([
					'cursor-pointer rounded border px-4 py-2 shadow outline-none',
					'border-neutral-200 bg-white dark:border-neutral-500 dark:bg-neutral-700',
					'focus:bg-neutral-100 enabled:hover:bg-neutral-100 focus:dark:bg-neutral-600 enabled:dark:hover:bg-neutral-600',
				])}
				{...props}
			>
				{options.map((option) => {
					return (
						<option
							key={option.id}
							value={option.id}
						>
							{option.name}
						</option>
					)
				})}
			</select>
		)
	},
)

Select.displayName = 'Select'
