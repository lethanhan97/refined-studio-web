import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../modules/Home/Home.module.scss';
import Button from '../shared/components/Button';
import Text from '../shared/components/Text';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Refined.</title>
        <meta name="description" content="Refined Photography Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Text.H1>Hello World</Text.H1>
        <Text.H2>Hello Universe</Text.H2>
        <Text.H3>Hello Universe</Text.H3>
        <Text.H4>Hello Universe</Text.H4>
        <Text.Body1>Hello Universe</Text.Body1>
        <Text.Body2>Hello Universe</Text.Body2>

        <Button mode="filled">Filled</Button>
        <Button mode="outlined">Outlined</Button>
        <Button mode="text">Text</Button>
      </div>
    </>
  );
};

export default Home;
