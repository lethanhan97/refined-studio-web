import React from 'react';

import { IconProps } from './types';

const ArrowRight: React.FC<IconProps> = ({ mode = 'primary' }) => {
  const fillColor = mode === 'primary' ? '#262626' : '#DFDFDF';
  return (
    <svg
      width="50"
      height="24"
      viewBox="0 0 50 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M49.0607 13.0607C49.6464 12.4749 49.6464 11.5251 49.0607 10.9393L39.5147 1.3934C38.9289 0.807615 37.9792 0.807615 37.3934 1.3934C36.8076 1.97919 36.8076 2.92894 37.3934 3.51472L45.8787 12L37.3934 20.4853C36.8076 21.0711 36.8076 22.0208 37.3934 22.6066C37.9792 23.1924 38.9289 23.1924 39.5147 22.6066L49.0607 13.0607ZM-1.31134e-07 13.5L48 13.5L48 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"
        fill={fillColor}
      />
    </svg>
  );
};

export { ArrowRight };
