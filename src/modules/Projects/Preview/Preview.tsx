import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Text from '../../../shared/components/Text';
import { c } from '../../../shared/utils/classNameParser';
import styles from './Preview.module.scss';
import { getVnDateString } from '../../../shared/utils/date';

export interface PreviewProps {
  classNames?: string[];
  imageSrc: StaticImageData;
  name: string;
  pid: string;
  date: Date;
}

const Preview: React.FC<PreviewProps> = ({
  classNames = [],
  imageSrc,
  name,
  date,
  pid,
}) => {
  const router = useRouter();
  const onClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    router.push(`/projects/${pid}`);
  };

  return (
    <button onClick={onClick} className={c([...classNames, styles['preview']])}>
      <div className={styles['preview-image']}>
        <Image
          layout="fill"
          objectFit="cover"
          src={imageSrc}
          alt="About us landing photo"
        />
      </div>
      <Text.H4 classNames={[styles['preview-title']]}>{name}</Text.H4>
      <Text.Body2 classNames={[styles['preview-subtitle']]}>
        {getVnDateString(date)}
      </Text.Body2>
    </button>
  );
};

export default Preview;
