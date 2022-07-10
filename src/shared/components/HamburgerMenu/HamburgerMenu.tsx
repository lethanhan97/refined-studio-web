import Link from 'next/link';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { AiOutlineClose as CrossIcon } from 'react-icons/ai';

import { SideMenuContext } from '../../contexts/SideMenuContext';
import { ViewportDimensionContext } from '../../contexts/ViewportDimensionContext';
import { c } from '../../utils/classNameParser';
import { contactUsItems, headerNavItems } from '../../utils/nav';
import Text from '../Text';
import styles from './HamburgerMenu.module.scss';

const MENU_ICON_SIZE = 20;
const TRANSITION_TIME = 500;

interface HamburgerMenuProps {}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({}) => {
  const { isOpen, setIsOpen } = useContext(SideMenuContext);
  const { currentMode } = useContext(ViewportDimensionContext);
  const [visibility, setVisibility] = useState<'visible' | 'hidden'>('hidden');

  const sideMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentMode === 'desktop') {
      setIsOpen(false);
    }
  }, [currentMode, setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      setVisibility('visible');
    } else {
      setTimeout(() => {
        setVisibility('hidden');
      }, TRANSITION_TIME);
    }
  }, [isOpen]);

  const handleMousedown = useCallback(
    (event: MouseEvent) => {
      if (!sideMenuRef || !sideMenuRef.current) return;
      if (sideMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    },
    [setIsOpen]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleMousedown);

    return () => document.removeEventListener('mousedown', handleMousedown);
  }, [handleMousedown]);

  return (
    <div
      ref={sideMenuRef}
      className={c([
        styles['hamburger-menu'],
        styles[`hamburger-menu-${isOpen ? 'show' : 'hide'}`],
      ])}
      style={{
        visibility,
      }}
    >
      <div
        className={c([
          styles['hamburger-menu-main'],
          styles[`hamburger-menu-main-${isOpen ? 'show' : 'hide'}`],
        ])}
      >
        <button onClick={() => setIsOpen(false)}>
          <CrossIcon
            size={MENU_ICON_SIZE}
            className={styles['hamburger-menu-main-icon']}
          />
        </button>
        <nav className={styles['hamburger-menu-main-list-wrapper']}>
          <ul className={styles['hamburger-menu-main-list']}>
            {headerNavItems.map(({ url, display }) => (
              <li className={styles['hamburger-menu-main-list-item']} key={url}>
                <Link href={url}>
                  <a>
                    <Text.Body2>{display}</Text.Body2>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className={styles['hamburger-menu-main-links']}>
          {contactUsItems.map(({ Icon, url }) => (
            <li className={styles['hamburger-menu-main-links-item']} key={url}>
              <a href={url} target="_blank" rel="noreferrer">
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
