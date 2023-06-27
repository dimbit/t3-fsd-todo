import { createPortal } from 'react-dom'
import { MODAL_ROOT_NODE_ID } from '../model'
import { Card } from '@/shared/ui-kit/Card'
import { useState, useEffect } from 'react'

type Props = {
	isOpen: boolean
	onClose: () => void
	children?: React.ReactNode
}
export const Modal = ({ isOpen, children }: Props) => {
	const [isMounted, setIsMounted] = useState(false)
	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (isOpen && isMounted) {
		return createPortal(
			<Card>modal{children}</Card>,
			document.getElementById(MODAL_ROOT_NODE_ID) ?? document.body,
		)
	}

	return null
}
