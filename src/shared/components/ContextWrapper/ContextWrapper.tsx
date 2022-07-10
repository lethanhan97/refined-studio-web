import React from 'react';

import { SideMenuProvider } from '../../contexts/SideMenuContext';
import { ViewportDimensionProvider } from '../../contexts/ViewportDimensionContext';

interface ContextWrapperProps {
  children: React.ReactNode;
}

const ContextWrapper: React.FC<ContextWrapperProps> = ({ children }) => {
  return (
    <ViewportDimensionProvider>
      <SideMenuProvider>{children}</SideMenuProvider>
    </ViewportDimensionProvider>
  );
};

export default ContextWrapper;
