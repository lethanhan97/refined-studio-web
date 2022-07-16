import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { getProject } from '../../data/api';
import styles from '../../modules/ProjectDetails/ProjectDetails.module.scss';
import ImageGridLong from '../../shared/components/ImageGridLong';
import Text from '../../shared/components/Text';

const ProjectDetails: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  if (!router.isReady) return null;

  // TODO: Make an error boundary page
  const { name, images } = getProject(String(pid));

  return (
    <>
      <Head>
        <title>Refined.</title>
        <meta name="description" content="Refined Photography Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles['project-details']}>
        <Text.H1>{name}</Text.H1>

        <ImageGridLong
          images={images}
          classNames={[styles['project-details-carousel']]}
        />
      </div>
    </>
  );
};

export default ProjectDetails;
