import React from 'react';

import { c } from '../../utils/classNameParser';
import styles from './Button.module.scss';

interface ButtonProps {
  children: string;
  mode?: 'filled' | 'text' | 'outlined';
}

const Button: React.FC<ButtonProps> = ({ mode = 'filled', children }) => {
  return (
    <button className={c([styles['button'], styles[mode]])}>{children}</button>
  );
};

export default Button;
