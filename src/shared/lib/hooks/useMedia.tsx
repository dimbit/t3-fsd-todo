import { useEffect, useState } from 'react'

const isBrowser = typeof window !== 'undefined'

const getInitialState = (query: string, defaultState?: boolean) => {
	// prevent hydration mismatch
	if (defaultState !== undefined) {
		return defaultState
	}

	if (isBrowser) {
		return window.matchMedia(query).matches
	}

	return false
}

export const useMedia = (query: string, defaultState?: boolean) => {
	const [state, setState] = useState(getInitialState(query, defaultState))

	useEffect(() => {
		let mounted = true
		const mediaQueryList = window.matchMedia(query)
		const onChange = () => {
			if (!mounted) {
				return
			}
			setState(!!mediaQueryList.matches)
		}

		mediaQueryList.addEventListener('change', onChange)
		setState(mediaQueryList.matches)

		return () => {
			mounted = false
			mediaQueryList.removeEventListener('change', onChange)
		}
	}, [query])

	return state
}
