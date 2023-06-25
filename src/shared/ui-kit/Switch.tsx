import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

type Props = Omit<ComponentPropsWithoutRef<'input'>, 'type'>

export const Switch = ({ className, ...props }: Props) => {
	return (
		<label
			className={clsx([
				'relative inline-flex cursor-pointer items-center',
				className,
			])}
		>
			<input
				type={'checkbox'}
				className={'peer sr-only'}
				{...props}
			/>
			<span
				className={clsx([
					'bottom-0 left-0 right-0 top-0 h-6 w-10 cursor-pointer rounded-full bg-neutral-200 peer-checked:bg-amber-500',
					'after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow after:transition-transform peer-checked:after:translate-x-4',
				])}
			/>
		</label>
	)
}
