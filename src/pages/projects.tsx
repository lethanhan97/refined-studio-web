import { NextPage } from 'next';
import Head from 'next/head';

import styles from '../modules/Projects/Projects.module.scss';
import Text from '../shared/components/Text';

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Refined.</title>
        <meta name="description" content="Refined Photography Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles['projects']}>
        <Text.H1>PROJECTS</Text.H1>
      </div>
    </>
  );
};

export default Projects;
