import { config } from '~/config';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Telegram',
    url: `https://telegram.org/${config.telegram}`,
    icon: 'telegram',
  },
  {
    label: 'Skype',
    url: `https://join.skype.com/invite/${config.skype}`,
    icon: 'skype',
  },
  {
    label: 'Discord',
    url: `https://discord.gg/${config.discord}`,
    icon: 'discord',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
