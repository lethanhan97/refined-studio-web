import React, { useContext } from 'react';
import { AiOutlineMenu as MenuIcon } from 'react-icons/ai';

import { SideMenuContext } from '../../contexts/SideMenuContext';

const MENU_ICON_SIZE = 20;
interface HamburgerMenuProps {}

const HamburgerMenuIcon: React.FC<HamburgerMenuProps> = ({}) => {
  const { setIsOpen } = useContext(SideMenuContext);

  return (
    <button onClick={() => setIsOpen(true)}>
      <MenuIcon size={MENU_ICON_SIZE} />
    </button>
  );
};

export default HamburgerMenuIcon;
