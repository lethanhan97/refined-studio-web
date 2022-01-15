import Image from 'next/image';
import React from 'react';

import { c } from '../../utils/classNameParser';
import Button from '../Button';
import Text from '../Text';
import styles from './InfoSection.module.scss';

export interface InfoSectionProps {
  classNames?: string[];
  title: string;
  paragraphs?: string[];
  imageSrc: StaticImageData;
  reverse?: boolean;
  ctaDisplay: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  classNames = [],
  title,
  paragraphs = [],
  imageSrc,
  reverse,
  ctaDisplay,
}) => {
  return (
    <section
      className={c([
        styles['info-section'],
        reverse ? styles['info-section-reverse'] : '',
        ...classNames,
      ])}
    >
      <article className={styles['info-section-col']}>
        <Text.H2 classNames={[styles['info-section-title']]}>{title}</Text.H2>
        {paragraphs.map((para, i) => (
          <Text.Body2 key={i} classNames={[styles['info-section-para']]}>
            {para}
          </Text.Body2>
        ))}

        <Button mode="cta" classNames={[styles['info-section-cta']]}>
          <Text.Body1>{ctaDisplay}</Text.Body1>
        </Button>
      </article>

      <div className={styles['info-section-spacer']} />

      <div className={styles['info-section-col']}>
        <Image
          layout="fill"
          objectFit="cover"
          src={imageSrc}
          alt="About us landing photo"
        />
      </div>
    </section>
  );
};

export default InfoSection;
