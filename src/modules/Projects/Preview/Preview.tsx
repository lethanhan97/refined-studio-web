import React from 'react';

import { c } from '../../../shared/utils/classNameParser';
import styles from './Preview.module.scss';

export interface PreviewProps {
  classNames?: string[];
  imageSrc: StaticImageData;
  name: string;
}

const Preview: React.FC<PreviewProps> = ({ classNames = [] }) => {
  return (
    <div className={c([...classNames, styles['preview']])}>Hello World!</div>
  );
};

export default Preview;
