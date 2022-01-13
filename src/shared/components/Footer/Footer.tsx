import React from 'react';

import assets from '../../assets';
import { IconProps } from '../../assets/icons/types';
import Logo from '../Logo';
import Text from '../Text';
import styles from './Footer.module.scss';

interface CreditItem {
  normalDisplay: string;
  highlightDisplay: string;
}

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const creditItems: CreditItem[] = [
    {
      normalDisplay: 'Coded by ',
      highlightDisplay: 'Anfromvietnam',
    },
    {
      normalDisplay: 'Designed by ',
      highlightDisplay: 'Deep Anh',
    },
  ];

  const footerContactItems: FooterContactItemProps[] = [
    {
      Icon: assets.Phone,
      displayText: '097 422 08 97',
    },
    {
      Icon: assets.Mail,
      displayText: 'refinedstudio46@gmail.com',
    },
    {
      Icon: assets.Instagram,
      url: 'https://www.instagram.com/refinedstudio._/',
      displayText: 'refinedstudio._',
    },
    {
      Icon: assets.Facebook,
      url: 'https://www.facebook.com/refinedstudio.46',
      displayText: 'refinedstudio.46 ',
    },
  ];

  return (
    <footer className={styles['footer']}>
      <ul className={styles['footer-contact']}>
        <li className={styles['footer-contact-item']}>
          <Logo mode="secondary" />
        </li>

        {footerContactItems.map((item) => (
          <FooterContactItem key={item.displayText} {...item} />
        ))}
      </ul>

      <ul className={styles['footer-credits']}>
        {creditItems.map(({ normalDisplay, highlightDisplay }) => (
          <li key={normalDisplay}>
            <Text.Body2 classNames={[styles['footer-credits-item']]}>
              {normalDisplay}
              <span className={styles['footer-credits-item-highlight']}>
                {highlightDisplay}
              </span>
            </Text.Body2>
          </li>
        ))}
      </ul>
    </footer>
  );
};

interface FooterContactItemProps {
  Icon: React.FC<IconProps>;
  displayText: string;
  url?: string;
}
const FooterContactItem: React.FC<FooterContactItemProps> = ({
  Icon,
  displayText,
  url,
}) => {
  const WrapperNode: React.ElementType = url ? 'a' : 'button';
  const wrapperProps = {
    href: url,
    onClick: !url
      ? () => {
          navigator.clipboard.writeText(displayText).then(() => {
            alert(`copied ${displayText}`);
          });
        }
      : undefined,
  };

  return (
    <WrapperNode key={displayText} {...wrapperProps}>
      <li className={styles['footer-contact-item']}>
        <Icon mode="secondary" />
        <Text.Body2 classNames={[styles['footer-contact-item-text']]}>
          {displayText}
        </Text.Body2>
      </li>
    </WrapperNode>
  );
};

export default Footer;
