import { useEffect } from 'react'

export const usePreventBodyScroll = (isOpen: boolean) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
			return () => {
				document.body.style.removeProperty('overflow')
			}
		}
	}, [isOpen])
}
