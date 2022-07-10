import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from '../../modules/Projects/Projects.module.scss';
import Text from '../../shared/components/Text';

const ProjectDetails: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <Head>
        <title>Refined.</title>
        <meta name="description" content="Refined Photography Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles['projects']}>
        <Text.H1>{pid}</Text.H1>
      </div>
    </>
  );
};

export default ProjectDetails;
