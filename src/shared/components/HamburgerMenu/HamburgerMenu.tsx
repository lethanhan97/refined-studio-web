import React from 'react';
import { AiOutlineMenu as MenuIcon } from 'react-icons/ai';

import styles from './HamburgerMenu.module.scss';

const MENU_ICON_SIZE = 20;
interface HamburgerMenuProps {}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({}) => {
  return (
    <button className={styles['hamburger-menu']}>
      <MenuIcon size={MENU_ICON_SIZE} />
    </button>
  );
};

export default HamburgerMenu;
