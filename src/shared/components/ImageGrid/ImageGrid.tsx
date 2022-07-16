import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext, useMemo } from 'react';

import Button from '../Button';
import Text from '../Text';
import { ViewportDimensionContext } from '../../contexts/ViewportDimensionContext';
import { c } from '../../utils/classNameParser';
import styles from './ImageGrid.module.scss';

export interface ImageGridItem {
  imageSrc: StaticImageData;
  ctaDisplay: string;
}

interface OurWorksProps {
  classNames: string[];
  imageGridItems: ImageGridItem[];
}

const OurWorks: React.FC<OurWorksProps> = ({
  classNames = [],
  imageGridItems,
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
    const imagesPerCol = Math.ceil(imageGridItems.length / COL_COUNT);

    return imageGridItems.reduce((aggregator, image, i) => {
      if (i % imagesPerCol === 0) aggregator.push([] as ImageGridItem[]);
      aggregator[aggregator.length - 1].push(image);

      return aggregator;
    }, [] as ImageGridItem[][]);
  }, [COL_COUNT, imageGridItems]);

  const getIndividualImageClassname = (itemNumber: number) => {
    if (currentMode === 'desktop') {
      return styles[
        `our-works-grid-item-${itemNumber % 2 === 1 ? 'short' : 'long'}`
      ];
    }

    return styles['our-works-grid-item-non-desktop'];
  };

  return (
    <section className={c([styles['our-works'], ...classNames])}>
      <Text.H2>Our Works</Text.H2>

      <div className={styles['our-works-grid']}>
        {portfolioImagesColumns.map((column, columnNumber) => (
          <div className={styles['our-works-grid-col']} key={columnNumber}>
            {column.map(({ imageSrc, ctaDisplay }, rowNumber) => (
              <div
                key={rowNumber}
                className={c([
                  styles['our-works-grid-item'],
                  columnNumber < portfolioImagesColumns.length - 1
                    ? styles['our-works-grid-item-space']
                    : '',
                  getIndividualImageClassname(rowNumber + columnNumber),
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
