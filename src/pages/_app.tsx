import 'styles/globals.scss'
import type { AppProps } from 'next/app'
import Core from 'components/wrappers/_core';
import { withRedux } from 'config/redux/with-redux-store';
import { withRouter } from 'next/router';
import Base from 'components/abstracts/base';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Core>
      <Base />
      <Component {...pageProps} />
    </Core>
  )
}

export default withRedux(withRouter(MyApp));
