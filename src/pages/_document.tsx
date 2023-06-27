import { Html, Head, Main, NextScript } from 'next/document'
import { MODAL_ROOT_NODE_ID } from '@/entities/modal'

export default function Document() {
	return (
		<Html>
			<Head />
			<body>
				<Main />
				<NextScript />
				<div id={MODAL_ROOT_NODE_ID} />
			</body>
		</Html>
	)
}
