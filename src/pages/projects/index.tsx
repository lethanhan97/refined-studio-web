import { NextPage } from 'next';
import Head from 'next/head';

import Preview, { PreviewProps } from '../../modules/Projects/Preview';
import styles from '../../modules/Projects/Projects.module.scss';
import Text from '../../shared/components/Text';
import { getAllProjects } from '../../data/api';

const Projects: NextPage = () => {
  const data: PreviewProps[] = getAllProjects().map(
    ({ pid, name, coverImage: coverImage, date }) => ({
      pid,
      name,
      imageSrc: coverImage,
      date,
    })
  );

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
          {data.map((project) => (
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
