import { createPortal } from 'react-dom'

import { Card } from '@/shared/ui-kit/Card'

import { MODAL_ROOT_NODE_ID } from '../model'
import { useCloseModal, useIsMounted, usePreventBodyScroll } from '../model'

type Props = {
	isOpen: boolean
	onClose: () => void
	children?: React.ReactNode
}

export const Modal = ({ isOpen, onClose, children }: Props) => {
	const isMounted = useIsMounted()
	usePreventBodyScroll(isOpen)
	const { onBackgroundClick } = useCloseModal(onClose)

	if (isOpen && isMounted) {
		return createPortal(
			<div
				className={'fixed bottom-0 left-0 right-0 top-0 flex'}
				onClick={onBackgroundClick}
			>
				<Card className={'m-auto'}>{children}</Card>
			</div>,
			document.getElementById(MODAL_ROOT_NODE_ID) ?? document.body,
		)
	}

	return null
}
