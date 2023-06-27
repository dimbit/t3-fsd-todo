import { createPortal } from 'react-dom'
import { MODAL_ROOT_NODE_ID } from '../model'
import { Card } from '@/shared/ui-kit/Card'

const modalRoot = document.getElementById(MODAL_ROOT_NODE_ID) ?? document.body

type Props = {
	isOpen: boolean
	onClose: () => void
	children?: React.ReactNode
}
export const Modal = ({ isOpen, children }: Props) => {
	if (isOpen) {
		return createPortal(<Card>modal{children}</Card>, modalRoot)
	}
	return null
}
