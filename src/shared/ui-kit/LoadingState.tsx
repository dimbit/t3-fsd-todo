import type { ReactNode } from 'react'

import { Loader } from './Loader'

type Props = {
	isLoading?: boolean
	error?: string
	children?: ReactNode
}

export const LoadingState = ({ error, isLoading, children }: Props) => {
	if (error) {
		return <Error>{error}</Error>
	}
	if (isLoading) {
		return <Loader />
	}
	return <>{children}</>
}

type ErrorProps = {
	children: ReactNode
}
const Error: React.FC<ErrorProps> = ({ children }: ErrorProps) => {
	return <div>{children}</div>
}
