import React from 'react';

import { Union } from '../../assets/icons/Union';
import { c } from '../../utils/classNameParser';
import styles from './Button.module.scss';

interface ButtonProps {
  children: string | React.ReactNode;
  mode?: 'filled' | 'text' | 'outlined' | 'cta';
  classNames?: string[];
}

const Button: React.FC<ButtonProps> = ({
  mode = 'filled',
  children,
  classNames = [],
}) => {
  return (
    <button className={c([styles['button'], styles[mode], ...classNames])}>
      {children}
      {mode === 'cta' && (
        <>
          <span style={{ width: '1rem' }} />
          <Union />
        </>
      )}
    </button>
  );
};

export default Button;
