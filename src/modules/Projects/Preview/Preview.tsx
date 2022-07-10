import React from 'react';
import Image from 'next/image';

import Text from '../../../shared/components/Text';
import { c } from '../../../shared/utils/classNameParser';
import styles from './Preview.module.scss';

export interface PreviewProps {
  classNames?: string[];
  imageSrc: StaticImageData;
  name: string;
}

const Preview: React.FC<PreviewProps> = ({
  classNames = [],
  imageSrc,
  name,
}) => {
  return (
    <div className={c([...classNames, styles['preview']])}>
      <div className={styles['preview-image']}>
        <Image
          layout="fill"
          objectFit="cover"
          src={imageSrc}
          alt="About us landing photo"
        />
      </div>
      <Text.H4 classNames={[styles['preview-title']]}>{name}</Text.H4>
    </div>
  );
};

export default Preview;
