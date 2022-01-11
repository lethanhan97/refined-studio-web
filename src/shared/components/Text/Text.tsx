import React from 'react';

import styles from './Text.module.scss';
import { c } from '../../utils/classNameParser';

interface TextProps {
  children: string;
  classNames?: string[];
}

interface H1Props extends TextProps {}
const H1: React.FC<H1Props> = ({ children, classNames = [] }) => {
  return (
    <h1 className={c([styles['h1'], styles['title'], ...classNames])}>
      {children}
    </h1>
  );
};

interface H2Props extends TextProps {}
const H2: React.FC<H2Props> = ({ children, classNames = [] }) => {
  return (
    <h1 className={c([styles['h2'], styles['title'], ...classNames])}>
      {children}
    </h1>
  );
};

interface H3Props extends TextProps {}
const H3: React.FC<H3Props> = ({ children, classNames = [] }) => {
  return (
    <h1 className={c([styles['h3'], styles['title'], ...classNames])}>
      {children}
    </h1>
  );
};

interface H4Props extends TextProps {}
const H4: React.FC<H4Props> = ({ children, classNames = [] }) => {
  return (
    <h1 className={c([styles['h4'], styles['title'], ...classNames])}>
      {children}
    </h1>
  );
};

interface Body1Props extends TextProps {}
const Body1: React.FC<Body1Props> = ({ children, classNames = [] }) => {
  return (
    <h1 className={c([styles['body-1'], styles['body'], ...classNames])}>
      {children}
    </h1>
  );
};

interface Body2Props extends TextProps {}
const Body2: React.FC<Body2Props> = ({ children, classNames = [] }) => {
  return (
    <h1 className={c([styles['body-2'], styles['body'], ...classNames])}>
      {children}
    </h1>
  );
};

const Text = {
  H1,
  H2,
  H3,
  H4,
  Body1,
  Body2,
};

export default Text;
