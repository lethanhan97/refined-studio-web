import React from 'react';

import Text from '../../../shared/components/Text';
import styles from './Slogan.module.scss';

interface SloganProps {}

const Slogan: React.FC<SloganProps> = ({}) => {
  return (
    <section className={styles['slogan']}>
      <Text.H1>REFINE YOUR BRAND</Text.H1>
      <Text.Body1 classNames={[styles['slogan-subtitle']]}>
        A Creative Lab to{' '}
        <span className={styles['slogan-subtitle-strong']}>refine</span> your
        fashion business.
      </Text.Body1>
    </section>
  );
};

export default Slogan;
