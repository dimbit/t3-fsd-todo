import { memo } from 'react'
import clsx from 'clsx'

import { SignOutButton } from '@/features/authentication'
import { NavigationBar } from '@/features/navigation'
import { ThemeToggleButton } from '@/features/theme-toggle'

import { ProfilePreview } from '@/entities/profile'

import CloseIcon from '@/shared/assets/icons/close.svg'
import { useFSDLayerDebug } from '@/shared/lib/FSDDebug'
import { Button } from '@/shared/ui'

import { Section } from './Section'

type Props = {
	className?: string
	isOpened?: boolean
	closeSidebar: () => void
}
export const MobileSidebar = memo(
	({ className, isOpened, closeSidebar }: Props) => {
		const { className: debugClassName, ...rest } = useFSDLayerDebug(
			'widgets',
			MobileSidebar.displayName ?? '',
		)
		return (
			<aside
				className={clsx([
					'absolute z-10 grid h-full w-full grid-rows-[auto_1fr_auto] overflow-hidden bg-white drop-shadow-sm transition-transform dark:bg-neutral-700',
					isOpened ? 'translate-x-0' : '-translate-x-full',
					className,
				])}
			>
				<Section className={'grid-cols-1fr-auto'}>
					<ProfilePreview withName />
					<Button
						size={'medium'}
						viewType={'secondary'}
						withEqualPaddings
						onClick={closeSidebar}
					>
						<CloseIcon />
					</Button>
				</Section>
				<Section>
					<NavigationBar />
				</Section>
				<Section>
					<ThemeToggleButton withLabel />
					<SignOutButton withText />
				</Section>
			</aside>
		)
	},
)

MobileSidebar.displayName = 'MobileSidebar'
