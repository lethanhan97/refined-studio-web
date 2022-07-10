import { NextPage } from 'next';
import Head from 'next/head';

import Preview, { PreviewProps } from '../../modules/Projects/Preview';
import assets from '../../shared/assets';
import styles from '../../modules/Projects/Projects.module.scss';
import Text from '../../shared/components/Text';

const Projects: NextPage = () => {
  const mockData: PreviewProps[] = [
    {
      imageSrc: assets.general.BikeGang,
      name: 'Lalala',
    },
    {
      imageSrc: assets.general.BikeGang,
      name: 'Lalala',
    },
    {
      imageSrc: assets.general.BikeGang,
      name: 'Lalala',
    },
    {
      imageSrc: assets.general.BikeGang,
      name: 'Lalala',
    },
    {
      imageSrc: assets.general.BikeGang,
      name: 'Lalala',
    },
    {
      imageSrc: assets.general.BikeGang,
      name: 'Lalala',
    },
  ];

  return (
    <>
      <Head>
        <title>Refined.</title>
        <meta name="description" content="Refined Photography Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles['projects']}>
        <Text.H1>PROJECTS</Text.H1>

        <div className={styles['projects-details']}>
          {mockData.map((project, i) => (
            <Preview
              key={i}
              {...project}
              classNames={[styles['projects-details-item']]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
