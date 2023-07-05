import { useMedia } from './useMedia'

const MOBILE_ENDPOINT = 640
export const useIsMobile = () => {
	return useMedia(`(max-width: ${MOBILE_ENDPOINT - 1}px)`, false)
}
