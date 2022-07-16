import Image from 'next/image';
import React, { useContext, useMemo } from 'react';
import { v4 as uuid } from 'uuid';

import { ViewportDimensionContext } from '../../contexts/ViewportDimensionContext';
import { c } from '../../utils/classNameParser';
import styles from './ImageGridLong.module.scss';

interface ImageGridItem {
  image: StaticImageData;
  key: string;
}

interface ImageGridColumn {
  key: string;
  column: ImageGridItem[];
}

type ImageGridData = ImageGridColumn[];

interface ImageGridLongProps {
  classNames?: string[];
  images: StaticImageData[];
}

const ImageGridLong: React.FC<ImageGridLongProps> = ({
  images,
  classNames = [],
}) => {
  const { currentMode } = useContext(ViewportDimensionContext);

  const COLUMNS_COUNT = useMemo(() => {
    switch (currentMode) {
      case 'desktop':
        return 5;
      case 'tablet':
        return 3;
      default:
        return 1;
    }
  }, [currentMode]);

  const data: ImageGridData = useMemo(() => {
    const result: ImageGridData = Array.apply(null, Array(COLUMNS_COUNT)).map(
      () => ({
        key: uuid(),
        column: [],
      })
    );

    images.forEach((image, i) => {
      result[i % COLUMNS_COUNT].column.push({
        image,
        key: uuid(),
      });
    });

    return result;
  }, [COLUMNS_COUNT, images]);

  return (
    <div className={c([styles['image-grid-long'], ...classNames])}>
      {data.map(({ key, column }) => (
        <div key={key}>
          {column.map(({ image, key }) => (
            <div key={key} className={styles['image-grid-long-item']}>
              <Image src={image} alt="Poki photo" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageGridLong;
