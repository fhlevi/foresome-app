import 'styles/globals.scss'
import type { AppProps } from 'next/app'
import Core from 'components/wrappers/_core';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Core>
      <Component {...pageProps} />
    </Core>
  )
}

export default MyApp
