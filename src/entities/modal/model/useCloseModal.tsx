import { useEffect, useRef } from 'react'

export const useCloseModal = (onClose: () => void) => {
	const onCloseRef = useRef(onClose)
	onCloseRef.current = onClose

	useEffect(() => {
		const handlerKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onCloseRef.current()
			}
		}
		document.addEventListener('keyup', handlerKeyDown)
		return () => document.removeEventListener('keyup', handlerKeyDown)
	}, [])

	return {
		onBackgroundClick: ({ target, currentTarget }: React.MouseEvent): void => {
			if (target === currentTarget) {
				onCloseRef.current()
			}
		},
	}
}
