import '../shared/styles/globals.scss';
import type { AppProps } from 'next/app';

import Layout from '../shared/components/Layout';
import ContextWrapper from '../shared/components/ContextWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextWrapper>
  );
}

export default MyApp;
