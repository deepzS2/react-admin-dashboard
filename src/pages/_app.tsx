import type { AppProps } from 'next/app'

import { Layout } from '@components'
import { ContextProvider } from '@contexts'

import '@/styles/global.css'
import '@/styles/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ContextProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ContextProvider>
	)
}

export default MyApp
