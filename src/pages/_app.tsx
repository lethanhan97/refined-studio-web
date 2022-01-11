import '../shared/styles/globals.scss';
import type { AppProps } from 'next/app';

import Layout from '../shared/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
