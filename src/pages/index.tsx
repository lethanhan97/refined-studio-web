import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../modules/Home/Home.module.scss';
import Text from '../shared/components/Text';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Refined.</title>
        <meta name="description" content="Refined Photography Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Text.H1>Hello World</Text.H1>
        <Text.H2>Hello Universe</Text.H2>
        <Text.H3>Hello Universe</Text.H3>
        <Text.H4>Hello Universe</Text.H4>
        <Text.Body1>Hello Universe</Text.Body1>
        <Text.Body2>Hello Universe</Text.Body2>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
