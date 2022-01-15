import type { NextPage } from 'next';
import Head from 'next/head';

import ClientsShowcase from '../modules/Home/ClientsShowcase';
import styles from '../modules/Home/Home.module.scss';
import Slogan from '../modules/Home/Slogan';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Refined.</title>
        <meta name="description" content="Refined Photography Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles['home']}>
        <Slogan />
        <ClientsShowcase classNames={[styles['home-client-showcase']]} />
      </div>
    </>
  );
};

export default Home;
