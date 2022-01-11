import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { c } from '../../utils/classNameParser';
import Text from '../Text';
import styles from './Header.module.scss';

interface HeaderNavItem {
  display: string;
  url: string;
}

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const headerNavItems: HeaderNavItem[] = [
    {
      display: 'Services',
      url: '/services',
    },
    {
      display: 'About Us',
      url: '/about-us',
    },
    {
      display: 'Packages',
      url: '/packages',
    },
    {
      display: 'Our Works',
      url: '/our-works',
    },
  ];

  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState('');

  useEffect(() => {
    setCurrentRoute(router.pathname);
  }, [router.pathname]);

  return (
    <header className={styles['header']}>
      <Link href="/">
        <a>
          <Text.H3>REFINED.</Text.H3>
        </a>
      </Link>

      <nav className={styles['header-nav']}>
        <ul className={styles['header-nav-list']}>
          {headerNavItems.map(({ display, url }) => (
            <li
              className={c([
                styles['header-nav-list-item'],
                currentRoute.includes(url)
                  ? styles['header-nav-list-item-selected']
                  : '',
              ])}
              key={url}
            >
              <Link href={url}>
                <a>
                  <Text.Body2>{display}</Text.Body2>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
