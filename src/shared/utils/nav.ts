import assets from '../assets';
import { IconProps } from '../assets/icons/types';

export interface HeaderNavItem {
  display: string;
  url: string;
}

export interface ContactUsItem {
  Icon: React.FC<IconProps>;
  url: string;
}

export const headerNavItems: HeaderNavItem[] = [
  {
    display: 'Projects',
    url: '/projects',
  },
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
];

export const contactUsItems: ContactUsItem[] = [
  {
    Icon: assets.icons.Instagram,
    url: 'https://www.instagram.com/refinedstudio._/',
  },
  {
    Icon: assets.icons.Facebook,
    url: 'https://www.facebook.com/refinedstudio.46',
  },
];
