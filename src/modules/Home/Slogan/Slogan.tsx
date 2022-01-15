import React from 'react';

import Text from '../../../shared/components/Text';
import { c } from '../../../shared/utils/classNameParser';
import styles from './Slogan.module.scss';

interface SloganProps {
  classNames?: string[];
}

const Slogan: React.FC<SloganProps> = ({ classNames = [] }) => {
  return (
    <section className={c([styles['slogan'], ...classNames])}>
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
