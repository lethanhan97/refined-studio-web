import React, { useEffect, useState } from 'react';

import assets from '../../assets';
import { IconProps } from '../../assets/icons/types';
import Logo from '../Logo';
import Text from '../Text';
import styles from './Footer.module.scss';

interface CreditItem {
  normalDisplay: string;
  highlightDisplay: string;
  url: string;
}

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const creditItems: CreditItem[] = [
    {
      normalDisplay: 'Coded by ',
      highlightDisplay: 'Anfromvietnam',
      url: 'https://www.instagram.com/anfromvietnam/',
    },
    {
      normalDisplay: 'Designed by ',
      highlightDisplay: 'Deep Anh',
      url: 'https://www.instagram.com/ac.deepanh.dod/',
    },
  ];

  const footerContactItems: FooterContactItemProps[] = [
    {
      Icon: assets.icons.Phone,
      displayText: '097 422 08 97',
      copyText: '0974220897',
    },
    {
      Icon: assets.icons.Mail,
      displayText: 'refinedstudio46@gmail.com',
    },
    {
      Icon: assets.icons.Instagram,
      url: 'https://www.instagram.com/refinedstudio._/',
      displayText: 'refinedstudio._',
    },
    {
      Icon: assets.icons.Facebook,
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
        {creditItems.map(({ normalDisplay, highlightDisplay, url }) => (
          <li key={normalDisplay}>
            <a href={url} target="_blank" rel="noreferrer">
              <Text.Body2 classNames={[styles['footer-credits-item']]}>
                {normalDisplay}
                <span className={styles['footer-credits-item-highlight']}>
                  {highlightDisplay}
                </span>
              </Text.Body2>
            </a>
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
  copyText?: string;
}
const FooterContactItem: React.FC<FooterContactItemProps> = ({
  Icon,
  displayText,
  copyText,
  url,
}) => {
  const [currentDisplayText, setCurrentDisplayText] = useState('');
  useEffect(() => {
    setCurrentDisplayText(displayText);
  }, [displayText]);

  const COPIED_MESSAGE_TO_DISPLAY_TEXT_DURATION = 700;
  const WrapperNode: React.ElementType = url ? 'a' : 'button';
  const wrapperProps = {
    href: url,
    target: url ? '_blank' : undefined,
    onClick: !url
      ? () => {
          const textToCopy = copyText ?? displayText;
          navigator.clipboard.writeText(textToCopy).then(() => {
            setCurrentDisplayText('Đã copy thành công!');
            setTimeout(() => {
              setCurrentDisplayText(displayText);
            }, COPIED_MESSAGE_TO_DISPLAY_TEXT_DURATION);
          });
        }
      : undefined,
  };

  return (
    <li>
      <WrapperNode
        className={styles['footer-contact-item']}
        key={displayText}
        {...wrapperProps}
      >
        <Icon mode="secondary" />
        <Text.Body2 classNames={[styles['footer-contact-item-text']]}>
          {currentDisplayText}
        </Text.Body2>
      </WrapperNode>
    </li>
  );
};

export default Footer;
