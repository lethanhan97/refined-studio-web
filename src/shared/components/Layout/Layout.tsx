import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles['layout-main']}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
