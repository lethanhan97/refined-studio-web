import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext, useMemo } from 'react';

import Button from '../../../shared/components/Button';
import Text from '../../../shared/components/Text';
import { ViewportDimensionContext } from '../../../shared/contexts/ViewportDimensionContext';
import { c } from '../../../shared/utils/classNameParser';
import styles from './OurWorks.module.scss';

export interface PortfolioImage {
  imageSrc: StaticImageData;
  ctaDisplay: string;
}

interface OurWorksProps {
  classNames: string[];
  portfolioImages: PortfolioImage[];
}

const OurWorks: React.FC<OurWorksProps> = ({
  classNames = [],
  portfolioImages,
}) => {
  const router = useRouter();
  const { currentMode } = useContext(ViewportDimensionContext);
  const COL_COUNT = (() => {
    switch (currentMode) {
      case 'desktop':
        return 4;
      case 'tablet':
        return 2;
      default:
        return 1;
    }
  })();

  const portfolioImagesColumns = useMemo(() => {
    const imagesPerCol = Math.ceil(portfolioImages.length / COL_COUNT);

    return portfolioImages.reduce((aggregator, image, i) => {
      if (i % imagesPerCol === 0) aggregator.push([] as PortfolioImage[]);
      aggregator[aggregator.length - 1].push(image);

      return aggregator;
    }, [] as PortfolioImage[][]);
  }, [COL_COUNT, portfolioImages]);

  return (
    <section className={c([styles['our-works'], ...classNames])}>
      <Text.H2>Our Works</Text.H2>

      <div className={styles['our-works-grid']}>
        {portfolioImagesColumns.map((column, i) => (
          <div className={styles['our-works-grid-col']} key={i}>
            {column.map(({ imageSrc, ctaDisplay }, j) => (
              <div
                key={j}
                className={c([
                  styles['our-works-grid-item'],
                  i < portfolioImagesColumns.length - 1
                    ? styles['our-works-grid-item-space']
                    : '',
                  styles[
                    `our-works-grid-item-${
                      (i + j) % 2 === 1 && currentMode === 'desktop'
                        ? 'short'
                        : 'long'
                    }`
                  ],
                ])}
              >
                <Image
                  src={imageSrc}
                  alt={ctaDisplay}
                  layout="fill"
                  objectFit="cover"
                  className={styles['our-works-grid-item-image']}
                />
                <Button
                  classNames={[styles['our-works-grid-item-cta']]}
                  mode="cta"
                  ctaIconMode="secondary"
                >
                  <Text.Body1
                    classNames={[styles['our-works-grid-item-cta-text']]}
                  >
                    {ctaDisplay}
                  </Text.Body1>
                </Button>
              </div>
            ))}
          </div>
        ))}
      </div>

      <Button
        mode="cta"
        classNames={[styles['our-works-cta']]}
        onClick={(event) => {
          event.preventDefault();
          router.push('/projects');
        }}
      >
        <Text.Body1>Xem tất cả</Text.Body1>
      </Button>
    </section>
  );
};

export default OurWorks;
