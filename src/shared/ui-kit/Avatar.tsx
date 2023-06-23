import Image from 'next/image'
import clsx from 'clsx'
import { memo } from 'react'

type Size = 'small' | 'medium'

type Props = {
	src?: string | null
	name?: string | null
	className?: string
	size?: Size
}
export const Avatar = memo(function Avatar({
	src,
	name,
	className = '',
	size = 'medium',
}: Props) {
	const alt = name ? `Avatar of ${name}` : 'Avatar'
	return (
		<div
			className={clsx({
				'relative overflow-hidden rounded-full': true,
				'h-6 w-6': size === 'small',
				'h-10 w-10': size === 'medium',
				[className]: true,
			})}
		>
			{src ? (
				<Image
					src={src}
					alt={alt}
					fill
				/>
			) : (
				<div className={'h-full w-full bg-neutral-500'}></div>
			)}
		</div>
	)
})
