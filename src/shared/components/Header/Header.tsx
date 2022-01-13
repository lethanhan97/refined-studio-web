import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import assets from '../../assets';
import { IconProps } from '../../assets/icons/types';
import Logo from '../Logo';
import Text from '../Text';
import styles from './Header.module.scss';

interface HeaderNavItem {
  display: string;
  url: string;
}

interface ContactUsItem {
  Icon: React.FC<IconProps>;
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

  const contactUsItems: ContactUsItem[] = [
    {
      Icon: assets.Instagram,
      url: 'https://www.instagram.com/refinedstudio._/',
    },
    {
      Icon: assets.Facebook,
      url: 'https://www.facebook.com/refinedstudio.46',
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
          <Logo />
        </a>
      </Link>

      <nav className={styles['header-nav']}>
        <ul className={styles['header-nav-list']}>
          {headerNavItems.map(({ display, url }) => (
            <li className={styles['header-nav-list-item']} key={url}>
              <Link href={url}>
                <a>
                  <Text.Body2
                    classNames={[
                      currentRoute.includes(url)
                        ? styles['header-nav-list-item-selected']
                        : '',
                    ]}
                  >
                    {display}
                  </Text.Body2>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <ul className={styles['header-links']}>
        <li className={styles['header-links-item-contact']}>
          <assets.Phone />
          <Text.Body2 classNames={[styles['header-links-item-contact-number']]}>
            097 422 08 97
          </Text.Body2>
        </li>
        {contactUsItems.map(({ Icon, url }) => (
          <li className={styles['header-links-item']} key={url}>
            <a href={url} target="_blank" rel="noreferrer">
              {' '}
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
