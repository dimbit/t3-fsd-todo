import { createPortal } from 'react-dom'
import clsx from 'clsx'

import CloseIcon from '@/shared/assets/icons/close.svg'
import { Button, Card } from '@/shared/ui'

import { MODAL_ROOT_NODE_ID } from '../model'
import { useCloseModal, useIsMounted, usePreventBodyScroll } from '../model'
type Props = {
	isOpen: boolean
	onClose: () => void
	children?: React.ReactNode
	className?: string
} & { [key: `data-${string}`]: string | undefined }

export const Modal = ({
	isOpen,
	onClose,
	children,
	className,
	...dataAttributes
}: Props) => {
	const isMounted = useIsMounted()
	usePreventBodyScroll(isOpen)
	const { onBackgroundClick } = useCloseModal(onClose)

	if (isOpen && isMounted) {
		return createPortal(
			<div
				className={'fixed bottom-0 left-0 right-0 top-0 z-50 flex'}
				onClick={onBackgroundClick}
			>
				<Card
					className={clsx([
						'm-auto h-full w-full rounded-none pt-16',
						'sm:h-auto sm:w-auto sm:rounded',
						className,
					])}
					{...dataAttributes}
				>
					<Button
						withEqualPaddings
						size={'small'}
						onClick={onClose}
						className={'absolute right-4 top-4'}
						viewType={'secondary'}
					>
						<CloseIcon />
					</Button>
					{children}
				</Card>
			</div>,
			document.getElementById(MODAL_ROOT_NODE_ID) ?? document.body,
		)
	}

	return null
}
