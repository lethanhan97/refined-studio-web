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
      pid: '1',
      date: new Date('10-10-2020'),
    },
    {
      imageSrc: assets.general.BikeGang,
      name: 'Lalala',
      pid: '2',
      date: new Date('10-11-2020'),
    },
    {
      imageSrc: assets.general.BikeGang,
      name: 'Lalala',
      pid: '3',
      date: new Date('10-12-2020'),
    },
    {
      imageSrc: assets.general.BikeGang,
      name: 'Lalala',
      pid: '4',
      date: new Date('11-12-2020'),
    },
    {
      imageSrc: assets.general.BikeGang,
      name: 'Lalala',
      pid: '5',
      date: new Date('12-12-2020'),
    },
    {
      imageSrc: assets.general.BikeGang,
      name: 'Lalala',
      pid: '6',
      date: new Date('11-11-2020'),
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
          {mockData.map((project) => (
            <Preview
              key={project.pid}
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
