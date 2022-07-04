import type { AppProps } from 'next/app'

import { Layout } from '@components/index'
import { ContextProvider } from '@contexts/index'

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
