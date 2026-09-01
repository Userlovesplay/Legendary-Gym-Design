import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../src/index.css'
import App from '../src/App'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Iron Force</title>
        <meta name="description" content="IRONFORCE | Academia premium com treino de alta performance." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <App />
    </>
  )
}
