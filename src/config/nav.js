import { hostnameContext } from '../helper/url';

const NavData = [
  {
    name: 'About',
    url: '/about',
  }, {
    name: 'Private instances',
    url: '/private-instances',
  }, {
    name: 'GitHub',
    url: 'https://github.com/openlawteam',
  }, {
    name: 'Docs',
    url: 'https://docs.openlaw.io',
  }, {
    name: 'Contact',
    url: 'mailto:hello@openlaw.io',
    divider: true,
  }, {
    name: 'Log in',
    url: `${hostnameContext()}login`,
  }, {
    name: 'Sign up',
    url: `${hostnameContext()}signup`,
  },
];

export default NavData;
