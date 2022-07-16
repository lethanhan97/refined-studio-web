import type { NextPage } from 'next';
import Head from 'next/head';

import Carousel, { CarouselItemType } from '../modules/Home/Carousel';
import ClientsShowcase from '../modules/Home/ClientsShowcase';
import styles from '../modules/Home/Home.module.scss';
import OurWorks, { PortfolioImage } from '../shared/components/ImageGrid';
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
      imageSrc: assets.general.AboutUsLanding,
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.',
      ],
      ctaDisplay: 'Xem chi tiết',
    },
    {
      title: 'Dịch vụ',
      imageSrc: assets.general.ServicesLanding,
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.',
      ],
      ctaDisplay: 'Xem bảng giá',
    },
  ];

  const ourWorks: PortfolioImage[] = [
    {
      imageSrc: assets.general.DanDanBoo,
      ctaDisplay: 'DAN DAN BOO',
    },
    {
      imageSrc: assets.general.NerdUnit,
      ctaDisplay: 'NERD UNIT',
    },
    {
      imageSrc: assets.general.BikeGang,
      ctaDisplay: 'BIKE GANG',
    },
    {
      imageSrc: assets.general.ClownZ,
      ctaDisplay: 'CLOWNZ',
    },
    {
      imageSrc: assets.general.Tlinh,
      ctaDisplay: 'Tlinh',
    },
    {
      imageSrc: assets.general.Chipu,
      ctaDisplay: 'Chipu',
    },
    {
      imageSrc: assets.general.Buffaloes,
      ctaDisplay: 'Buffaloes',
    },
    {
      imageSrc: assets.general.QuocTit,
      ctaDisplay: 'QUOC TIT',
    },
  ];

  const carouselItems: CarouselItemType[] = [
    {
      displayText: 'Dan Dan Collection',
      imageSrc: assets.general.DanDanBoo,
    },
    {
      displayText: 'ClownZ Collection',
      imageSrc: assets.general.ClownZ,
    },
    {
      displayText: 'Chipu Collection',
      imageSrc: assets.general.Chipu,
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
        <Carousel carouselItems={carouselItems} />

        {infoSectionContentArray.map((props, i) => (
          <InfoSection
            key={props.title}
            {...props}
            classNames={[styles['home-info-section']]}
            reverse={i % 2 === 1}
          />
        ))}

        <OurWorks
          imageGridItems={ourWorks}
          classNames={[styles['home-our-works']]}
        />
        <ClientsShowcase classNames={[styles['home-client-showcase']]} />
      </div>
    </>
  );
};

export default Home;
