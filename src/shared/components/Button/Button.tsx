import React from 'react';

import { Union } from '../../assets/icons/Union';
import { c } from '../../utils/classNameParser';
import styles from './Button.module.scss';

interface ButtonProps {
  children: string | React.ReactNode;
  mode?: 'filled' | 'text' | 'outlined' | 'cta';
  ctaIconMode?: 'primary' | 'secondary';
  classNames?: string[];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  mode = 'filled',
  ctaIconMode,
  children,
  classNames = [],
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={c([styles['button'], styles[mode], ...classNames])}
    >
      {children}
      {mode === 'cta' && (
        <>
          <span style={{ width: '1rem' }} />
          <Union mode={ctaIconMode} />
        </>
      )}
    </button>
  );
};

export default Button;
