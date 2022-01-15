import type { NextPage } from 'next';
import Head from 'next/head';

import Carousel from '../modules/Home/Carousel';
import ClientsShowcase from '../modules/Home/ClientsShowcase';
import styles from '../modules/Home/Home.module.scss';
import OurWorks, { PortfolioImage } from '../modules/Home/OurWorks';
import Slogan from '../modules/Home/Slogan';
import assets from '../shared/assets';
import InfoSection, {
  InfoSectionProps,
} from '../shared/components/InfoSection';

type InfoSectionContent = Omit<InfoSectionProps, 'classNames'>;

const Home: NextPage = () => {
  const infoSectionContentArray: InfoSectionContent[] = [
    {
      title: 'Về chúng tôi',
      imageSrc: assets.AboutUsLanding,
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.',
      ],
      ctaDisplay: 'Xem chi tiết',
    },
    {
      title: 'Dịch vụ',
      imageSrc: assets.ServicesLanding,
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.',
      ],
      ctaDisplay: 'Xem bảng giá',
    },
  ];

  const ourWorks: PortfolioImage[] = [
    {
      imageSrc: assets.DanDanBoo,
      ctaDisplay: 'DAN DAN BOO',
    },
    {
      imageSrc: assets.NerdUnit,
      ctaDisplay: 'NERD UNIT',
    },
    {
      imageSrc: assets.BikeGang,
      ctaDisplay: 'BIKE GANG',
    },
    {
      imageSrc: assets.ClownZ,
      ctaDisplay: 'CLOWNZ',
    },
    {
      imageSrc: assets.Tlinh,
      ctaDisplay: 'Tlinh',
    },
    {
      imageSrc: assets.Chipu,
      ctaDisplay: 'Chipu',
    },
    {
      imageSrc: assets.Buffaloes,
      ctaDisplay: 'Buffaloes',
    },
    {
      imageSrc: assets.QuocTit,
      ctaDisplay: 'QUOC TIT',
    },
  ];

  return (
    <>
      <Head>
        <title>Refined.</title>
        <meta name="description" content="Refined Photography Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles['home']}>
        <Slogan />
        <Carousel />

        {infoSectionContentArray.map((props, i) => (
          <InfoSection
            key={props.title}
            {...props}
            classNames={[styles['home-info-section']]}
            reverse={i % 2 === 1}
          />
        ))}

        <OurWorks
          portfolioImages={ourWorks}
          classNames={[styles['home-our-works']]}
        />
        <ClientsShowcase classNames={[styles['home-client-showcase']]} />
      </div>
    </>
  );
};

export default Home;
