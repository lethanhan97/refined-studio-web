import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

import assets from '../../assets';
import { ViewportDimensionContext } from '../../contexts/ViewportDimensionContext';
import { contactUsItems, headerNavItems } from '../../utils/nav';
import HamburgerMenuIcon from '../HamburgerMenuIcon';
import Logo from '../Logo';
import Text from '../Text';
import styles from './Header.module.scss';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const { currentMode } = useContext(ViewportDimensionContext);

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

      {currentMode === 'desktop' ? (
        <>
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
              <assets.icons.Phone />
              <Text.Body2
                classNames={[styles['header-links-item-contact-number']]}
              >
                097 422 08 97
              </Text.Body2>
            </li>
            {contactUsItems.map(({ Icon, url }) => (
              <li className={styles['header-links-item']} key={url}>
                <a href={url} target="_blank" rel="noreferrer">
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <HamburgerMenuIcon />
      )}
    </header>
  );
};

export default Header;
