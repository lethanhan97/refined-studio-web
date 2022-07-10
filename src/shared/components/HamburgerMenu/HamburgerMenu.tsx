import React from 'react';

import styles from './HamburgerMenu.module.scss';

interface HamburgerMenuProps {

}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({}) => {
return (
<div className={styles['hamburger-menu']}>
    Hello World!
</div>
);
};

export default HamburgerMenu;