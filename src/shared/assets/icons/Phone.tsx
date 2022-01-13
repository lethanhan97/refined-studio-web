import React from 'react';

import { primaryFill, secondaryFill } from './constants';
import { IconProps } from './types';

const Phone: React.FC<IconProps> = ({ mode = 'primary' }) => {
  const fillColor = mode === 'primary' ? primaryFill : secondaryFill;
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.9994 15.92V18.92C21.0006 19.1985 20.9435 19.4742 20.832 19.7294C20.7204 19.9845 20.5567 20.2136 20.3515 20.4019C20.1463 20.5901 19.904 20.7335 19.6402 20.8227C19.3764 20.9119 19.0968 20.9451 18.8194 20.92C15.7423 20.5856 12.7864 19.5342 10.1894 17.85C7.77327 16.3147 5.72478 14.2662 4.18945 11.85C2.49942 9.24121 1.44769 6.271 1.11944 3.18001C1.09446 2.90347 1.12732 2.62477 1.21595 2.36163C1.30457 2.09849 1.44702 1.85669 1.63421 1.65163C1.82141 1.44656 2.04925 1.28271 2.30324 1.17053C2.55722 1.05834 2.83179 1.00027 3.10945 1.00001H6.10945C6.59475 0.995229 7.06524 1.16708 7.43321 1.48354C7.80118 1.79999 8.04152 2.23945 8.10944 2.72001C8.23607 3.68007 8.47089 4.62273 8.80945 5.53001C8.94399 5.88793 8.97311 6.27692 8.89335 6.65089C8.8136 7.02485 8.62831 7.36812 8.35944 7.64001L7.08945 8.91001C8.513 11.4136 10.5859 13.4865 13.0894 14.91L14.3594 13.64C14.6313 13.3711 14.9746 13.1859 15.3486 13.1061C15.7225 13.0263 16.1115 13.0555 16.4694 13.19C17.3767 13.5286 18.3194 13.7634 19.2794 13.89C19.7652 13.9585 20.2088 14.2032 20.526 14.5775C20.8431 14.9518 21.0116 15.4296 20.9994 15.92Z"
        stroke={fillColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { Phone };
