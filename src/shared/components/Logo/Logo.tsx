import React from 'react';

import Text from '../Text';
import styles from './Logo.module.scss';

interface LogoProps {
  mode?: 'primary' | 'secondary';
}

const Logo: React.FC<LogoProps> = ({ mode = 'primary' }) => {
  return <Text.H3 classNames={[styles[`logo-${mode}`]]}>REFINED.</Text.H3>;
};

export default Logo;
